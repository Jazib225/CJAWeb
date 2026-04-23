import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  TrendingUp,
  Users,
  ChartBar,
  Link2,
  Mail,
  Network,
  Cpu,
  Linkedin as LinkedInIcon,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { totalHackathonWinnings } from '../siteData'
import { Eyebrow, motionHover, motionTap, pageFadeIn, pageFadeInNoShift, PartnerMarqueeItems } from '../uiPrimitives'

export function HomePage() {
  return (
    <>
      <motion.div className="min-w-0" {...pageFadeIn}>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 cja-grid-canvas opacity-60 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-12 sm:pt-16 pb-12 sm:pb-14 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/90 px-4 py-1.5 shadow-sm mb-5"
            >
              <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
              <span className="font-mono-cja text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.14em] text-neutral-600">
                Web3 research, engineering & markets
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="w-full max-w-6xl mx-auto"
            >
              <img
                src="/banner.png"
                alt="CJA Capital Group"
                className="block w-full max-w-full mx-auto mb-1 sm:mb-1.5 h-auto max-h-[5.4rem] sm:max-h-[7.2rem] md:max-h-[8.4rem] object-contain object-center"
              />
              <h1 className="font-serif text-neutral-950 max-w-4xl mx-auto">
                <span className="block text-[clamp(2.75rem,8vw,4.75rem)] leading-[0.98] tracking-tight">
                  Build at the frontier of Web3.
                </span>
                <span className="block text-[clamp(2.75rem,8vw,4.75rem)] leading-[0.98] tracking-tight mt-1 sm:mt-1.5">
                  <span className="italic font-normal text-neutral-800">DeFi, DePIN, DeAI.</span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl mx-auto font-normal"
            >
              A Web3-intersectional collective researching, building, and investing at the frontier of blockchain,
              infrastructure, and AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-7 w-full"
            >
              <div className="mx-auto flex w-full max-w-md min-w-0 -translate-x-[21px] flex-col gap-3 sm:w-fit sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-3">
                <motion.div
                  className="w-full sm:w-auto"
                  whileHover={{ y: -2, boxShadow: '0 18px 44px -12px rgba(0,0,0,0.55)' }}
                  whileTap={motionTap}
                >
                  <Link
                    to="/projects"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-[0_14px_40px_-12px_rgba(0,0,0,0.55)] sm:inline-flex sm:w-auto"
                  >
                    Explore projects
                    <ArrowRight className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                  </Link>
                </motion.div>
                <motion.div className="w-full sm:w-auto" whileHover={{ y: -2 }} whileTap={motionTap}>
                  <Link
                    to="/team"
                    className="flex w-full items-center justify-center rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-center text-sm font-semibold text-neutral-950 transition-colors hover:border-neutral-400 sm:inline-flex sm:w-auto"
                  >
                    Meet the team
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>

      <section className="border-y border-neutral-200/80 bg-white py-5 sm:py-6">
        <p className="text-center font-mono-cja text-[0.65rem] uppercase tracking-[0.2em] text-neutral-400 mb-3 px-4">
          Networks &amp; rails we ship on
        </p>
        <div className="w-full min-w-0 overflow-hidden">
          <div className="flex w-max cja-marquee-track items-center">
            <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0">
              <PartnerMarqueeItems segment="a" />
            </div>
            <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0" aria-hidden>
              <PartnerMarqueeItems segment="b" />
            </div>
          </div>
        </div>
      </section>

      <motion.div className="min-w-0" {...pageFadeInNoShift}>
        <section className="cja-grid-canvas border-b border-neutral-200/80">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-12">
            <Eyebrow>About</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] leading-tight text-neutral-950 max-w-3xl mb-6">
              Three lenses — same mission.
            </h2>
            <div className="grid md:grid-cols-3 gap-3 lg:gap-4">
              {[
                {
                  Icon: Link2,
                  title: 'Chain',
                  body: 'Smart contract development and on-chain protocol engineering across ecosystems',
                },
                {
                  Icon: Network,
                  title: 'Junction',
                  body: 'Decentralized infrastructure, cross-chain systems, and network-layer tooling for the open web',
                },
                {
                  Icon: Cpu,
                  title: 'Autonomy',
                  body: 'AI-powered on-chain systems, autonomous agents, and machine-learning applications for crypto markets',
                },
              ].map(({ Icon, title, body }) => (
                <motion.article
                  key={title}
                  className="group rounded-2xl border border-neutral-200/90 bg-white/80 p-5 sm:p-6 text-center shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.35)] hover:border-neutral-300 transition-shadow"
                  whileHover={motionHover}
                >
                  <div className="mb-3 flex justify-center">
                    <div className="inline-flex rounded-xl border border-neutral-200 bg-neutral-50 p-2.5 text-neutral-900 group-hover:border-neutral-300 transition-colors">
                      <Icon className="size-6" strokeWidth={1.35} />
                    </div>
                  </div>
                  <h3 className="text-[0.8125rem] tracking-[0.12em] uppercase font-semibold text-neutral-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-neutral-600 font-normal">{body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-50 border-b border-neutral-200/80">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-12">
            <Eyebrow>Accomplishments</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] leading-tight text-neutral-950 max-w-3xl mb-6">
              What we&apos;ve done.
            </h2>
            <div className="grid md:grid-cols-3 gap-3 lg:gap-4">
              {[
                {
                  Icon: TrendingUp,
                  title: 'Proprietary Trading & Research',
                  body: 'Scaled $50 of personal capital into a six-figure portfolio using data-driven strategies across crypto spot and derivatives markets',
                },
                {
                  Icon: Users,
                  title: 'Mentorship & Education',
                  body: 'Mentored 10+ student traders, guiding structured research and risk frameworks with documented portfolio growth',
                },
                {
                  Icon: ChartBar,
                  title: 'Onchain Infrastructure',
                  body: 'Built and shipped production-ready payment and settlement primitives using blockchain rails',
                },
              ].map(({ Icon, title, body }) => (
                <motion.article
                  key={title}
                  className="group rounded-2xl border border-neutral-200/90 bg-white/80 p-5 sm:p-6 text-center shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.35)] hover:border-neutral-300 transition-shadow"
                  whileHover={motionHover}
                >
                  <div className="mb-3 flex justify-center">
                    <div className="inline-flex rounded-xl border border-neutral-200 bg-neutral-50 p-2.5 text-neutral-900 group-hover:border-neutral-300 transition-colors">
                      <Icon className="size-6" strokeWidth={1.35} />
                    </div>
                  </div>
                  <h3 className="text-[0.8125rem] tracking-[0.12em] uppercase font-semibold text-neutral-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-neutral-600 font-normal">{body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200/80 bg-neutral-950 text-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-8 lg:py-10 relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <div className="relative grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-6 lg:gap-x-4 lg:gap-y-5 text-center">
              {[
                { value: '$100,000+', label: 'Trading profits' },
                { value: `$${totalHackathonWinnings.toLocaleString()}`, label: 'Total hackathon winnings' },
                { value: '5+', label: 'Flagship builds' },
                { value: '7', label: 'Research papers' },
                { value: '15+', label: 'Members' },
              ].map((row) => (
                <div key={row.label}>
                  <p className="font-serif text-[clamp(2rem,5vw,2.75rem)] leading-none">{row.value}</p>
                  <p className="mt-2 font-mono-cja text-[0.65rem] uppercase tracking-[0.16em] text-neutral-400">
                    {row.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="cja-grid-canvas border-t border-neutral-200/80 scroll-mt-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-12">
            <div className="text-center">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] leading-tight text-neutral-950 max-w-2xl mx-auto">
                Let&apos;s build something amazing.
              </h2>
              <p className="mt-3 text-neutral-600 max-w-lg mx-auto">For collaboration, research, or inquiries.</p>
            </div>

            <div className="mt-7 grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
              <motion.a
                href="mailto:cjacapitalgroup@gmail.com"
                className="rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col gap-3 items-center text-center hover:border-neutral-400 transition-colors"
                whileHover={motionHover}
              >
                <div className="inline-flex size-12 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-800">
                  <Mail className="size-6" strokeWidth={1.5} aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">Email the collective</h3>
                  <p className="mt-2 text-sm text-neutral-600">We read every message — research, partnerships, hires.</p>
                </div>
                <span className="inline-flex w-full items-center justify-center gap-1 text-sm font-medium text-neutral-950 mt-2">
                  cjacapitalgroup@gmail.com
                  <ExternalLink className="size-3.5 opacity-60" />
                </span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/company/cja-capital-group/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col gap-3 items-center text-center hover:border-neutral-400 transition-colors"
                whileHover={motionHover}
              >
                <div className="inline-flex size-12 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
                  <LinkedInIcon className="size-5 text-neutral-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">Follow on LinkedIn</h3>
                  <p className="mt-2 text-sm text-neutral-600">Updates on what we publish, ship, and explore.</p>
                </div>
                <span className="inline-flex w-full items-center justify-center gap-1 text-sm font-medium text-neutral-950 mt-2">
                  CJA Capital Group
                  <ExternalLink className="size-3.5 opacity-60" />
                </span>
              </motion.a>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}
