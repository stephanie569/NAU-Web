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
          };
        }
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const QUALITY_SCALE = 2;
const HD_QUALITIES = ["hd1080", "hd720", "large"];
const YT_ENDED = 0;
const YT_PLAYING = 1;
const YT_PAUSED = 2;
const MIN_COVER_MS = 2200;
const REVEAL_AFTER_PLAYING_MS = 300;

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
  const revealTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const readyAtRef = useRef<number | null>(null);
  const playerId = useId().replace(/:/g, "");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    hasStartedRef.current = false;
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
      clearTimers();
      setIsVisible(true);
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

    const createPlayer = () => {
      if (cancelled || !mountRef.current || !window.YT?.Player) return;

      playerRef.current?.destroy();
      clearTimers();
      hasStartedRef.current = false;
      readyAtRef.current = null;
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
          start: 0,
        },
        events: {
          onReady: ({ target }) => {
            readyAtRef.current = Date.now();
            ensurePlayback(target);

            playIntervalRef.current = setInterval(() => {
              if (hasStartedRef.current || cancelled) {
                clearTimers();
                return;
              }
              ensurePlayback(target);
            }, 250);
          },
          onStateChange: ({ data, target }) => {
            if (data === YT_ENDED) {
              target.seekTo(0, true);
              ensurePlayback(target);
              return;
            }

            if (data === YT_PAUSED) {
              ensurePlayback(target);
              return;
            }

            if (data === YT_PLAYING) {
              requestHdQuality(target);
              if (!hasStartedRef.current) {
                scheduleReveal();
              }
            }
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
      {!isVisible && (
        <div className="absolute inset-0 z-20 bg-[#0a0a0a]" aria-hidden />
      )}

      {/* Blocks hover/focus so YouTube play/seek controls never appear */}
      <div
        className="absolute inset-0 z-30"
        aria-hidden
        style={{ background: "transparent" }}
      />

      <div
        className={`pointer-events-none absolute top-1/2 left-1/2 z-0 origin-center ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          visibility: isVisible ? "visible" : "hidden",
          width: `${177.78 * QUALITY_SCALE}vh`,
          minWidth: `${100 * QUALITY_SCALE}%`,
          height: `${56.25 * QUALITY_SCALE}vw`,
          minHeight: `${100 * QUALITY_SCALE}%`,
          transform: isVisible
            ? `translate(-50%, -50%) scale(${1.12 / QUALITY_SCALE})`
            : "translate(-200vw, -50%) scale(0.001)",
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
