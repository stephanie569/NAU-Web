import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "audited-50-startup-websites-10-mistakes",
  title:
    "I audited 50 startup websites. Here are the 10 mistakes I saw over and over again.",
  excerpt:
    "Fifty early-stage sites, different niches, same conversion habits: vague headlines, weak proof, cluttered heroes, and pages that ask for interest without earning it. The mistakes—and the fixes.",
  date: "July 18, 2026",
  category: "Product Launches",
  image: "/images/blog/blog-32-50-websites.png",
  metaDescription:
    "A practical look at 50 startup websites and the 10 conversion mistakes that kept appearing—plus fixes for messaging, UX, trust, speed, and SEO structure.",
  content: [
    {
      type: "p",
      text: "I audited 50 startup websites across SaaS, consumer apps, and service-led businesses. Different niches. Same habits. Most sites were not ugly. They were unclear. And unclear websites quietly destroy pipeline.",
    },
    {
      type: "p",
      text: "If traffic is decent but demos, trials, or inbound leads are weak, start here. These are the ten mistakes I saw again and again—and what to do instead. This is not a taste lecture. It is a conversion autopsy.",
    },
    {
      type: "p",
      text: "A note on method: I reviewed public marketing sites the way a cold visitor would—first viewport, mobile path, proof placement, forms, speed feel, and whether a stranger could explain the offer. Patterns beat anecdotes. These ten showed up often enough to treat as a checklist, not a mood.",
    },
    {
      type: "callout",
      title: "How to use this article",
      text: "Score your site against each mistake (yes / partial / no). Fix the highest-leverage “yes” items before you redesign everything. Most teams need sharper structure, not a new illustration style.",
    },
    {
      type: "h2",
      text: "1. The headline names the category, not the result",
    },
    {
      type: "p",
      text: "“AI-powered platform for modern teams” tells a visitor almost nothing. Strong headlines name the customer, the pain, and the outcome. People decide in seconds whether the page is for them.",
    },
    {
      type: "p",
      text: "Stripe did not open with category fog. Airbnb’s homepage clarity has always been about a job: find a place to stay / host a space. Your category may be competitive. Your outcome still has to be specific.",
    },
    {
      type: "ul",
      items: [
        "Weak: “The future of workflow automation.”",
        "Stronger: “Help support teams close tickets 30% faster without more headcount.”",
        "Test: can a stranger repeat the result after one glance?",
      ],
    },
    {
      type: "takeaway",
      text: "If your H1 could belong to ten competitors after a logo swap, it is not positioning. It is wallpaper. See also [why products often have a clarity problem](/blog/product-doesnt-have-marketing-problem-clarity-problem).",
    },
    {
      type: "h2",
      text: "2. The hero tries to say everything at once",
    },
    {
      type: "p",
      text: "When the first viewport includes three CTAs, six feature chips, logos, and a schedule widget, attention splits. One composition. One job. One next step.",
    },
    {
      type: "p",
      text: "Founders add elements because each stakeholder wants their proof visible immediately. The visitor experiences a dashboard, not a decision. Marketing sites are not admin panels. Give the first screen a single job: earn the next click with understanding.",
    },
    {
      type: "ol",
      items: [
        "Keep brand, headline, one support line, and one CTA group above the fold.",
        "Move secondary proof below the first scroll—still early, not stacked into chaos.",
        "Delete any hero element that does not help the visitor decide “this is for me.”",
      ],
    },
    {
      type: "h2",
      text: "3. Social proof arrives late—or looks empty",
    },
    {
      type: "p",
      text: "Logos without context and testimonials without outcomes do not build trust. Put relevant proof next to the claim it supports: conversion near the CTA, credibility near the pricing objection.",
    },
    {
      type: "table",
      headers: ["Claim", "Weak proof", "Better proof"],
      rows: [
        [
          "We save teams time",
          "“Great product!” quote",
          "“Cut reporting from 6 hours to 45 minutes.”",
        ],
        [
          "Trusted by leaders",
          "Logo salad, no context",
          "Logo + role + use case in one line",
        ],
        [
          "Easy to adopt",
          "Stock photo of smiling meeting",
          "Time-to-value metric or short setup demo",
        ],
      ],
    },
    {
      type: "h2",
      text: "4. Navigation mirrors the org chart, not buyer intent",
    },
    {
      type: "p",
      text: "Founders label pages in internal language. Buyers need paths by intent: who it is for, how it works, proof, pricing, and contact. Reduce choice until the journey is obvious.",
    },
    {
      type: "p",
      text: "If your nav includes “Platform,” “Solutions,” “Resources,” “Company,” and twelve feature pages with overlapping names, you are asking visitors to learn your org before they learn their outcome. That is an unpaid internship, and they will resign immediately.",
    },
    {
      type: "image",
      src: "/images/blog/blog-mid-06.png",
      alt: "Clean product packaging on a desk, standing in for clear brand presentation online",
    },
    {
      type: "takeaway",
      text: "Navigation is information architecture for anxious strangers. Design for their questions, not your departments.",
    },
    {
      type: "h2",
      text: "5. Features are listed without the job they do",
    },
    {
      type: "p",
      text: "Feature grids are easy to ship and hard to care about. Translate each feature into a job: “Import your data in minutes” beats “Advanced CSV tooling.”",
    },
    {
      type: "p",
      text: "Linear and Figma communicate capability through outcomes and craft, not checkbox museums. Your site can do the same at smaller scale: fewer tiles, clearer jobs, one proof point under the ones that matter.",
    },
    {
      type: "callout",
      title: "Try this",
      text: "Rewrite your top six features as “So that…” statements. If you cannot finish the sentence with a customer outcome, cut or demote the feature on the marketing site—even if it still exists in the product.",
    },
    {
      type: "h2",
      text: "6. Mobile is treated as a smaller desktop",
    },
    {
      type: "p",
      text: "Many “responsive” sites still bury the CTA, crush type, and force horizontal scrolling on tables. Mobile should prioritise speed, clarity, and one dominant action.",
    },
    {
      type: "ul",
      items: [
        "Is the primary CTA visible without hunting?",
        "Can the headline wrap without becoming a paragraph?",
        "Do sticky bars fight the main action?",
        "Are tap targets large enough for real thumbs, not design-tool cursors?",
      ],
    },
    {
      type: "p",
      text: "For practical UX patterns, [Nielsen Norman Group](https://www.nngroup.com/) remains useful. For ecommerce-adjacent friction (forms, checkout-like flows), [Baymard](https://baymard.com/blog) is excellent even when you are selling demos, not jumpers.",
    },
    {
      type: "h2",
      text: "7. Forms ask for commitment before offering value",
    },
    {
      type: "p",
      text: "Long forms on cold traffic signal risk. Ask for the minimum needed to start a conversation—then earn the right to ask for more.",
    },
    {
      type: "p",
      text: "I repeatedly saw demo forms asking for company size, budget, timeline, phone, and a paragraph on “current stack” before the visitor had evidence the product understood them. That is not qualification. That is friction cosplay.",
    },
    {
      type: "ol",
      items: [
        "For cold traffic: name + work email may be enough to start.",
        "Add fields only when conversion quality measurably improves.",
        "Offer a low-commitment alternative (short video, interactive demo, sample report).",
        "Say what happens after submit—and mean it.",
      ],
    },
    {
      type: "h2",
      text: "8. Speed is treated as a nice-to-have",
    },
    {
      type: "p",
      text: "Heavy hero videos, unoptimised images, and script bloat punish both search and conversion. Performance is part of the product experience—especially for first-time visitors.",
    },
    {
      type: "p",
      text: "Measure with [Core Web Vitals](https://web.dev/articles/vitals) and the broader [web.dev](https://web.dev/) guidance. You do not need perfection. You do need a site that does not make a sceptical buyer wait for your brand story to finish buffering.",
    },
    {
      type: "takeaway",
      text: "Slow is a UX message. It says: we did not care enough about your time to ship a considerate first impression.",
    },
    {
      type: "h2",
      text: "9. SEO titles and page structure pull in different directions",
    },
    {
      type: "p",
      text: "Beautiful pages with vague H1s, missing meta descriptions, and no internal links leave search engines—and answer engines—with nothing clear to cite. Structure is strategy.",
    },
    {
      type: "ul",
      items: [
        "One clear H1 that matches the page’s job.",
        "Meta description that states outcome + audience without clickbait nonsense.",
        "Internal links between related proof, pricing, and use-case pages.",
        "Descriptive titles that a human would click—and a crawler can interpret.",
      ],
    },
    {
      type: "p",
      text: "Google’s own guidance in [Search Central](https://developers.google.com/search/docs) is still the baseline. You do not need to “do SEO” as a separate religion. You need pages that are understandable to people and machines.",
    },
    {
      type: "h2",
      text: "10. There is no clear path after interest",
    },
    {
      type: "p",
      text: "Visitors who are almost ready need a simple next step: book a call, start a trial, or download something useful. Soft interest with no path becomes a bounce.",
    },
    {
      type: "p",
      text: "The saddest pattern in the audit set was a strong mid-page explanation followed by… nothing. Or three equal CTAs that cancelled each other out. Decide the primary action by page. Make secondary actions visually secondary. Ambition is fine. Ambiguous ambition is not.",
    },
    {
      type: "h2",
      text: "Mistake frequency snapshot (from the audit set)",
    },
    {
      type: "table",
      headers: ["Mistake", "How often it showed up", "Typical first fix"],
      rows: [
        ["Category headline", "Very common", "Rewrite H1 around outcome"],
        ["Overloaded hero", "Very common", "Cut to one CTA group"],
        ["Weak / late proof", "Common", "Move proof beside claims"],
        ["Org-chart nav", "Common", "Intent-based IA"],
        ["Feature grids without jobs", "Very common", "Job-led feature copy"],
        ["Mobile afterthought", "Common", "CTA + type pass on phone"],
        ["Heavy forms too early", "Common", "Reduce fields"],
        ["Performance neglect", "Common", "Image/script diet"],
        ["Thin SEO structure", "Common", "Titles, H1, internal links"],
        ["No path after interest", "Common", "One primary next step"],
      ],
    },
    {
      type: "quote",
      text: "A startup website’s job is not to impress peers. It is to make the right customer feel understood—and take one confident next step.",
    },
    {
      type: "h2",
      text: "A fast audit you can run this week",
    },
    {
      type: "ol",
      items: [
        "Read your homepage out loud. Can a stranger repeat the offer?",
        "On mobile, is the main CTA obvious in under five seconds?",
        "Check one proof point per major claim—or remove the claim.",
        "Reduce the first viewport to brand, headline, support line, and one CTA group.",
        "Measure form completion and bounce by device—not just traffic.",
      ],
    },
    {
      type: "callout",
      title: "Exercise: the five-second screenshot test",
      text: "Show a homepage screenshot to three people outside your company for five seconds. Hide it. Ask what the company does and who it is for. If answers diverge wildly, your first viewport is negotiating with itself.",
    },
    {
      type: "h2",
      text: "Accessibility is not a separate checklist item",
    },
    {
      type: "p",
      text: "Several sites failed basic readability: low contrast, missing labels, keyboard traps in cookie banners. That is not only unethical product behaviour—it is conversion loss you will never see cleanly in a dashboard. Use [WCAG guidance](https://www.w3.org/WAI/standards-guidelines/wcag/) as a practical standard, not a legal panic button.",
    },
    {
      type: "h2",
      text: "How the ten mistakes cluster (so you fix root causes)",
    },
    {
      type: "p",
      text: "In the audit set, mistakes rarely appeared alone. They clustered into three failure modes. Treating them as a checklist of ten equal bugs is slower than fixing the cluster.",
    },
    {
      type: "h3",
      text: "Cluster A: comprehension failure",
    },
    {
      type: "p",
      text: "Category headlines, overloaded heroes, feature grids without jobs, and org-chart navigation. The visitor cannot form a stable mental model. Fix messaging hierarchy before you touch illustration style. If someone cannot explain the offer, no amount of logo polish will save the funnel.",
    },
    {
      type: "h3",
      text: "Cluster B: trust failure",
    },
    {
      type: "p",
      text: "Late or empty proof, forms that demand commitment early, and no clear path after interest. The visitor understands roughly what you do—and still does not feel safe taking the next step. Place risk reduction beside risk. Reduce asks until belief is earned.",
    },
    {
      type: "h3",
      text: "Cluster C: experience failure",
    },
    {
      type: "p",
      text: "Mobile afterthoughts, slow pages, inaccessible patterns, and SEO structure that fights the story. The visitor might have believed you—if the page had not punished their attention. Performance and structure are part of conversion, not “engineering chores.”",
    },
    {
      type: "p",
      text: "When I review a site in practice, I name the dominant cluster in the first fifteen minutes. That prevents the common founder move: rewriting button microcopy while the H1 still describes a category nobody hired.",
    },
    {
      type: "callout",
      title: "Prioritisation rule",
      text: "Comprehension first, then trust, then experience polish. A fast, accessible page with a vague promise still fails. A clear promise on a slightly imperfect page can still convert—and then you earn the right to refine craft.",
    },
    {
      type: "h2",
      text: "What I change first for founders",
    },
    {
      type: "p",
      text: "If you want a sharper site that converts, I help founders rebuild messaging, structure, and design around buyer intent—not internal assumptions. The goal is fewer clever sections and more clear ones.",
    },
    {
      type: "p",
      text: "Related reading on this site: [why startup websites fail in the first 10 seconds](/blog/why-startup-websites-fail-first-10-seconds), [landing page review: helping or hurting conversions](/blog/landing-page-review-helping-hurting-conversions), [three changes that can double conversion](/blog/website-audit-three-changes-double-conversion), and [a teardown of Airbnb’s homepage](/blog/product-teardown-airbnb-homepage) for a clarity benchmark.",
    },
    {
      type: "faq",
      items: [
        {
          question: "Do we need a full redesign to fix these?",
          answer:
            "Usually no. Many of the highest-ROI fixes are messaging, hierarchy, proof placement, form length, and performance. Redesign when structure cannot carry the story—not when the team is bored of the colour palette.",
        },
        {
          question: "What if our category is complex?",
          answer:
            "Complexity is a reason to be clearer, not vaguer. Lead with the outcome and audience. Put architecture diagrams later for the people who need them.",
        },
        {
          question: "How do we prioritise if we have most of the ten mistakes?",
          answer:
            "Fix headline clarity and primary CTA path first. Then proof beside claims. Then mobile + speed. Features and SEO structure next. Do not start with animation polish.",
        },
        {
          question: "Should every page have the same CTA?",
          answer:
            "No. Each page should have one primary next step appropriate to intent. Consistency of story matters more than identical buttons everywhere.",
        },
      ],
    },
    {
      type: "h2",
      text: "Clear sites compound; clever sites stall",
    },
    {
      type: "p",
      text: "The fifty sites were not failing because teams lacked taste. They were failing because the page asked visitors to work too hard for too little certainty. Fix the ten habits above and your traffic starts behaving like an asset again—instead of a polite crowd that applauds and leaves.",
    },
    {
      type: "cta",
      lead: "Need an honest look at your startup website—and a clear plan for what is blocking conversions?",
      button: "Request a website review",
      href: "/contact",
    },
  ],
};

export default post;
