'use client'

import { useEffect, useState } from 'react'
import SubscribeForm from './SubscribeForm'

export default function ExitIntent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('exit-intent-shown')) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50 && e.relatedTarget === null) {
        setVisible(true)
        sessionStorage.setItem('exit-intent-shown', '1')
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Before you go</h2>
        <p className="text-slate-600 mb-6">
          Get the best AI tools delivered every Wednesday. One email. No spam.
        </p>
        <SubscribeForm />
        <button
          onClick={() => setVisible(false)}
          className="mt-4 text-xs text-slate-400 hover:text-slate-600 w-full text-center"
        >
          No thanks, I don't want AI tool recommendations
        </button>
      </div>
    </div>
  )
}
