import Script from 'next/script'

interface EmailCaptureProps {
  variant?: 'hero' | 'inline' | 'sidebar'
}

export default function EmailCapture({ variant = 'inline' }: EmailCaptureProps) {
  const isHero = variant === 'hero'

  return (
    <div className={`${isHero ? 'py-8 px-8' : 'py-6 px-6'} bg-slate-50 border border-slate-100 rounded-2xl`}>
      <h3 className={`${isHero ? 'text-xl' : 'text-base'} font-semibold text-slate-900 mb-1`}>
        The AI Tools Weekly
      </h3>
      <p className="text-slate-500 text-sm mb-4">
        One email every Wednesday. The best AI tools, honest reviews, and one tip you can use today.
      </p>
      <div data-beehiiv-form="22e08388-7394-4906-a8c7-fb127668092b" />
      <Script
        src="https://subscribe-forms.beehiiv.com/v3/loader.js"
        data-beehiiv-form="22e08388-7394-4906-a8c7-fb127668092b"
        strategy="lazyOnload"
      />
    </div>
  )
}
