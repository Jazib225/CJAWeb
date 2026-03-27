import * as React from 'react'
import { motion, animate } from 'motion/react'
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

const logo = new URL('../assets/a632f2d0f30846efa3dc5e98eb742cff439a1307.png', import.meta.url).href
const adiHeadshot = new URL('../assets/7745adcfbc153ff7d293317a0e32eb66a8b457b6.png', import.meta.url).href
const jazibHeadshot = new URL('../assets/678ebadb985361a9a1b94843e0ffab7e9646f7d6.png', import.meta.url).href
const chrisHeadshot = new URL('../assets/c9e418b60465e4f52ec157c8838c0cd7a3c3b236.png', import.meta.url).href
const abdallahHeadshot = new URL('../assets/abdallah.jpg', import.meta.url).href
const joeHeadshot = new URL('../assets/joe.jpg', import.meta.url).href
const winningPhoto = new URL('../assets/bfa4c34b5e3c41f0b5b095fab7bc8f517baad849.png', import.meta.url).href
const stakeclashPhoto = new URL('../assets/stakeclash.png', import.meta.url).href
const iconHedera = new URL('../assets/Hedera.png', import.meta.url).href
const iconUSDC = new URL('../assets/USDC.png', import.meta.url).href
const iconETH = new URL('../assets/ETH.png', import.meta.url).href
const iconCircle = new URL('../assets/Circle.png', import.meta.url).href
const iconSolana = new URL('../assets/Solana.png', import.meta.url).href
const iconBase = new URL('../assets/Base.png', import.meta.url).href

type Page = 'home' | 'projects' | 'research' | 'team'
type Badge = { letter: string; label: string; icon?: string }
type ProjectLink = { label: string; href: string }

type Project = {
  name: string
  body1: string
  body2: string
  badges: Badge[]
  image?: string
  imageAlt?: string
  winnings?: number
  links?: ProjectLink[]
}

const navItems: { label: string; key: Page }[] = [
  { label: 'Home', key: 'home' },
  { label: 'Projects', key: 'projects' },
  { label: 'Research', key: 'research' },
  { label: 'Team', key: 'team' },
]

const partnerStrip = [
  { src: iconHedera, label: 'Hedera' },
  { src: iconUSDC, label: 'USDC' },
  { src: iconETH, label: 'Ethereum' },
  { src: iconCircle, label: 'Circle' },
  { src: iconSolana, label: 'Solana' },
  { src: iconBase, label: 'Base' },
]

const motionHover = { y: -3, transition: { type: 'spring', stiffness: 420, damping: 28 } }
const motionTap = { scale: 0.98 }

const pageFadeIn = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
}

function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={['font-mono-cja text-[0.6875rem] uppercase tracking-[0.16em] text-neutral-500 mb-2', className].filter(Boolean).join(' ')}
    >
      {children}
    </p>
  )
}

function PartnerMarqueeItems() {
  return (
    <>
      {partnerStrip.map((p) => (
        <div key={p.label} className="flex items-center gap-3 text-neutral-500 shrink-0">
          <div className="size-10 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center overflow-hidden">
            <img src={p.src} alt="" className="size-7 object-contain" />
          </div>
          <span className="text-sm font-medium text-neutral-700 whitespace-nowrap">{p.label}</span>
        </div>
      ))}
    </>
  )
}

export default function App() {
  const [openPaper, setOpenPaper] = React.useState<null | 'stablecoins' | 'dogecoin'>(null)
  const [currentPage, setCurrentPage] = React.useState<Page>('home')

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const projects: Project[] = [
    {
      name: 'StakeClash',
      body1:
        'A DeFi protocol that routes deposits into liquid staking and lending positions, letting users compete through generated yield without ever risking principal.',
      body2:
        'Won the ETHERSPACE track ($1,000), the Hedera CLI Plugin bounty ($2,500), and a Celebrity Judge Honorable Mention ($1,000) at ETHDenver 2026.',
      badges: [
        { letter: 'H', label: 'Hedera', icon: iconHedera },
        { letter: 'U', label: 'USDC', icon: iconUSDC },
        { letter: 'Ξ', label: 'Ethereum', icon: iconETH },
      ] as Badge[],
      winnings: 4500,
      image: stakeclashPhoto,
      imageAlt: 'StakeClash hackathon',
      links: [
        { label: 'Demo', href: 'https://stake-clash.vercel.app/' },
        { label: 'Devfolio', href: 'https://devfolio.co/projects/stake-clash-84f4' },
      ],
    },
    {
      name: 'HyperSphere',
      body1: 'A cross-chain NFC tap-to-pay USDC system enabling instant settlement across Solana and Base.',
      body2:
        'Selected 1st out of 200+ teams (75+ universities) at the University Blockchain Conference — Circle Track ($3,500).',
      badges: [
        { letter: 'C', label: 'Circle', icon: iconCircle },
        { letter: 'S', label: 'Solana', icon: iconSolana },
        { letter: 'B', label: 'Base', icon: iconBase },
      ] as Badge[],
      winnings: 3500,
      image: winningPhoto,
      imageAlt: 'CJA Capital Group winning at University Blockchain Conference',
      links: [
        {
          label: 'Devpost',
          href: 'https://devpost.com/software/hypersphere?ref_content=user-portfolio&ref_feature=in_progress',
        },
      ],
    },
  ]

  const totalHackathonWinnings = React.useMemo(
    () => projects.reduce((sum, project) => sum + (project.winnings ?? 0), 0),
    [projects],
  )

  const [winningsDisplay, setWinningsDisplay] = React.useState(0)

  React.useEffect(() => {
    if (currentPage !== 'projects') {
      setWinningsDisplay(0)
      return
    }
    const target = totalHackathonWinnings
    const reduceMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setWinningsDisplay(target)
      return
    }
    setWinningsDisplay(0)
    const controls = animate(0, target, {
      duration: 2.55,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (latest) => {
        const next = Math.round(latest)
        setWinningsDisplay((prev) => (prev === next ? prev : next))
      },
    })
    void controls.finished.then(() => {
      setWinningsDisplay(target)
    })
    return () => controls.stop()
  }, [currentPage, totalHackathonWinnings])

  const isOpen = openPaper !== null
  const active = React.useMemo(() => {
    if (openPaper === 'stablecoins') {
      return {
        title: 'Stablecoins Explained: Why Crypto Needs a Dollar Twin',
        href: '/pdfs/stablecoins-explained.pdf',
      }
    }
    if (openPaper === 'dogecoin') {
      return {
        title: 'Dogecoin (DOGE): Shorting an Inflationary Meme Asset in Structural Decline',
        href: '/pdfs/dogecoin-shorting-thesis.pdf',
      }
    }
    return null
  }, [openPaper])

  const scrollToContact = () => {
    setCurrentPage('home')
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <div className="min-h-screen bg-white text-neutral-950 antialiased">
      {/* PDF Viewer Overlay */}
      <div
        className={['fixed inset-0 z-50', isOpen ? 'pointer-events-auto' : 'pointer-events-none'].join(' ')}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          onClick={() => setOpenPaper(null)}
          className={['absolute inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300', isOpen ? 'opacity-100' : 'opacity-0'].join(' ')}
          aria-label="Close PDF viewer"
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active?.title ?? 'PDF viewer'}
          className={[
            'absolute left-1/2 top-1/2 w-[min(1000px,92vw)]',
            'h-[min(720px,84vh)] -translate-x-1/2 -translate-y-1/2',
            'bg-white border border-neutral-200/90 shadow-2xl rounded-2xl overflow-hidden transition-all duration-300',
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          ].join(' ')}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-neutral-200/80">
            <div className="min-w-0">
              <h3 className="font-serif text-[1.125rem] leading-tight tracking-tight text-neutral-900 truncate pr-2">
                {active?.title ?? ''}
              </h3>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {active?.href ? (
                <a
                  href={active.href}
                  download
                  className="text-[0.875rem] text-neutral-700 hover:text-black transition-colors border-b border-transparent hover:border-black"
                >
                  Download
                </a>
              ) : null}
              <button
                type="button"
                onClick={() => setOpenPaper(null)}
                className="text-[0.875rem] rounded-full border border-neutral-300 hover:border-black hover:bg-neutral-950 hover:text-white transition-all px-4 py-2"
              >
                Close
              </button>
            </div>
          </div>
          <div className="w-full h-[calc(100%-65px)]">
            {active?.href ? <iframe title={active.title} src={active.href} className="w-full h-full" /> : null}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-4 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-x-3 gap-y-2">
          <motion.button
            type="button"
            onClick={() => setCurrentPage('home')}
            className="col-start-1 row-start-1 justify-self-start shrink-0 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            whileHover={{ scale: 1.02 }}
            whileTap={motionTap}
          >
            <img src={logo} alt="CJA Capital Group" className="h-10 sm:h-11 w-auto" />
          </motion.button>

          <nav className="col-start-2 row-start-1 hidden md:flex items-center justify-center justify-self-center gap-1 lg:gap-2">
            {navItems.map(({ label, key }) => {
              const isActive = currentPage === key
              return (
                <motion.button
                  key={key}
                  type="button"
                  onClick={() => setCurrentPage(key)}
                  className={[
                    'relative px-3 py-2 text-sm font-medium rounded-full transition-colors',
                    isActive ? 'text-neutral-950' : 'text-neutral-600 hover:text-neutral-950',
                  ].join(' ')}
                  whileTap={motionTap}
                >
                  {label}
                  {isActive ? (
                    <span className="absolute inset-0 rounded-full bg-neutral-100 -z-10 border border-neutral-200/80" />
                  ) : null}
                </motion.button>
              )
            })}
          </nav>

          <div className="col-start-2 row-start-1 justify-self-end md:col-start-3 md:justify-self-end flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="https://www.linkedin.com/company/cja-capital-group/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex rounded-full p-2.5 text-neutral-600 hover:text-black hover:bg-neutral-100 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <motion.a
              href="mailto:cjacapitalgroup@gmail.com"
              className="inline-flex rounded-full p-2.5 text-neutral-600 hover:text-black hover:bg-neutral-100 transition-colors"
              aria-label="Email"
              whileHover={{ y: -1 }}
              whileTap={motionTap}
            >
              <Mail className="w-5 h-5" strokeWidth={1.75} aria-hidden />
            </motion.a>
          </div>
        </div>

        <div className="md:hidden border-t border-neutral-100 px-3 py-2 flex items-center justify-center gap-1 overflow-x-auto">
          {navItems.map(({ label, key }) => {
            const isActive = currentPage === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setCurrentPage(key)}
                className={[
                  'whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-full border transition-colors',
                  isActive ? 'bg-neutral-950 text-white border-neutral-950' : 'border-neutral-200 text-neutral-600',
                ].join(' ')}
              >
                {label}
              </button>
            )
          })}
        </div>
      </header>

      {/* ── HOMEPAGE ── */}
      {currentPage === 'home' && (
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

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="font-serif text-neutral-950 max-w-4xl mx-auto"
              >
                <span className="block text-[clamp(1.75rem,4.5vw,2.75rem)] leading-tight mb-2">CJA Capital Group</span>
                <span className="block text-[clamp(2.75rem,8vw,4.75rem)] leading-[0.98] tracking-tight">
                  Build at the frontier of Web3.
                </span>
                <span className="block text-[clamp(2.75rem,8vw,4.75rem)] leading-[0.98] tracking-tight mt-1 sm:mt-1.5">
                  <span className="italic font-normal text-neutral-800">DeFi, DePIN, DeAI.</span>
                </span>
              </motion.h1>

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
                className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                <motion.button
                  type="button"
                  onClick={() => setCurrentPage('projects')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 text-white text-sm font-semibold px-7 py-3.5 shadow-[0_14px_40px_-12px_rgba(0,0,0,0.55)] w-full sm:w-auto"
                  whileHover={{ y: -2, boxShadow: '0 18px 44px -12px rgba(0,0,0,0.55)' }}
                  whileTap={motionTap}
                >
                  Explore projects
                  <ArrowRight className="size-4" strokeWidth={2} />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setCurrentPage('team')}
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-950 text-sm font-semibold px-7 py-3.5 w-full sm:w-auto hover:border-neutral-400 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={motionTap}
                >
                  Meet the team
                </motion.button>
              </motion.div>
            </div>
          </section>

          {/* Partner strip — two identical segments so -50% translate loops seamlessly */}
          <section className="border-y border-neutral-200/80 bg-white py-5 sm:py-6">
            <p className="text-center font-mono-cja text-[0.65rem] uppercase tracking-[0.2em] text-neutral-400 mb-3 px-4">
              Networks &amp; rails we ship on
            </p>
            <div className="w-full min-w-0 overflow-hidden">
              <div className="flex w-max cja-marquee-track items-center">
                <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0">
                  <PartnerMarqueeItems />
                </div>
                <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0" aria-hidden>
                  <PartnerMarqueeItems />
                </div>
              </div>
            </div>
          </section>

          {/* About — Divisions */}
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
                    body: 'Smart contract development and on-chain protocol engineering across EVM and non-EVM ecosystems',
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

          {/* Goals */}
          <section className="bg-neutral-50 border-b border-neutral-200/80">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-12">
              <Eyebrow>Goals</Eyebrow>
              <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] leading-tight text-neutral-950 max-w-3xl mb-6">
                What we do.
              </h2>
              <div className="grid md:grid-cols-3 gap-3 lg:gap-4">
                {[
                  {
                    Icon: TrendingUp,
                    title: 'Proprietary Trading & Research',
                    body: 'Data-driven strategies across crypto spot and derivatives markets',
                  },
                  {
                    Icon: Users,
                    title: 'Mentorship & Education',
                    body: 'Guided student traders through structured research and risk frameworks',
                  },
                  {
                    Icon: ChartBar,
                    title: 'Onchain Infrastructure',
                    body: 'Built experimental payment and settlement primitives using blockchain rails',
                  },
                ].map(({ Icon, title, body }) => (
                  <motion.article
                    key={title}
                    className="group rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-6 text-center hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-900/5 transition-all"
                    whileHover={motionHover}
                  >
                    <div className="mb-3 flex justify-center">
                      <div className="inline-flex rounded-xl border border-neutral-200 bg-neutral-50 p-2.5 text-neutral-900">
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

          {/* Stats */}
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
              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-x-4 lg:gap-y-5 text-center">
                {[
                  { value: `$${totalHackathonWinnings.toLocaleString()}`, label: 'Total hackathon winnings' },
                  { value: `${projects.length}`, label: 'Flagship builds' },
                  { value: '2', label: 'Research papers' },
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

          {/* Accomplishments */}
          <section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-12">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-4 text-center lg:text-left">
                <Eyebrow>Accomplishments</Eyebrow>
                <h2 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-neutral-950">
                  Proof of work.
                </h2>
                <div className="mt-4 h-px w-16 bg-neutral-300 mx-auto lg:mx-0" />
              </div>
              <div className="lg:col-span-8 space-y-2">
                {[
                  'Scaled $50 of personal capital into a six-figure portfolio using crypto markets',
                  'Mentored 10+ students achieving documented portfolio growth',
                  'Designed custom trading strategies using blockchain analytics and market research',
                  'Built and shipped production-ready crypto infrastructure',
                ].map((text) => (
                  <motion.div
                    key={text}
                    className="rounded-2xl border border-neutral-200/90 bg-neutral-50/50 px-5 py-3.5 pl-5 border-l-4 border-l-neutral-950 hover:bg-white hover:shadow-md transition-all"
                    whileHover={{ x: 4 }}
                  >
                    <p className="text-[1rem] leading-relaxed text-neutral-800">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="cja-grid-canvas border-t border-neutral-200/80 scroll-mt-28">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-12">
              <div className="text-center">
                <Eyebrow>Contact</Eyebrow>
                <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] leading-tight text-neutral-950 max-w-2xl mx-auto">
                  Let&apos;s build something amazing.
                </h2>
                <p className="mt-3 text-neutral-600 max-w-lg mx-auto">
                  For collaboration, research, or inquiries.
                </p>
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
      )}

      {/* ── PROJECTS ── */}
      {currentPage === 'projects' && (
        <motion.section className="relative border-t border-neutral-200/80 bg-white" {...pageFadeIn}>
          <div className="absolute inset-x-0 top-0 h-72 cja-grid-canvas opacity-50 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-24 lg:pb-32">
            <div className="max-w-3xl">
              <Eyebrow>Projects</Eyebrow>
              <h1 className="font-serif text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] text-neutral-950 tracking-tight">
                From idea to execution.
              </h1>
            </div>
            <p className="mt-6 text-lg text-neutral-600 lg:whitespace-nowrap">
              Prize-winning systems built at the intersection of settlement, UX, and protocol design.
            </p>

            <div className="mt-12 lg:mt-16 mb-16 lg:mb-20 rounded-3xl border border-neutral-200/90 bg-neutral-950 text-white p-10 lg:p-12 relative overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.2em] text-neutral-400 relative">
                Total hackathon winnings
              </p>
              <p className="relative font-serif text-[clamp(3rem,12vw,5.5rem)] leading-none mt-4 tabular-nums">
                ${winningsDisplay.toLocaleString()}
              </p>
            </div>

            <div className="grid gap-10 lg:gap-14">
              {projects.map((project, i) => (
                <motion.article
                  key={project.name}
                  className={[
                    'rounded-3xl border border-neutral-200/90 bg-white overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.04)]',
                    i === 0 ? 'ring-1 ring-neutral-900/5' : '',
                  ].join(' ')}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  whileHover={{ y: -4, boxShadow: '0 24px 60px -24px rgba(0,0,0,0.22)' }}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-10 lg:pr-8 flex flex-col justify-center order-2 lg:order-1">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.badges.map((b) => (
                          <span
                            key={b.label}
                            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700"
                          >
                            {b.icon ? (
                              <img src={b.icon} alt="" className="size-4 object-contain" />
                            ) : (
                              <span className="font-semibold">{b.letter}</span>
                            )}
                            {b.label}
                          </span>
                        ))}
                        {project.winnings != null ? (
                          <span className="inline-flex rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-900">
                            ${project.winnings.toLocaleString()} awarded
                          </span>
                        ) : null}
                      </div>
                      <h2 className="font-serif text-[2rem] sm:text-[2.35rem] leading-tight text-neutral-950 tracking-tight">
                        {project.name}
                      </h2>
                      <p className="mt-5 text-[1.0625rem] leading-relaxed text-neutral-700">{project.body1}</p>
                      <p className="mt-4 text-[0.9375rem] leading-relaxed text-neutral-500">{project.body2}</p>
                      {project.links?.length ? (
                        <div className="mt-8 flex flex-wrap gap-3">
                          {project.links.map((link) => (
                            <motion.a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors"
                              whileHover={{ y: -1 }}
                              whileTap={motionTap}
                            >
                              {link.label}
                              <ExternalLink className="size-3.5 opacity-70" aria-hidden />
                            </motion.a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <div className="order-1 lg:order-2 flex min-h-[260px] items-center justify-center bg-neutral-100 border-b lg:border-b-0 lg:border-l border-neutral-200/90 p-6 sm:p-8 lg:min-h-full lg:py-10">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.imageAlt ?? ''}
                          className="w-full max-w-full object-contain object-center max-h-[min(68vh,520px)] lg:max-h-[min(78vh,680px)]"
                        />
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* ── RESEARCH ── */}
      {currentPage === 'research' && (
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
                className="flex h-full min-h-0 flex-col rounded-3xl border border-neutral-200/90 bg-neutral-50/40 p-5 sm:p-6 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/[0.06] transition-all"
                whileHover={{ y: -4 }}
              >
                <h2 className="font-serif text-[1.65rem] leading-snug text-neutral-950 tracking-tight">
                  Stablecoins Explained: Why Crypto Needs a Dollar Twin
                </h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-600">
                  An overview of stablecoins as critical financial infrastructure, examining their role in liquidity, settlement
                  efficiency, and onchain dollarization.
                </p>
                <div className="mt-auto shrink-0 border-t border-neutral-200/90 pt-3">
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
                <h2 className="font-serif text-[1.65rem] leading-snug text-neutral-950 tracking-tight">
                  Dogecoin (DOGE): Shorting an Inflationary Meme Asset in Structural Decline
                </h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-600">
                  A short thesis on DOGE analyzing supply inflation, declining network relevance, and asymmetric downside in
                  large-cap meme assets.
                </p>
                <p className="mt-2 text-[0.75rem] text-neutral-400">Track: Short Position &gt; $1B</p>
                <div className="mt-auto shrink-0 border-t border-neutral-200/90 pt-3">
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
      )}

      {/* ── TEAM ── */}
      {currentPage === 'team' && (
        <motion.section className="cja-grid-canvas border-t border-neutral-200/80" {...pageFadeIn}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-24 lg:pb-32">
            <div className="mx-auto mb-14 w-full max-w-2xl text-center lg:mb-20">
              <Eyebrow className="text-center">Team</Eyebrow>
              <h1 className="font-serif text-[clamp(2.5rem,6vw,3.5rem)] text-neutral-950 text-center text-balance">
                The people behind CJA.
              </h1>
            </div>

            <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500 mb-10 text-center">
              Founding Team
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 max-w-5xl mx-auto mb-20">
              <motion.div className="text-center" whileHover={{ y: -3 }}>
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200 bg-white shadow-sm flex items-center justify-center ring-4 ring-white">
                  <img src={adiHeadshot} alt="Adi Chaudhary" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[1rem] font-semibold text-neutral-950">Adi Chaudhary</h3>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-2" style={{ letterSpacing: '0.08em' }}>
                  Co-Founder
                </p>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-1" style={{ letterSpacing: '0.08em' }}>
                  Chief Technology Officer
                </p>
                <a
                  href="https://www.linkedin.com/in/adi-chaudharyy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-neutral-500 hover:text-black transition-colors rounded-full p-1"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div className="text-center" whileHover={{ y: -3 }}>
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200 bg-white shadow-sm flex items-center justify-center ring-4 ring-white">
                  <img src={chrisHeadshot} alt="Christopher Herzog" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[1rem] font-semibold text-neutral-950">Chris Herzog</h3>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-2" style={{ letterSpacing: '0.08em' }}>
                  Founder
                </p>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-1" style={{ letterSpacing: '0.08em' }}>
                  Chief Executive Officer
                </p>
                <a
                  href="https://www.linkedin.com/in/christopherrherzog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-neutral-500 hover:text-black transition-colors rounded-full p-1"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div className="text-center sm:col-span-2 lg:col-span-1" whileHover={{ y: -3 }}>
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200 bg-white shadow-sm flex items-center justify-center ring-4 ring-white">
                  <img src={jazibHeadshot} alt="Jazib Qureshi" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[1rem] font-semibold text-neutral-950">Jazib Qureshi</h3>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-2" style={{ letterSpacing: '0.08em' }}>
                  Co-Founder
                </p>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-1" style={{ letterSpacing: '0.08em' }}>
                  Chief Information Security Officer
                </p>
                <a
                  href="https://www.linkedin.com/in/jazib-qureshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-neutral-500 hover:text-black transition-colors rounded-full p-1"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500 mb-10 text-center">
              Executive Board
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 max-w-5xl mx-auto">
              <motion.div className="text-center" whileHover={{ y: -3 }}>
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200 bg-white flex items-center justify-center">
                  <span className="text-[1.1rem] font-medium text-neutral-500">KG</span>
                </div>
                <h3 className="text-[1rem] font-semibold text-neutral-950">Kellen Gong</h3>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-2" style={{ letterSpacing: '0.08em' }}>
                  Chief Data Officer
                </p>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-1" style={{ letterSpacing: '0.08em' }}>
                  VP of Autonomy
                </p>
                <a
                  href="https://www.linkedin.com/in/kellen-gong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-neutral-500 hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div className="text-center" whileHover={{ y: -3 }}>
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200 bg-white flex items-center justify-center">
                  <img src={joeHeadshot} alt="Joseph Ahn" className="w-full h-full object-cover object-[center_22%]" />
                </div>
                <h3 className="text-[1rem] font-semibold text-neutral-950">Joseph Ahn</h3>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-2" style={{ letterSpacing: '0.08em' }}>
                  Chief Legal Officer
                </p>
                <a
                  href="https://www.linkedin.com/in/joseph-ahn-513a24388/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-neutral-500 hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div className="text-center" whileHover={{ y: -3 }}>
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200 bg-white flex items-center justify-center">
                  <span className="text-[1.1rem] font-medium text-neutral-500">AV</span>
                </div>
                <h3 className="text-[1rem] font-semibold text-neutral-950">Abhishek Valuveri</h3>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-2" style={{ letterSpacing: '0.08em' }}>
                  Chief Financial Officer
                </p>
                <a
                  href="https://www.linkedin.com/in/abhishekvaluveri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-neutral-500 hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div className="text-center" whileHover={{ y: -3 }}>
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200 bg-white flex items-center justify-center">
                  <img src={abdallahHeadshot} alt="Abdallah Elkamash" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[1rem] font-semibold text-neutral-950">Abdallah Elkamash</h3>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-2" style={{ letterSpacing: '0.08em' }}>
                  Chief Biotech Officer
                </p>
                <a
                  href="https://www.linkedin.com/in/abdallah-elkamash-6195112bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-neutral-500 hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div className="text-center" whileHover={{ y: -3 }}>
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200 bg-white flex items-center justify-center">
                  <span className="text-[1.1rem] font-medium text-neutral-500">AG</span>
                </div>
                <h3 className="text-[1rem] font-semibold text-neutral-950">Aarsha Guda</h3>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-2" style={{ letterSpacing: '0.08em' }}>
                  Chief Medical Officer
                </p>
                <a
                  href="https://www.linkedin.com/in/aarshaguda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-neutral-500 hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div className="text-center" whileHover={{ y: -3 }}>
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200 bg-white flex items-center justify-center">
                  <span className="text-[1.1rem] font-medium text-neutral-500">MK</span>
                </div>
                <h3 className="text-[1rem] font-semibold text-neutral-950">Maaz Kheiri</h3>
                <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-2" style={{ letterSpacing: '0.08em' }}>
                  Chief Scientific Officer
                </p>
                <a
                  href="https://www.linkedin.com/in/maaz-kheiri-6b9b23293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-neutral-500 hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Footer */}
      <footer className="border-t border-neutral-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <img src={logo} alt="CJA Capital Group" className="h-10 w-auto opacity-90 mx-auto lg:mx-0" />
            <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500 max-w-sm leading-relaxed mx-auto lg:mx-0">
              Educate. Research. Ship. A collective for markets and infrastructure.
            </p>
          </div>
          <div className="lg:col-span-3 text-center lg:text-left">
            <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.18em] text-neutral-400 mb-4">Navigate</p>
            <ul className="space-y-3 text-sm text-neutral-600 flex flex-col items-center lg:items-start">
              {navItems.map(({ label, key }) => (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => setCurrentPage(key)}
                    className="hover:text-black transition-colors text-center lg:text-left border-b border-transparent hover:border-black"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.18em] text-neutral-400">Connect</p>
            <a
              href="mailto:cjacapitalgroup@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-black border-b border-transparent hover:border-black transition-all"
            >
              <Mail className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
              cjacapitalgroup@gmail.com
            </a>
            <div>
              <a
                href="https://www.linkedin.com/company/cja-capital-group/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm text-neutral-700 hover:text-black transition-colors"
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
            </div>
            <motion.button
              type="button"
              onClick={scrollToContact}
              className="mt-2 inline-flex rounded-full bg-neutral-950 text-white text-sm font-medium px-5 py-2.5"
              whileHover={{ y: -1 }}
              whileTap={motionTap}
            >
              Contact
            </motion.button>
          </div>
        </div>
        <div className="border-t border-neutral-100 py-8 px-5 sm:px-8 lg:px-10">
          <div className="max-w-6xl mx-auto text-center text-[0.8125rem] text-neutral-500 space-y-2 font-normal leading-relaxed">
            <p>CJA Capital Group engages in proprietary research, builds projects, and runs educational initiatives.</p>
            <p>© {new Date().getFullYear()} CJA Capital Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
