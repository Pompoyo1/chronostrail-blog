'use client'

interface EmailCaptureProps {
  variant?: 'hero' | 'inline' | 'sidebar'
}

export default function EmailCapture({ variant = 'inline' }: EmailCaptureProps) {
  const isHero = variant === 'hero'

  return (
    <div className={`${isHero ? 'py-8' : 'py-6'} px-6 bg-slate-900 rounded-xl`}>
      <h3 className={`${isHero ? 'text-2xl' : 'text-lg'} font-bold text-white mb-2`}>
        The AI Tools Weekly
      </h3>
      <p className="text-slate-400 text-sm mb-4">
        One email every Wednesday. The best AI tools, honest reviews, and one tip you can use today.
      </p>
      {/* Replace BEEHIIV_EMBED_ID with your actual Beehiiv embed ID */}
      <iframe
        src="https://embeds.beehiiv.com/BEEHIIV_EMBED_ID"
        data-test-id="beehiiv-embed"
        width="100%"
        height="52"
        frameBorder="0"
        scrolling="no"
        style={{ borderRadius: '4px' }}
      />
    </div>
  )
}
