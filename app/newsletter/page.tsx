import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "The AI Tools Weekly Newsletter",
  description: "One email every Wednesday. Honest AI tool reviews, comparisons, and one tip you can use today. No fluff.",
};

export default function Newsletter() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">The AI Tools Weekly</h1>
      <p className="text-xl text-slate-600 mb-4">
        Every Wednesday. The best AI tools, honest takes, and one tip you can use today.
      </p>
      <ul className="text-slate-600 text-left max-w-md mx-auto mb-10 space-y-2">
        <li>✓ Tool of the Week — one deep review</li>
        <li>✓ 3 Quick Picks — fast recommendations</li>
        <li>✓ Best Deal — current trial offers worth taking</li>
        <li>✓ 1 Tip — no links, just something useful</li>
      </ul>
      <EmailCapture variant="hero" />
      <p className="text-slate-400 text-sm mt-4">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
