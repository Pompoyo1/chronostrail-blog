'use client'

import { useEffect, useState } from 'react'
import SubscribeForm from './SubscribeForm'

export default function SidebarCapture() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const timer = setTimeout(() => setVisible(true), 30000)
    return () => clearTimeout(timer)
  }, [dismissed])

  if (!visible || dismissed) return null

  return (
    <div className="hidden lg:block fixed right-6 top-1/3 z-40 w-72 bg-slate-900 rounded-xl shadow-2xl p-5">
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 text-slate-400 hover:text-white text-lg leading-none"
        aria-label="Close"
      >
        ×
      </button>
      <h3 className="text-white font-bold text-base mb-1">The AI Tools Weekly</h3>
      <p className="text-slate-400 text-xs mb-4">
        Every Wednesday. Honest reviews, no fluff.
      </p>
      <SubscribeForm />
    </div>
  )
}
