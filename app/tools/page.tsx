import type { Metadata } from "next";
import AffiliateCard from "@/components/AffiliateCard";

export const metadata: Metadata = {
  title: "Best AI Tools — Curated Directory",
  description: "The best AI tools for freelancers, entrepreneurs, and operators. Curated, tested, and ranked by Chronos Trail.",
};

const tools = [
  {
    name: "Jasper AI",
    description: "The best AI writing tool for professionals who need high-volume, on-brand content. Saves 3–5 hours per week on drafts.",
    url: "https://jasper.ai/?via=YOURCODE&utm_source=blog",
    commission: "25% recurring commission",
    cta: "Try Jasper Free",
  },
  {
    name: "Copy.ai",
    description: "Built for marketing teams and freelancers. Best for short-form copy — ads, emails, social. Strong free tier.",
    url: "https://copy.ai/referral/YOURCODE&utm_source=blog",
    commission: "30% recurring commission",
    cta: "Try Copy.ai Free",
  },
  {
    name: "Surfer SEO",
    description: "The SEO writing tool that actually moves rankings. Combines content editor, keyword research, and audit in one place.",
    url: "https://surferseo.com/?via=YOURCODE&utm_source=blog",
    commission: "25% recurring commission",
    cta: "Try Surfer Free",
  },
  {
    name: "Writesonic",
    description: "Best value AI writer on the market. Comparable output to Jasper at a lower price point. Good for high-volume content.",
    url: "https://writesonic.com/?via=YOURCODE&utm_source=blog",
    commission: "30% recurring commission",
    cta: "Try Writesonic Free",
  },
  {
    name: "Semrush",
    description: "The industry standard for SEO and competitive research. If you're serious about organic traffic, this is non-negotiable.",
    url: "https://semrush.com/?via=YOURCODE&utm_source=blog",
    commission: "$200 per referral",
    cta: "Try Semrush Free",
  },
];

export default function Tools() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Tools Directory</h1>
      <p className="text-slate-600 mb-10">
        Every tool listed here has been reviewed by Chronos Trail. No filler. No tools we wouldn&apos;t use ourselves.
      </p>
      <div className="space-y-2">
        {tools.map((tool) => (
          <AffiliateCard key={tool.name} {...tool} />
        ))}
      </div>
    </div>
  );
}
