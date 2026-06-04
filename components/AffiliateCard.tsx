'use client'

interface AffiliateCardProps {
  name: string
  description: string
  url: string
  commission?: string
  cta?: string
}

export default function AffiliateCard({
  name,
  description,
  url,
  commission,
  cta = 'Try Free',
}: AffiliateCardProps) {
  return (
    <div className="border border-slate-200 rounded-xl p-5 my-6 bg-slate-50">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-bold text-slate-900 text-lg">{name}</h4>
          <p className="text-slate-600 text-sm mt-1">{description}</p>
          {commission && (
            <p className="text-green-600 text-xs mt-2 font-medium">✓ {commission}</p>
          )}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="shrink-0 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).plausible) {
              (window as any).plausible('Affiliate Click', { props: { tool: name } })
            }
          }}
        >
          {cta}
        </a>
      </div>
    </div>
  )
}
