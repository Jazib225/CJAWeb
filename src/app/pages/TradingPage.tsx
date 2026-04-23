import { motion } from 'motion/react'
import { Eyebrow, pageFadeIn } from '../uiPrimitives'

const stats = [
  { value: '$100,000+', label: 'Documented profits' },
  { value: '10+', label: 'Traders mentored' },
  { value: 'Perps & Spot', label: 'Strategy' },
  { value: 'Since 2024', label: 'Active' },
]

export function TradingPage() {
  return (
    <motion.section className="border-t border-neutral-200/80 bg-white" {...pageFadeIn}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-20 lg:pb-24">

        <div className="max-w-4xl mb-10 lg:mb-12">
          <Eyebrow>Trading</Eyebrow>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] text-neutral-950 tracking-tight">
            Markets.
          </h1>
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-neutral-600 max-w-2xl">
            Scaled $50 into a six-figure portfolio in 18 months through systematic trading across spot and derivatives
            markets. Executed quantitative strategies using market data, on-chain analytics, and disciplined risk
            management frameworks. Founded and led a mentorship program for 10+ traders, with participants achieving
            2x–100x portfolio growth.
          </p>
        </div>

        <section className="rounded-3xl border border-neutral-900 bg-neutral-950 text-white px-6 sm:px-8 py-8 mb-6 lg:mb-8 relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-[clamp(1.5rem,4vw,2.25rem)] leading-none">{s.value}</p>
                <p className="mt-2 font-mono-cja text-[0.65rem] uppercase tracking-[0.16em] text-neutral-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <motion.article
          className="rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-5 sm:p-6 lg:p-8 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/[0.06] transition-all"
          whileHover={{ y: -4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 items-start">
            <div className="rounded-2xl overflow-hidden border border-neutral-200/80">
              <img
                src="/open_position.png"
                alt="SOL perpetual long on Hyperliquid"
                className="w-full h-auto block"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-200/80">
              <img
                src="/pnl2.png"
                alt="LUNA/SOL 348% return trade"
                className="w-full h-auto block"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-900 flex items-center justify-center">
              <img
                src="/pnl1.png"
                alt="Realized PnL readout"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </motion.article>

      </div>
    </motion.section>
  )
}
