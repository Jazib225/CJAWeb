import * as React from 'react';
import { TrendingUp, Users, ChartBar, Mail, Linkedin } from 'lucide-react';

const logo = new URL('../assets/a632f2d0f30846efa3dc5e98eb742cff439a1307.png', import.meta.url).href
const adiHeadshot = new URL('../assets/7745adcfbc153ff7d293317a0e32eb66a8b457b6.png', import.meta.url).href
const jazibHeadshot = new URL('../assets/678ebadb985361a9a1b94843e0ffab7e9646f7d6.png', import.meta.url).href
const chrisHeadshot = new URL('../assets/c9e418b60465e4f52ec157c8838c0cd7a3c3b236.png', import.meta.url).href
const winningPhoto = new URL('../assets/bfa4c34b5e3c41f0b5b095fab7bc8f517baad849.png', import.meta.url).href
const stakeclashPhoto = new URL('../assets/stakeclash.png', import.meta.url).href

type Page = 'home' | 'projects' | 'research' | 'team'

const navItems: { label: string; key: Page }[] = [
  { label: 'Homepage', key: 'home' },
  { label: 'Projects', key: 'projects' },
  { label: 'Research', key: 'research' },
  { label: 'Team', key: 'team' },
]

export default function App() {
  const [openPaper, setOpenPaper] = React.useState<null | 'stablecoins' | 'dogecoin'>(null)
  const [currentPage, setCurrentPage] = React.useState<Page>('home')

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const projects = [
    {
      name: 'HyperSphere',
      body1: 'A cross-chain NFC tap-to-pay USDC system enabling instant settlement across Solana and Base.',
      body2: 'Selected 1st out of 200+ teams (75+ universities) at the University Blockchain Conference — Circle Track ($3,500).',
      badges: [
        { letter: 'C', label: 'Circle' },
        { letter: 'S', label: 'Solana' },
        { letter: 'B', label: 'Base' },
      ],
      image: winningPhoto,
      imageAlt: 'CJA Capital Group winning at University Blockchain Conference',
    },
    {
      name: 'StakeClash',
      body1: 'A DeFi protocol that routes deposits into liquid staking and lending positions, letting users compete through generated yield without ever risking principal.',
      body2: 'Won the Etherspace track ($1,000), the Hedera CLI Plugin bounty ($2,500), and a Celebrity Judge Honorable Mention ($1,000) at ETHDenver 2026.',
      badges: [
        { letter: 'H', label: 'Hedera' },
        { letter: 'Hi', label: 'Hiero' },
        { letter: 'Ξ', label: 'Ethereum' },
      ],
      image: stakeclashPhoto,
      imageAlt: 'StakeClash hackathon',
    },
  ]

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

  return (
    <div className="min-h-screen bg-white text-black">

      {/* PDF Viewer Overlay */}
      <div
        className={['fixed inset-0 z-50', isOpen ? 'pointer-events-auto' : 'pointer-events-none'].join(' ')}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          onClick={() => setOpenPaper(null)}
          className={['absolute inset-0 bg-black/40 transition-opacity duration-300', isOpen ? 'opacity-100' : 'opacity-0'].join(' ')}
          aria-label="Close PDF viewer"
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active?.title ?? 'PDF viewer'}
          className={[
            'absolute left-1/2 top-1/2 w-[min(1000px,92vw)]',
            'h-[min(720px,84vh)] -translate-x-1/2 -translate-y-1/2',
            'bg-white border border-gray-200 shadow-2xl transition-all duration-300',
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          ].join(' ')}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-gray-200">
            <div className="min-w-0">
              <p className="text-[0.75rem] tracking-wider uppercase text-gray-500 font-medium" style={{ letterSpacing: '0.1em' }}>
                Research Note
              </p>
              <h3 className="font-serif text-[1.125rem] leading-tight tracking-tight text-gray-900 truncate">
                {active?.title ?? ''}
              </h3>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {active?.href ? (
                <a href={active.href} download className="text-[0.875rem] text-gray-700 hover:text-black transition-colors border-b border-transparent hover:border-black">
                  Download
                </a>
              ) : null}
              <button
                type="button"
                onClick={() => setOpenPaper(null)}
                className="text-[0.875rem] text-gray-700 hover:text-black transition-colors border border-gray-300 hover:border-black px-3 py-1.5"
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
      <header className="border-b border-gray-200 sticky top-0 bg-white z-40">
        <div className="max-w-[1400px] mx-auto px-12 py-5">
          <div className="flex items-center justify-between">
            <button type="button" onClick={() => setCurrentPage('home')}>
              <img src={logo} alt="CJA Capital Group" className="h-12" />
            </button>

            {/* Nav */}
            <nav className="flex items-center gap-10">
              {navItems.map(({ label, key }) => {
                const isActive = currentPage === key
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setCurrentPage(key)}
                    className="relative group text-[0.8125rem] tracking-wider uppercase font-medium pb-1"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {label}
                    <span
                      className={[
                        'absolute bottom-0 h-[1.5px] bg-black transition-all duration-300',
                        isActive ? 'left-0 right-0' : 'left-1/2 right-1/2 group-hover:left-0 group-hover:right-0',
                      ].join(' ')}
                    />
                  </button>
                )
              })}
            </nav>

            <a
              href="https://www.linkedin.com/company/cja-capital-group/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </header>

      {/* ── HOMEPAGE ── */}
      {currentPage === 'home' && (
        <>
          {/* Hero */}
          <section className="max-w-[1400px] mx-auto px-12 pt-40 pb-32">
            <div className="max-w-[900px] mx-auto text-center">
              <h1 className="font-serif text-[5rem] leading-[0.95] tracking-tight mb-8 font-light">
                CJA Capital Group
              </h1>
              <div className="w-16 h-[1px] bg-black mb-8 mx-auto"></div>
              <p className="text-[1.125rem] leading-relaxed text-gray-700 max-w-[640px] font-light mx-auto mb-10 italic">
                A Web3-intersectional collective — researching, building, and investing at the frontier of blockchain, infrastructure, and AI.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-gray-500 max-w-[680px] font-light mx-auto">
                CJA operates through three divisions: Chain, Junction, and Autonomy, spanning smart contract development, decentralized infrastructure, and AI-powered on-chain systems. We publish research, ship products, advise clients, and develop talent through a selective membership and multi-university network.
              </p>
            </div>
          </section>

          {/* Goals — What We Do */}
          <section className="bg-gray-50 border-t border-b border-gray-200">
            <div className="max-w-[1400px] mx-auto px-12 py-28">
              <p className="text-[0.8125rem] tracking-wider uppercase text-gray-400 mb-16 font-medium" style={{ letterSpacing: '0.12em' }}>
                Goals
              </p>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-4 col-start-1">
                  <div className="mb-7">
                    <TrendingUp className="w-7 h-7 text-black" strokeWidth={1.25} />
                  </div>
                  <h3 className="text-[0.9375rem] tracking-wider uppercase mb-5 font-medium" style={{ letterSpacing: '0.1em' }}>
                    Proprietary Trading & Research
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-gray-600 font-light">
                    Data-driven strategies across crypto spot and derivatives markets
                  </p>
                </div>
                <div className="col-span-4">
                  <div className="mb-7">
                    <Users className="w-7 h-7 text-black" strokeWidth={1.25} />
                  </div>
                  <h3 className="text-[0.9375rem] tracking-wider uppercase mb-5 font-medium" style={{ letterSpacing: '0.1em' }}>
                    Mentorship & Education
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-gray-600 font-light">
                    Guided student traders through structured research and risk frameworks
                  </p>
                </div>
                <div className="col-span-4">
                  <div className="mb-7">
                    <ChartBar className="w-7 h-7 text-black" strokeWidth={1.25} />
                  </div>
                  <h3 className="text-[0.9375rem] tracking-wider uppercase mb-5 font-medium" style={{ letterSpacing: '0.1em' }}>
                    Onchain Infrastructure
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-gray-600 font-light">
                    Built experimental payment and settlement primitives using blockchain rails
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Summary of Accomplishments */}
          <section className="max-w-[1400px] mx-auto px-12 py-32">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-5 col-start-2">
                <p className="text-[0.8125rem] tracking-wider uppercase text-gray-400 mb-8 font-medium" style={{ letterSpacing: '0.12em' }}>
                  Summary of Accomplishments
                </p>
                <div className="w-12 h-[1px] bg-gray-300 mb-12"></div>
              </div>
              <div className="col-span-6">
                <div className="space-y-7">
                  <div className="border-l-2 border-black pl-6">
                    <p className="text-[1rem] leading-relaxed text-gray-800">
                      Scaled $50 of personal capital into a six-figure portfolio using crypto markets
                    </p>
                  </div>
                  <div className="border-l-2 border-black pl-6">
                    <p className="text-[1rem] leading-relaxed text-gray-800">
                      Mentored 10+ students achieving documented portfolio growth
                    </p>
                  </div>
                  <div className="border-l-2 border-black pl-6">
                    <p className="text-[1rem] leading-relaxed text-gray-800">
                      Designed custom trading strategies using blockchain analytics and market research
                    </p>
                  </div>
                  <div className="border-l-2 border-black pl-6">
                    <p className="text-[1rem] leading-relaxed text-gray-800">
                      Built and shipped production-ready crypto infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200">
            <div className="max-w-[1400px] mx-auto px-12 py-32">
              <div className="max-w-[700px] mx-auto text-center">
                <h2 className="font-serif text-[2.25rem] mb-6 font-light tracking-tight">
                  Contact Us
                </h2>
                <p className="text-[0.9375rem] text-gray-600 mb-14 font-light">
                  For collaboration, research, or inquiries.
                </p>
                <div className="flex items-center justify-center gap-12">
                  <a href="mailto:cjacapitalgroup@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors group">
                    <Mail className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-[0.9375rem] font-light border-b border-transparent group-hover:border-black transition-all">cjacapitalgroup@gmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cja-capital-group/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors group"
                  >
                    <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-[0.9375rem] font-light border-b border-transparent group-hover:border-black transition-all">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── PROJECTS ── */}
      {currentPage === 'projects' && (
        <section className="border-t border-gray-200 bg-white">
          <div className="max-w-[1400px] mx-auto px-12 py-32">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-10 col-start-2">
                <p className="text-[0.8125rem] tracking-wider uppercase text-gray-400 font-medium mb-12" style={{ letterSpacing: '0.12em' }}>
                  Notable Projects
                </p>

                {projects.map((project, i) => (
                  <div key={project.name}>
                    <div className={['border-t border-gray-200 pt-12', i > 0 ? 'mt-20' : ''].join(' ')}>
                      <h3 className="font-serif text-[2.5rem] leading-tight mb-8 font-light tracking-tight">
                        {project.name}
                      </h3>
                      <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-7">
                          <p className="text-[1.0625rem] leading-relaxed text-gray-700 mb-6 font-light">
                            {project.body1}
                          </p>
                          <p className="text-[0.9375rem] leading-relaxed text-gray-500 font-light">
                            {project.body2}
                          </p>
                        </div>
                        <div className="col-span-5 flex items-end justify-end">
                          <div className="flex items-center gap-10">
                            {project.badges.map((badge) => (
                              <div key={badge.label} className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-2">
                                  <span className="text-white font-semibold text-sm">{badge.letter}</span>
                                </div>
                                <span className="text-[0.75rem] uppercase text-gray-500">{badge.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {project.image && (
                        <div className="mt-16 border-t border-gray-200 pt-12">
                          <img src={project.image} alt={project.imageAlt ?? ''} className="w-full rounded-sm" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── RESEARCH ── */}
      {currentPage === 'research' && (
        <section className="border-t border-gray-200 bg-white">
          <div className="max-w-[1400px] mx-auto px-12 py-32">
            <div className="max-w-[1100px] mx-auto">
              <p className="text-[0.8125rem] tracking-wider uppercase text-gray-400 mb-16 font-medium" style={{ letterSpacing: '0.12em' }}>
                Selected Research & Analysis
              </p>
              <div className="grid grid-cols-2 gap-16">
                <div className="group block">
                  <div className="mb-8">
                    <p className="text-[0.75rem] tracking-wider uppercase text-gray-400 mb-6 font-medium" style={{ letterSpacing: '0.1em' }}>
                      Research Note
                    </p>
                    <h3 className="font-serif text-[1.75rem] leading-tight mb-6 font-normal tracking-tight text-gray-900">
                      Stablecoins Explained: Why Crypto Needs a Dollar Twin
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed text-gray-600 mb-8 font-light">
                      An overview of stablecoins as critical financial infrastructure, examining their role in liquidity, settlement efficiency, and onchain dollarization.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <button
                      type="button"
                      onClick={() => setOpenPaper('stablecoins')}
                      className="text-[0.875rem] text-black group-hover:translate-x-1 transition-transform inline-block font-medium"
                    >
                      Read →
                    </button>
                  </div>
                </div>

                <div className="group block">
                  <div className="mb-8">
                    <p className="text-[0.75rem] tracking-wider uppercase text-gray-400 mb-6 font-medium" style={{ letterSpacing: '0.1em' }}>
                      Research Note
                    </p>
                    <h3 className="font-serif text-[1.75rem] leading-tight mb-6 font-normal tracking-tight text-gray-900">
                      Dogecoin (DOGE): Shorting an Inflationary Meme Asset in Structural Decline
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed text-gray-600 mb-8 font-light">
                      A short thesis on DOGE analyzing supply inflation, declining network relevance, and asymmetric downside in large-cap meme assets.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-[0.75rem] text-gray-400 mb-4 font-light">
                      Track: Short Position &gt; $1B
                    </p>
                    <button
                      type="button"
                      onClick={() => setOpenPaper('dogecoin')}
                      className="text-[0.875rem] text-black group-hover:translate-x-1 transition-transform inline-block font-medium"
                    >
                      Read →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── TEAM ── */}
      {currentPage === 'team' && (
        <section className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-12 py-32">
            <p className="text-[0.8125rem] tracking-wider uppercase text-gray-400 mb-20 font-medium text-center" style={{ letterSpacing: '0.12em' }}>
              Team
            </p>
            <div className="flex justify-center items-start gap-20">
              <div className="text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-gray-300">
                  <img src={adiHeadshot} alt="Adi Chaudhary" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[1rem] mb-1 font-medium tracking-wide">Adi Chaudhary</h3>
                  <div className="w-8 h-[1px] bg-gray-300 mx-auto mb-2"></div>
                  <p className="text-[0.8125rem] text-gray-500 tracking-wider uppercase font-light" style={{ letterSpacing: '0.08em' }}>Co-Founder</p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border-2 border-black bg-gray-100 flex items-center justify-center">
                  <img src={chrisHeadshot} alt="Christopher Herzog" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[1rem] mb-1 font-semibold tracking-wide">Christopher Herzog</h3>
                  <div className="w-10 h-[1px] bg-black mx-auto mb-2"></div>
                  <p className="text-[0.8125rem] text-gray-700 tracking-wider uppercase font-medium" style={{ letterSpacing: '0.08em' }}>Founder</p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-gray-300">
                  <img src={jazibHeadshot} alt="Jazib Qureshi" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[1rem] mb-1 font-medium tracking-wide">Jazib Qureshi</h3>
                  <div className="w-8 h-[1px] bg-gray-300 mx-auto mb-2"></div>
                  <p className="text-[0.8125rem] text-gray-500 tracking-wider uppercase font-light" style={{ letterSpacing: '0.08em' }}>Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer — always visible */}
      <footer className="border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-12 py-10">
          <div className="text-center text-[0.8125rem] text-gray-500 space-y-2 font-light">
            <p>CJA Capital Group engages in proprietary research and educational initiatives.</p>
            <p>© {new Date().getFullYear()} CJA Capital Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
