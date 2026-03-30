import type { ReactNode } from 'react'
import { UserRound } from 'lucide-react'
import { partnerStrip } from './siteData'

export const motionHover = {
  y: -3,
  transition: { type: 'spring' as const, stiffness: 700, damping: 32 },
}
export const motionTap = { scale: 0.98 }

export const pageFadeIn = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
}

export const pageFadeInNoShift = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={['font-mono-cja text-[0.6875rem] uppercase tracking-[0.16em] text-neutral-500 mb-2', className].filter(Boolean).join(' ')}
    >
      {children}
    </p>
  )
}

export function TeamPlaceholderAvatar() {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-gradient-to-b from-neutral-200 to-neutral-300 text-neutral-500/70"
      aria-hidden
    >
      <UserRound className="size-[3.25rem] shrink-0 opacity-85" strokeWidth={1.35} />
    </div>
  )
}

export function PartnerMarqueeItems({ segment }: { segment: 'a' | 'b' }) {
  return (
    <>
      {partnerStrip.map((p) => (
        <div key={`${segment}-${p.label}`} className="flex items-center gap-3 text-neutral-500 shrink-0">
          <div className="size-10 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center overflow-hidden">
            <span
              className="block size-7 shrink-0 bg-contain bg-center bg-no-repeat [transform:translateZ(0)]"
              style={{ backgroundImage: `url(${JSON.stringify(p.src)})` }}
              aria-hidden
            />
          </div>
          <span className="text-sm font-medium text-neutral-700 whitespace-nowrap">{p.label}</span>
        </div>
      ))}
    </>
  )
}
