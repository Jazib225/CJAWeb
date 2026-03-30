import { useEffect, useState } from 'react'
import { motion, animate } from 'motion/react'
import { ExternalLink } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { cjaProjects, HACKATHON_WINNINGS_COUNTUP_SESSION_KEY, totalHackathonWinnings } from '../siteData'
import { Eyebrow, motionTap, pageFadeInNoShift } from '../uiPrimitives'

export function ProjectsPage() {
  const { pathname } = useLocation()
  const [winningsDisplay, setWinningsDisplay] = useState(0)

  useEffect(() => {
    if (pathname !== '/projects') return

    const target = totalHackathonWinnings
    const reduceMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const alreadyDone = (() => {
      try {
        return sessionStorage.getItem(HACKATHON_WINNINGS_COUNTUP_SESSION_KEY) === '1'
      } catch {
        return false
      }
    })()

    const markDone = () => {
      try {
        sessionStorage.setItem(HACKATHON_WINNINGS_COUNTUP_SESSION_KEY, '1')
      } catch {
        /* ignore */
      }
    }

    if (reduceMotion || alreadyDone) {
      setWinningsDisplay(target)
      if (reduceMotion) markDone()
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
      markDone()
      setWinningsDisplay(target)
    })
    return () => controls.stop()
  }, [pathname])

  return (
    <motion.section className="relative overflow-x-clip border-t border-neutral-200/80 bg-white" {...pageFadeInNoShift}>
      <div className="absolute inset-x-0 top-0 z-0 h-56 sm:h-64 cja-grid-canvas opacity-50 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-24 lg:pb-32">
        <div className="flex flex-col gap-16 lg:gap-20">
          <div className="max-w-3xl w-full min-w-0 space-y-5">
            <Eyebrow>Projects</Eyebrow>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] text-neutral-950 tracking-tight">
              From idea to execution.
            </h1>
            <p className="text-lg text-neutral-600 text-pretty">
              Prize-winning systems built at the intersection of settlement, UX, and protocol design.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200/90 bg-neutral-950 text-white px-8 py-9 sm:px-10 sm:py-10 lg:px-12 lg:py-11 relative overflow-hidden shrink-0 isolate w-full max-w-full">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <p className="font-mono-cja text-[0.65rem] uppercase tracking-[0.2em] text-neutral-400 relative z-[1] pr-4">
              Total hackathon winnings
            </p>
            <p className="relative z-[1] font-serif text-[clamp(2.5rem,10vw,4.25rem)] sm:text-[clamp(3rem,11vw,5rem)] leading-[1.02] mt-5 tabular-nums">
              ${winningsDisplay.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 grid gap-10 lg:gap-14 min-w-0">
          {cjaProjects.map((project, i) => (
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
                <div
                  className={[
                    'p-8 lg:p-10 flex flex-col justify-center order-2',
                    project.layoutFlip ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8',
                  ].join(' ')}
                >
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.badges.map((b) => (
                      <span
                        key={b.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700"
                      >
                        {b.icon ? (
                          <img
                            src={b.icon}
                            alt=""
                            width={16}
                            height={16}
                            loading="eager"
                            decoding="async"
                            className="size-4 object-contain"
                          />
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
                  {project.body2 ? (
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-neutral-500">{project.body2}</p>
                  ) : null}
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
                <div
                  className={[
                    'order-1 flex items-center justify-center bg-neutral-100 border-b lg:border-b-0 border-neutral-200/90 p-6 sm:p-8',
                    project.layoutFlip ? 'lg:order-1 lg:border-r' : 'lg:order-2 lg:border-l',
                    project.imagePresentation === 'logo'
                      ? 'min-h-[200px] lg:min-h-[280px] lg:py-10'
                      : 'min-h-[260px] lg:min-h-full lg:py-10',
                  ].join(' ')}
                >
                  {project.image ? (
                    project.imagePresentation === 'square' ? (
                      <div className="flex w-full max-w-full items-center justify-center px-2 sm:px-4">
                        <div className="w-full max-w-[min(100%,clamp(12rem,42vw,22rem))] lg:max-w-[min(100%,clamp(14rem,38vw,26rem))] rounded-2xl border border-neutral-200/90 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                          <img
                            src={project.image}
                            alt={project.imageAlt ?? ''}
                            loading="eager"
                            decoding="async"
                            className="mx-auto h-auto w-full max-h-[min(28vh,11rem)] sm:max-h-[min(32vh,13rem)] lg:max-h-[min(36vh,15rem)] object-contain object-center"
                          />
                        </div>
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.imageAlt ?? ''}
                        loading="eager"
                        decoding="async"
                        className={[
                          'object-contain object-center',
                          project.imagePresentation === 'logo'
                            ? 'w-auto max-h-24 sm:max-h-28 max-w-[min(70vw,200px)]'
                            : 'w-full max-w-full max-h-[min(68vh,520px)] lg:max-h-[min(78vh,680px)]',
                        ].join(' ')}
                      />
                    )
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
