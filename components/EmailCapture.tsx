import SubscribeForm from './SubscribeForm'

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
      <p className="text-slate-500 text-sm mb-3">
        One email every Wednesday. The best AI tools, honest reviews, and one tip you can use today.
      </p>
      <SubscribeForm />
    </div>
  )
}
