import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Linkedin as LinkedInIcon, Mail } from 'lucide-react'
import { logo, NAV_ROUTES } from './siteData'
import { motionTap } from './uiPrimitives'

function navLinkDesktopClassName({ isActive }: { isActive: boolean }) {
  return [
    'relative px-3 py-2 text-sm font-medium rounded-full transition-colors inline-block',
    isActive ? 'text-neutral-950' : 'text-neutral-600 hover:text-neutral-950',
  ].join(' ')
}

function navLinkMobileClass({ isActive }: { isActive: boolean }) {
  return [
    'whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-full border transition-colors',
    isActive ? 'bg-neutral-950 text-white border-neutral-950' : 'border-neutral-200 text-neutral-600',
  ].join(' ')
}

export function SiteLayout() {
  const navigate = useNavigate()

  const scrollToContact = () => {
    navigate('/')
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-4 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-x-3 gap-y-2">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={motionTap} className="col-start-1 row-start-1 justify-self-start shrink-0">
            <NavLink
              to="/"
              className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <img
                src={logo}
                alt="CJA Capital Group"
                className="h-10 sm:h-11 w-auto"
              />
            </NavLink>
          </motion.div>

          <nav className="col-start-2 row-start-1 hidden md:flex items-center justify-center justify-self-center gap-1 lg:gap-2 md:-translate-x-2 lg:-translate-x-3">
            {NAV_ROUTES.map(({ label, path }) => (
              <motion.div key={path} whileTap={motionTap}>
                <NavLink to={path} end={path === '/'} className={navLinkDesktopClassName}>
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive ? (
                        <span className="absolute inset-0 rounded-full bg-neutral-100 -z-10 border border-neutral-200/80" />
                      ) : null}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
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

        <div className="md:hidden border-t border-neutral-100 px-3 py-2 flex items-center justify-center gap-1 overflow-x-auto -translate-x-1">
          {NAV_ROUTES.map(({ label, path }) => (
            <NavLink key={path} to={path} end={path === '/'} className={navLinkMobileClass}>
              {label}
            </NavLink>
          ))}
        </div>
      </header>

      <Outlet />

      <footer className="border-t border-neutral-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <img src={logo} alt="CJA Capital Group" className="h-10 w-auto opacity-90 mx-auto lg:mx-0" />
            <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500 max-w-sm leading-relaxed mx-auto lg:mx-0">
              Educate. Research. Ship.
              <br />
              The collective for the decentralized web.
            </p>
          </div>
          <div className="lg:col-span-3 text-center lg:text-left">
            <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.18em] text-neutral-400 mb-4">Navigate</p>
            <ul className="space-y-3 text-sm text-neutral-600 flex flex-col items-center lg:items-start">
              {NAV_ROUTES.map(({ label, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) =>
                      [
                        'hover:text-black transition-colors text-center lg:text-left border-b',
                        isActive ? 'border-black text-black' : 'border-transparent hover:border-black',
                      ].join(' ')
                    }
                  >
                    {label}
                  </NavLink>
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
              Gmail
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
    </>
  )
}
