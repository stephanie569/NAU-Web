import type { BlogBlock, BlogPost } from "@/lib/blog-types";
import { allBlogPosts } from "@/lib/blog-posts";

export type { BlogBlock, BlogPost } from "@/lib/blog-types";
export { blogLinks } from "@/lib/blog-types";

export const blogPosts: BlogPost[] = allBlogPosts;

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

function parsePostDate(date: string) {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

/** Newest first — same default order as the journal listing. */
export function getPostsByDateDesc() {
  return [...blogPosts].sort(
    (a, b) => parsePostDate(b.date) - parsePostDate(a.date),
  );
}

export function getAdjacentPosts(slug: string) {
  const ordered = getPostsByDateDesc();
  const index = ordered.findIndex((post) => post.slug === slug);
  if (index < 0) {
    return { previous: undefined, next: undefined };
  }

  return {
    // Newer post (toward the start of newest-first list)
    previous: index > 0 ? ordered[index - 1] : undefined,
    // Older post (continue reading chronologically backward / deeper into the archive)
    next: index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
}

/**
 * Complementary reads: same topic first (nearest in date order),
 * then fill with other recent posts. Excludes the current slug.
 */
export function getRelatedPosts(slug: string, limit = 3) {
  const current = getBlogPost(slug);
  if (!current) return [];

  const ordered = getPostsByDateDesc();
  const index = ordered.findIndex((post) => post.slug === slug);
  const others = ordered.filter((post) => post.slug !== slug);

  const sameCategory = others.filter(
    (post) => post.category === current.category,
  );

  // Prefer the next older essay in this topic, then newer ones, then the rest of the topic
  const rankedSame: BlogPost[] = [];
  if (index >= 0) {
    for (let i = index + 1; i < ordered.length; i++) {
      if (ordered[i].category === current.category) {
        rankedSame.push(ordered[i]);
        break;
      }
    }
    for (let i = index - 1; i >= 0; i--) {
      if (ordered[i].category === current.category) {
        rankedSame.push(ordered[i]);
        break;
      }
    }
  }

  const sameRest = sameCategory.filter(
    (post) => !rankedSame.some((r) => r.slug === post.slug),
  );
  const different = others.filter(
    (post) => post.category !== current.category,
  );

  return [...rankedSame, ...sameRest, ...different].slice(0, limit);
}
