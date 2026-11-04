"use client";

import { useEffect, useId, useRef, useState } from "react";

interface YouTubeBackgroundVideoProps {
  videoId: string;
}

interface YTPlayer {
  destroy: () => void;
  mute: () => void;
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  setPlaybackQuality: (quality: string) => void;
  getDuration: () => number;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          host?: string;
          playerVars: Record<string, string | number>;
          events: {
            onReady?: (event: { target: YTPlayer }) => void;
            onStateChange?: (event: { data: number; target: YTPlayer }) => void;
            onError?: (event: { data: number; target: YTPlayer }) => void;
          };
        }
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const QUALITY_SCALE = 2;
/** Extra crop so the corner watermark sits outside the frame. */
const COVER_SCALE = 1.42;
const HD_QUALITIES = ["hd1080", "hd720", "large"];
const YT_ENDED = 0;
const YT_PLAYING = 1;
const YT_PAUSED = 2;
const MIN_COVER_MS = 2200;
const REVEAL_AFTER_PLAYING_MS = 450;

function midPointSeconds(player: YTPlayer) {
  const duration = player.getDuration();
  if (!Number.isFinite(duration) || duration <= 0) return 0;
  return duration / 2;
}

function requestHdQuality(player: YTPlayer) {
  for (const quality of HD_QUALITIES) {
    player.setPlaybackQuality(quality);
  }
}

function loadYouTubeApi() {
  return new Promise<void>((resolve) => {
    if (window.YT?.Player) {
      resolve();
      return;
    }

    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      resolve();
    };

    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
    }
  });
}

export function YouTubeBackgroundVideo({ videoId }: YouTubeBackgroundVideoProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const hasStartedRef = useRef(false);
  const hasSeekedToMiddleRef = useRef(false);
  const revealTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const readyAtRef = useRef<number | null>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const everPlayedRef = useRef(false);
  const errorAttemptsRef = useRef(0);
  const playerId = useId().replace(/:/g, "");
  const [isVisible, setIsVisible] = useState(false);

  const placedTransform = `translate(-50%, -50%) scale(${COVER_SCALE / QUALITY_SCALE})`;
  const hiddenTransform = "translate(-200vw, -50%) scale(0.001)";

  const paintVisibility = (show: boolean) => {
    const frame = frameRef.current;
    const cover = coverRef.current;
    // Park off-screen only before the first frame. After that, keep the
    // player in place under a cover so hiding it does not pause playback.
    const park = !show && !everPlayedRef.current;
    if (frame) {
      frame.style.opacity = show ? "1" : "0";
      frame.style.visibility = park ? "hidden" : "visible";
      frame.style.transform = park ? hiddenTransform : placedTransform;
    }
    if (cover) {
      cover.style.opacity = show ? "0" : "1";
    }
  };

  useEffect(() => {
    hasStartedRef.current = false;
    hasSeekedToMiddleRef.current = false;
    setIsVisible(false);
  }, [videoId]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let cancelled = false;

    const clearTimers = () => {
      if (revealTimeoutRef.current) {
        clearTimeout(revealTimeoutRef.current);
        revealTimeoutRef.current = null;
      }
      if (playIntervalRef.current) {
        clearInterval(playIntervalRef.current);
        playIntervalRef.current = null;
      }
    };

    const revealPlayer = () => {
      if (hasStartedRef.current || cancelled) return;
      hasStartedRef.current = true;
      everPlayedRef.current = true;
      if (revealTimeoutRef.current) {
        clearTimeout(revealTimeoutRef.current);
        revealTimeoutRef.current = null;
      }
      paintVisibility(true);
      setIsVisible(true);
    };

    const concealPlayer = () => {
      hasStartedRef.current = false;
      if (revealTimeoutRef.current) {
        clearTimeout(revealTimeoutRef.current);
        revealTimeoutRef.current = null;
      }
      paintVisibility(false);
      setIsVisible(false);
    };

    const scheduleReveal = () => {
      if (hasStartedRef.current || cancelled || revealTimeoutRef.current) return;

      const readyAt = readyAtRef.current ?? Date.now();
      const elapsed = Date.now() - readyAt;
      const delay = Math.max(MIN_COVER_MS - elapsed, REVEAL_AFTER_PLAYING_MS);

      revealTimeoutRef.current = setTimeout(() => {
        revealTimeoutRef.current = null;
        revealPlayer();
      }, delay);
    };

    const ensurePlayback = (player: YTPlayer) => {
      player.mute();
      player.playVideo();
      requestHdQuality(player);
    };

    const startFromMiddle = (player: YTPlayer) => {
      const mid = midPointSeconds(player);
      if (mid > 0) {
        player.seekTo(mid, true);
        hasSeekedToMiddleRef.current = true;
      }
      ensurePlayback(player);
    };

    const createPlayer = () => {
      if (cancelled || !mountRef.current || !window.YT?.Player) return;

      playerRef.current?.destroy();
      clearTimers();
      hasStartedRef.current = false;
      hasSeekedToMiddleRef.current = false;
      everPlayedRef.current = false;
      readyAtRef.current = null;
      paintVisibility(false);
      setIsVisible(false);

      playerRef.current = new window.YT.Player(mountRef.current, {
        host: "https://www.youtube-nocookie.com",
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          cc_load_policy: 0,
          loop: 1,
          playlist: videoId,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          enablejsapi: 1,
          origin: window.location.origin,
          vq: "hd1080",
        },
        events: {
          onReady: ({ target }) => {
            readyAtRef.current = Date.now();
            startFromMiddle(target);

            playIntervalRef.current = setInterval(() => {
              if (cancelled) return;
              ensurePlayback(target);
            }, 800);
          },
          onStateChange: ({ data, target }) => {
            if (data === YT_PLAYING) {
              requestHdQuality(target);
              if (!hasSeekedToMiddleRef.current) {
                startFromMiddle(target);
                concealPlayer();
                return;
              }
              if (!hasStartedRef.current) scheduleReveal();
              return;
            }

            // Buffering keeps the current frame. Pause, end, and cue paint the logo.
            if (data === YT_ENDED || data === YT_PAUSED || data === 5 || data === -1) {
              concealPlayer();
              if (data === YT_ENDED) startFromMiddle(target);
              else ensurePlayback(target);
            }
          },
          onError: () => {
            concealPlayer();
            errorAttemptsRef.current += 1;
            if (errorAttemptsRef.current > 3 || cancelled) return;
            window.setTimeout(() => {
              if (!cancelled) createPlayer();
            }, 1200);
          },
        },
      });
    };

    loadYouTubeApi().then(() => {
      if (!cancelled) createPlayer();
    });

    return () => {
      cancelled = true;
      clearTimers();
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [videoId]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
      <div
        ref={coverRef}
        className="absolute inset-0 z-20 bg-[#0a0a0a]"
        style={{ opacity: isVisible ? 0 : 1 }}
        aria-hidden
      />

      {/* Blocks hover/focus so YouTube play/seek controls never appear */}
      <div
        className="absolute inset-0 z-30"
        aria-hidden
        style={{ background: "transparent" }}
      />

      <div
        ref={frameRef}
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 origin-center"
        style={{
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? "visible" : "hidden",
          width: `${177.78 * QUALITY_SCALE}vh`,
          minWidth: `${100 * QUALITY_SCALE}%`,
          height: `${56.25 * QUALITY_SCALE}vw`,
          minHeight: `${100 * QUALITY_SCALE}%`,
          transform: isVisible ? placedTransform : hiddenTransform,
        }}
      >
        <div
          id={playerId}
          ref={mountRef}
          className="pointer-events-none h-full w-full [&_iframe]:pointer-events-none"
        />
      </div>
    </div>
  );
}
