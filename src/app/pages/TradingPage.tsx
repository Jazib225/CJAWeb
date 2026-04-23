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
            markets — leveraging on-chain analytics, market microstructure, and disciplined risk management. Founded a
            mentorship program for 10+ traders, with participants achieving 2x–100x portfolio growth.
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
                Open Position · Hyperliquid Perpetuals
              </p>
              <h2 className="mt-3 font-serif text-[clamp(1.5rem,4vw,2rem)] leading-snug text-neutral-950 tracking-tight">
                SOL Perpetual Long · $241,952.57 Notional
              </h2>
              <p className="mt-2 text-[0.75rem] text-neutral-400">
                Entry ~$138.70 · Liquidation $124.33 · Hyperliquid
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-neutral-600 max-w-4xl">
                A high-conviction SOL perpetual long sized at $241,952 notional, entered at the prior range support
                with a defined liquidation at $124.33. Built on a structural thesis around Solana's fee generation,
                ecosystem growth, and validator economics.
              </p>
              <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200/80">
                <img
                  src="/open_position.png"
                  alt="SOL perpetual long — $241,952.57 notional on Hyperliquid"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </motion.article>

          <motion.article
            className="flex h-full min-h-0 flex-col rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-5 sm:p-6 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/[0.06] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex min-h-0 flex-1 flex-col">
              <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.16em] text-neutral-500">
                Spot Trade · Meme Coin Momentum
              </p>
              <h2 className="mt-3 font-serif text-[1.65rem] leading-snug text-neutral-950 tracking-tight">
                LUNA/SOL · 348% Return
              </h2>
              <p className="mt-2 text-[0.75rem] text-neutral-400">
                PnL +45.87 SOL ($9,724.68) · Bought 13.2 SOL · Sold 59.07 SOL
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-600">
                Systematic entry and exit in a high-velocity meme coin momentum trade, capturing a 348% move via
                disciplined scaling and on-chain flow analysis.
              </p>
              <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200/80">
                <img
                  src="/pnl2.png"
                  alt="LUNA/SOL trade — 348% return, +$9,724.68 PnL"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </motion.article>

          <motion.article
            className="flex h-full min-h-0 flex-col rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-5 sm:p-6 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/[0.06] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex min-h-0 flex-1 flex-col">
              <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.16em] text-neutral-500">
                Realized PnL · Including Close &amp; Borrow Fees
              </p>
              <h2 className="mt-3 font-serif text-[1.65rem] leading-snug text-neutral-950 tracking-tight">
                +$9,588.52 Net Profit
              </h2>
              <p className="mt-2 text-[0.75rem] text-neutral-400">
                All fees included · Verified on-platform readout
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-600">
                Realized PnL net of all trading costs — close fees, borrow fees, and funding — reflecting true
                take-home returns rather than gross position gains.
              </p>
              <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200/80">
                <img
                  src="/pnl1.png"
                  alt="Realized PnL — +$9,588.52 net of all fees"
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
