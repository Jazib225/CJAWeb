import { motion } from 'motion/react'
import { iconAave, iconCircle, iconDogecoin, iconMorpho, iconSyrup, iconUSDC } from '../siteData'
import { usePaperViewer } from '../paperViewerContext'
import { Eyebrow, pageFadeIn } from '../uiPrimitives'

export function ResearchPage() {
  const { setOpenPaper } = usePaperViewer()

  return (
    <motion.section className="border-t border-neutral-200/80 bg-white" {...pageFadeIn}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-20 lg:pb-24">
        <div className="max-w-4xl mb-8 lg:mb-10">
          <Eyebrow>Research</Eyebrow>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] text-neutral-950 tracking-tight">
            Selected papers.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          <motion.article
            className="md:col-span-2 flex h-full min-h-0 flex-col rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-5 sm:p-6 lg:p-8 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/[0.06] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex min-h-0 flex-1 flex-col">
              <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.16em] text-neutral-500">
                Finalist · Penn Blockchain Conference
              </p>
              <div className="mt-3 mb-1 inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white p-1.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                <img src={iconSyrup} alt="" className="size-7 object-contain" />
              </div>
              <h2 className="mt-2 font-serif text-[clamp(1.5rem,4vw,2rem)] leading-snug text-neutral-950 tracking-tight">
                Maple Finance Investment Thesis
              </h2>
              <p className="mt-2 text-[0.75rem] text-neutral-400">
                Track: Long Investment Thesis &lt; $1B FDV
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-neutral-600 max-w-4xl">
                Maple has evolved into a revenue-generating on-chain asset manager, but the market still values it based on
                its outdated reputation. As adoption of its yield products grows, SYRUP appears undervalued relative to its
                actual role and trajectory.
              </p>
            </div>
            <div className="mt-8 shrink-0 border-t border-neutral-200/90 pt-4">
              <button
                type="button"
                onClick={() => setOpenPaper('maple')}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors group/read"
              >
                Read
                <span className="inline-block transition-transform group-hover/read:translate-x-1">→</span>
              </button>
            </div>
          </motion.article>

          <motion.article
            className="flex h-full min-h-0 flex-col rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-5 sm:p-6 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/[0.06] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex min-h-0 flex-1 flex-col">
              <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.16em] text-neutral-500">
                Investment Thesis · April 2026
              </p>
              <div className="mt-3 mb-1 inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white p-1.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                <img src={iconCircle} alt="" className="size-7 object-contain" />
              </div>
              <h2 className="mt-2 font-serif text-[1.65rem] leading-snug text-neutral-950 tracking-tight">
                Circle (CRCL): The Reserve Bank of the Internet
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-600">
                Circle has quietly become the neutral infrastructure layer for dollar-denominated payments, settlement,
                and programmable money at global scale. This thesis argues CRCL is the highest-conviction fintech IPO
                of the cycle — already embedded across Visa, Mastercard, Coinbase, and sovereign payment networks, with
                a regulatory moat that competitors cannot replicate.
              </p>
              <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-100" style={{ height: '260px' }}>
                <iframe
                  src="/crcl/"
                  title="Circle CRCL Investment Thesis"
                  className="w-full border-0 pointer-events-none select-none"
                  style={{ height: '260px' }}
                  scrolling="no"
                />
              </div>
            </div>
            <div className="mt-6 shrink-0 border-t border-neutral-200/90 pt-4">
              <a
                href="/crcl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors group/read"
              >
                View
                <span className="inline-block transition-transform group-hover/read:translate-x-1">→</span>
              </a>
            </div>
          </motion.article>

          <motion.article
            className="flex h-full min-h-0 flex-col rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-5 sm:p-6 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/[0.06] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex min-h-0 flex-1 flex-col">
              <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.16em] text-neutral-500">
                Delta-Neutral Investment Memo · March 2026
              </p>
              <div className="mt-3 mb-1 inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white p-1.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                <img src={iconAave} alt="" className="size-7 object-contain" />
              </div>
              <h2 className="mt-2 font-serif text-[1.65rem] leading-snug text-neutral-950 tracking-tight">
                AAVE vs. MORPHO: Long / Short Pair Trade Analysis
              </h2>
              <p className="mt-2 text-[0.75rem] text-neutral-400">
                Long AAVE / Short MORPHO · Christopher Herzog · Purdue University
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-600">
                At approximately equal $1.6B FDVs, AAVE generates $74.8M in annualized protocol revenue with an active
                $50M/year buyback program — while MORPHO captures zero protocol revenue and faces 219M founder tokens
                beginning to vest in May 2026. This delta-neutral memo isolates three structural edges: an infinite
                revenue multiple gap, extreme depositor concentration in Morpho's curator system, and opposing supply
                dynamics where AAVE's effective float is shrinking while MORPHO's will nearly double by 2028.
              </p>
            </div>
            <div className="mt-8 shrink-0 border-t border-neutral-200/90 pt-4">
              <button
                type="button"
                onClick={() => setOpenPaper('aave-morpho-herzog')}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors group/read"
              >
                Read
                <span className="inline-block transition-transform group-hover/read:translate-x-1">→</span>
              </button>
            </div>
          </motion.article>

          <motion.article
            className="flex h-full min-h-0 flex-col rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-5 sm:p-6 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/[0.06] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="mb-4 inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white p-1.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                <img src={iconAave} alt="" className="size-7 object-contain" />
              </div>
              <h2 className="font-serif text-[1.65rem] leading-snug text-neutral-950 tracking-tight">
                AAVE &amp; MORPHO: A Sum-of-the-Parts Inquiry
              </h2>
              <p className="mt-2 text-[0.75rem] text-neutral-400">Long AAVE / Short MORPHO · Adi Chaudhary</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-600">
                A SOTP valuation of two lending tokens at equal $1.7B FDV, decomposing Aave's four independent revenue
                streams and correcting for curator fee leakage that overstates Morpho's gross-fee optionality.
              </p>
            </div>
            <div className="mt-8 shrink-0 border-t border-neutral-200/90 pt-4">
              <button
                type="button"
                onClick={() => setOpenPaper('aave-morpho-adi')}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors group/read"
              >
                Read
                <span className="inline-block transition-transform group-hover/read:translate-x-1">→</span>
              </button>
            </div>
          </motion.article>

          <motion.article
            className="flex h-full min-h-0 flex-col rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-5 sm:p-6 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/[0.06] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="mb-4 inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white p-1.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                <img src={iconMorpho} alt="" className="size-7 object-contain" />
              </div>
              <h2 className="font-serif text-[1.65rem] leading-snug text-neutral-950 tracking-tight">
                MORPHO vs. AAVE: Long / Short Pair Trade Analysis
              </h2>
              <p className="mt-2 text-[0.75rem] text-neutral-400">Long MORPHO / Short AAVE · Jazib Qureshi</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-600">
                The contrarian view: Aave's BUSL anti-fork licensing, governance exodus, and buyback cut signal
                structural impairment that revenue alone cannot offset — while Morpho's V2 fixed-rate catalyst and
                Apollo institutional demand create asymmetric upside.
              </p>
            </div>
            <div className="mt-8 shrink-0 border-t border-neutral-200/90 pt-4">
              <button
                type="button"
                onClick={() => setOpenPaper('morpho-aave-jazib')}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors group/read"
              >
                Read
                <span className="inline-block transition-transform group-hover/read:translate-x-1">→</span>
              </button>
            </div>
          </motion.article>

          <motion.article
            className="flex h-full min-h-0 flex-col rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-5 sm:p-6 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/[0.06] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="mb-4 inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white p-1.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                <img src={iconUSDC} alt="" className="size-7 object-contain" />
              </div>
              <h2 className="font-serif text-[1.65rem] leading-snug text-neutral-950 tracking-tight">
                Stablecoins Explained: Why Crypto Needs a Dollar Twin
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-600">
                An overview of stablecoins as critical financial infrastructure, examining their role in liquidity, settlement
                efficiency, and onchain dollarization.
              </p>
            </div>
            <div className="mt-8 shrink-0 border-t border-neutral-200/90 pt-4">
              <button
                type="button"
                onClick={() => setOpenPaper('stablecoins')}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors group/read"
              >
                Read
                <span className="inline-block transition-transform group-hover/read:translate-x-1">→</span>
              </button>
            </div>
          </motion.article>

          <motion.article
            className="flex h-full min-h-0 flex-col rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-5 sm:p-6 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/[0.06] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="mb-4 inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white p-1.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                <img src={iconDogecoin} alt="" className="size-7 object-contain" />
              </div>
              <h2 className="font-serif text-[1.65rem] leading-snug text-neutral-950 tracking-tight">
                Dogecoin (DOGE): Shorting an Inflationary Meme Asset in Structural Decline
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-600">
                A short thesis on DOGE analyzing supply inflation, declining network relevance, and asymmetric downside in
                large-cap meme assets.
              </p>
              <p className="mt-2 text-[0.75rem] text-neutral-400">Track: Short Position &gt; $1B</p>
            </div>
            <div className="mt-8 shrink-0 border-t border-neutral-200/90 pt-4">
              <button
                type="button"
                onClick={() => setOpenPaper('dogecoin')}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors group/read"
              >
                Read
                <span className="inline-block transition-transform group-hover/read:translate-x-1">→</span>
              </button>
            </div>
          </motion.article>
        </div>
      </div>
    </motion.section>
  )
}
