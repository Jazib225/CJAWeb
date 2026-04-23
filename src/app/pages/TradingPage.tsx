import { motion } from 'motion/react'
import { Eyebrow, pageFadeIn } from '../uiPrimitives'

const stats = [
  { value: '$100,000+', label: 'Documented profits' },
  { value: '$241,952', label: 'Peak notional' },
  { value: 'Perps & Spot', label: 'Strategy' },
  { value: '2025 – 2026', label: 'Active period' },
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
            CJA members apply the same research-driven edge to active trading — leveraging on-chain data, macro
            catalysts, and proprietary analysis to identify asymmetric opportunities across crypto spot and perpetual
            futures markets.
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

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          <motion.article
            className="md:col-span-2 flex h-full min-h-0 flex-col rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-5 sm:p-6 lg:p-8 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/[0.06] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex min-h-0 flex-1 flex-col">
              <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.16em] text-neutral-500">
                Featured Position · Hyperliquid Perpetuals
              </p>
              <h2 className="mt-3 font-serif text-[clamp(1.5rem,4vw,2rem)] leading-snug text-neutral-950 tracking-tight">
                SOL Perpetual Long · $241,952.57 Notional
              </h2>
              <p className="mt-2 text-[0.75rem] text-neutral-400">
                Entry ~$138.70 · Liquidation $124.33 · Live on Hyperliquid
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-neutral-600 max-w-4xl">
                A high-conviction SOL perpetual long sized at $241,952 notional on Hyperliquid, targeting key support
                at the prior range low with a defined liquidation at $124.33. Position reflects CJA's structural bull
                thesis on Solana based on ecosystem growth, fee generation, and validator economics.
              </p>
              <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200/80">
                <img
                  src="/trading-sol.png"
                  alt="SOL perpetual long — $241,952.57 notional on Hyperliquid"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </motion.article>
        </div>

      </div>
    </motion.section>
  )
}
