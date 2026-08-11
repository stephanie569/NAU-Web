# Long-form journal expansion brief

## File format
Each article is `src/lib/blog-posts/<slug>.ts`:

```ts
import type { BlogPost } from "@/lib/blog-types";
import { blogLinks } from "@/lib/blog-types";

const post: BlogPost = { ... };
export default post;
```

Keep slug, date, category, image exactly. Improve excerpt + metaDescription. Keep existing mid-article image `src` paths if present; you may add more structure around them.

## Block types
`p`, `h2`, `h3`, `ul`, `ol`, `quote`, `image`, `callout` `{title,text}`, `takeaway` `{text}`, `table` `{headers,rows}`, `faq` `{items:[{question,answer}]}`, `cta` `{lead,button,href}` (one CTA at end, href `/contact`).

Inline links in `p`/`ul`/`ol`/`callout`/`takeaway`/`table`/`faq` text: `[label](/blog/slug)` or `[label](https://...)`.

Use `blogLinks.*` values inside markdown links, e.g. `[product-market fit guide](${...})` - NO: must be string literals like `[clarity guide](/blog/product-doesnt-have-marketing-problem-clarity-problem)`.

## Voice
Professional, educational, human, strategic. Subtle dry British humour ~once per 400-600 words. First person as Stefani / nau strategist. No agency fluff, no buzzwords, no fabricated stats.

## Required content depth (~2000-3500 words)
Strong opening; why it matters; teach before advising; frameworks in plain English; real examples (Apple, Stripe, Notion, Linear, Figma, Airbnb, etc.) + fictional startups; Try this / checklist / exercises; takeaways after major sections; FAQ where useful; actionable ending; 3-8 internal links; real external links only (NN/g, Baymard, HBR, YC Library, web.dev, WCAG, First Round Review, Google Search Central, Interaction Design Foundation). Never invent studies-use observation if unsure.

## External link examples (use real URLs)
- https://www.nngroup.com/
- https://baymard.com/blog
- https://developers.google.com/search/docs
- https://www.ycombinator.com/library
- https://hbr.org/
- https://review.firstround.com/
- https://web.dev/
- https://www.w3.org/WAI/standards-guidelines/wcag/
- https://www.interaction-design.org/
- https://web.dev/articles/vitals
