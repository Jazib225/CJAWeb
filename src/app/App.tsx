import * as React from 'react';
import { TrendingUp, Users, ChartBar, Mail, Linkedin } from 'lucide-react';

const logo = new URL('../assets/a632f2d0f30846efa3dc5e98eb742cff439a1307.png', import.meta.url).href
const adiHeadshot = new URL('../assets/7745adcfbc153ff7d293317a0e32eb66a8b457b6.png', import.meta.url).href
const jazibHeadshot = new URL('../assets/678ebadb985361a9a1b94843e0ffab7e9646f7d6.png', import.meta.url).href
const chrisHeadshot = new URL('../assets/c9e418b60465e4f52ec157c8838c0cd7a3c3b236.png', import.meta.url).href
const winningPhoto = new URL('../assets/bfa4c34b5e3c41f0b5b095fab7bc8f517baad849.png', import.meta.url).href

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-12 py-5">
          <div className="flex items-center justify-between">
            <img src={logo} alt="CJA Capital Group" className="h-12" />
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

      {/* Hero Section - Centered */}
      <section className="max-w-[1400px] mx-auto px-12 pt-40 pb-32">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="font-serif text-[5rem] leading-[0.95] tracking-tight mb-8 font-light">
            CJA Capital Group
          </h1>
          <div className="w-16 h-[1px] bg-black mb-8 mx-auto"></div>
          <h2 className="text-[1.375rem] tracking-wide mb-10 font-light text-gray-800 uppercase" style={{ letterSpacing: '0.08em' }}>
            Crypto Trading, Research & Infrastructure
          </h2>
          <p className="text-[1.0625rem] leading-relaxed text-gray-600 max-w-[560px] font-light mx-auto">
            A student-led collective focused on proprietary crypto trading, mentorship, and experimental onchain payment systems.
          </p>
        </div>
      </section>

      {/* What We Do - Grid with asymmetric layout */}
      <section className="bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-12 py-28">
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

      {/* Selected Research & Analysis */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-[1400px] mx-auto px-12 py-32">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-[0.8125rem] tracking-wider uppercase text-gray-400 mb-16 font-medium" style={{ letterSpacing: '0.12em' }}>
              Selected Research & Analysis
            </p>
            
            <div className="grid grid-cols-2 gap-16">
              {/* Research Card 1 */}
              <a 
                href="/pdfs/stablecoins-explained.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
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
                  <p className="text-[0.8125rem] text-gray-500 mb-4 font-light">
                    Christopher Herzog · Jazib Qureshi · Adi Chaudhary
                  </p>
                  <span className="text-[0.875rem] text-black group-hover:translate-x-1 transition-transform inline-block font-medium">
                    Read →
                  </span>
                </div>
              </a>

              {/* Research Card 2 */}
              <a 
                href="/pdfs/dogecoin-shorting-thesis.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
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
                  <p className="text-[0.8125rem] text-gray-500 mb-2 font-light">
                    Adi Chaudhary · Christopher Herzog · Jazib Qureshi
                  </p>
                  <p className="text-[0.75rem] text-gray-400 mb-4 font-light">
                    Track: Short Position &gt; $1B
                  </p>
                  <span className="text-[0.875rem] text-black group-hover:translate-x-1 transition-transform inline-block font-medium">
                    Read →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements - Offset layout */}
      <section className="max-w-[1400px] mx-auto px-12 py-32">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5 col-start-2">
            <p className="text-[0.8125rem] tracking-wider uppercase text-gray-400 mb-8 font-medium" style={{ letterSpacing: '0.12em' }}>
              Key Achievements
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

      {/* HyperSphere Project - Case study style */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-[1400px] mx-auto px-12 py-32">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-10 col-start-2">
              <p className="text-[0.8125rem] tracking-wider uppercase text-gray-400 mb-12 font-medium" style={{ letterSpacing: '0.12em' }}>
                Notable Project
              </p>
              
              <div className="border-t border-gray-200 pt-12">
                <h3 className="font-serif text-[2.5rem] leading-tight mb-8 font-light tracking-tight">
                  HyperSphere
                </h3>
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-7">
                    <p className="text-[1.0625rem] leading-relaxed text-gray-700 mb-6 font-light">
                      A cross-chain NFC tap-to-pay USDC system enabling instant settlement across Solana and Base.
                    </p>
                    <p className="text-[0.9375rem] leading-relaxed text-gray-500 font-light">
                      Selected 1st out of 200+ teams (75+ universities) at the University Blockchain Conference — Circle Track ($3,500).
                    </p>
                  </div>
                  
                  <div className="col-span-5 flex items-end justify-end">
                    <div className="flex items-center gap-10">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-2">
                          <span className="text-white font-semibold text-sm">C</span>
                        </div>
                        <span className="text-[0.75rem] tracking-wider uppercase text-gray-500" style={{ letterSpacing: '0.08em' }}>Circle</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-2">
                          <span className="text-white font-semibold text-sm">S</span>
                        </div>
                        <span className="text-[0.75rem] tracking-wider uppercase text-gray-500" style={{ letterSpacing: '0.08em' }}>Solana</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-2">
                          <span className="text-white font-semibold text-sm">B</span>
                        </div>
                        <span className="text-[0.75rem] tracking-wider uppercase text-gray-500" style={{ letterSpacing: '0.08em' }}>Base</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Winning Photo */}
              <div className="mt-16 border-t border-gray-200 pt-12">
                <img 
                  src={winningPhoto} 
                  alt="CJA Capital Group winning at University Blockchain Conference"
                  className="w-full rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team - Curated layout with subtle details */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-12 py-32">
          <p className="text-[0.8125rem] tracking-wider uppercase text-gray-400 mb-20 font-medium text-center" style={{ letterSpacing: '0.12em' }}>
            Team
          </p>
          
          <div className="flex justify-center items-start gap-20">
            {/* Adi Chaudhary */}
            <div className="text-center">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-gray-300">
                <img 
                  src={adiHeadshot}
                  alt="Adi Chaudhary"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-[1rem] mb-1 font-medium tracking-wide">Adi Chaudhary</h3>
                <div className="w-8 h-[1px] bg-gray-300 mx-auto mb-2"></div>
                <p className="text-[0.8125rem] text-gray-500 tracking-wider uppercase font-light" style={{ letterSpacing: '0.08em' }}>Co-Founder</p>
              </div>
            </div>

            {/* Christopher Herzog */}
            <div className="text-center">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border-2 border-black bg-gray-100 flex items-center justify-center">
                <img 
                  src={chrisHeadshot}
                  alt="Christopher Herzog"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-[1rem] mb-1 font-semibold tracking-wide">Christopher Herzog</h3>
                <div className="w-10 h-[1px] bg-black mx-auto mb-2"></div>
                <p className="text-[0.8125rem] text-gray-700 tracking-wider uppercase font-medium" style={{ letterSpacing: '0.08em' }}>Founder</p>
              </div>
            </div>

            {/* Jazib Qureshi */}
            <div className="text-center">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-gray-300">
                <img 
                  src={jazibHeadshot}
                  alt="Jazib Qureshi"
                  className="w-full h-full object-cover"
                />
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

      {/* Contact Section - Clean and minimal */}
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
              <a 
                href="mailto:cjacapitalgroup@gmail.com" 
                className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors group"
              >
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

      {/* Footer */}
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