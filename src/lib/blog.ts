import type { BlogBlock, BlogPost } from "@/lib/blog-types";
import { allBlogPosts } from "@/lib/blog-posts";

export type { BlogBlock, BlogPost } from "@/lib/blog-types";
export { blogLinks } from "@/lib/blog-types";

export const blogPosts: BlogPost[] = allBlogPosts;

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
