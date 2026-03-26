import * as React from 'react'

import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'

type Role = {
  title: string
  description: string
}

type SoftwareTeam = 'Chain' | 'Junction' | 'Autonomy'

const SOFTWARE_DEVELOPER_INTERN_TITLE = 'Software Developer Intern'

const roles: Role[] = [
  {
    title: 'Research Intern',
    description:
      'Help us turn complex questions into clear research outputs.\nWork alongside researchers across crypto markets, infrastructure, and AI.\nContribute to papers, memos, and experiments.',
  },
  {
    title: SOFTWARE_DEVELOPER_INTERN_TITLE,
    description:
      'Build and ship features across our onchain, infrastructure, and AI teams.\nYou care about performance, reliability, and readable code.\nCollaborate with research and product to ship improvements.',
  },
  {
    title: 'Trading Intern',
    description:
      'Support proprietary trading and research workflows across crypto spot and derivatives.\nYou are comfortable with data, risk-aware thinking, and clear write-ups of what you see.\nContribute to monitoring, analysis, and tooling that makes decisions more repeatable.',
  },
  {
    title: 'UX Designer Intern',
    description:
      'Design flows and interfaces that feel simple, fast, and trustworthy.\nYou think in systems: typography, spacing, and interaction.\nYou translate feedback into crisp iteration.',
  },
  {
    title: 'Project Manager Intern',
    description:
      'Coordinate research and engineering execution from idea to delivery.\nYou bring clarity: timelines, priorities, and accountability.\nYou keep teams aligned and decisions documented.',
  },
  {
    title: 'Growth Intern',
    description:
      'Help grow CJA Capital Group through content, partnerships, and community.\nYou enjoy testing ideas and learning quickly from results.\nYou turn momentum into measurable outcomes.',
  },
]

function buildModalInitialValues(roleTitle: string) {
  return {
    roleTitle,
    softwareTeam:
      roleTitle === SOFTWARE_DEVELOPER_INTERN_TITLE ? ('Chain' satisfies SoftwareTeam) : null,
    name: '',
    email: '',
    resume: null as File | null,
    whyYou: '',
    submitted: false,
  }
}

export default function HiringPage() {
  const [applyOpen, setApplyOpen] = React.useState(false)
  const [selectedRole, setSelectedRole] = React.useState<Role | null>(null)
  const [form, setForm] = React.useState(() => buildModalInitialValues(''))

  const openApply = React.useCallback((role: Role) => {
    setSelectedRole(role)
    setForm(buildModalInitialValues(role.title))
    setApplyOpen(true)
  }, [])

  const closeApply = React.useCallback(() => {
    setApplyOpen(false)
  }, [])

  React.useEffect(() => {
    if (!applyOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeApply()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [applyOpen, closeApply])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setForm((prev) => ({ ...prev, submitted: true }))
  }

  return (
    <>
      {/* Hero */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-[1400px] mx-auto px-12 pt-24 pb-16">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="font-serif text-[clamp(2.75rem,7vw,4.25rem)] leading-[0.95] tracking-tight mb-8 font-light">
              Hiring at CJA Capital Group
            </h1>
            <div className="w-16 h-[1px] bg-black mb-8 mx-auto" />
            <p className="text-[1.125rem] leading-relaxed text-gray-700 max-w-[720px] font-light mx-auto">
              CJA Capital Group is a Web3-intersectional collective researching, building, and investing at the frontier of
              blockchain, infrastructure, and AI. We look for sharp, curious people who can turn ideas into outcomes—through
              research rigor, thoughtful engineering, and clear communication.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-[1400px] mx-auto px-12 py-20">
          <div className="max-w-[1100px] mx-auto">
            <p
              className="text-[0.8125rem] tracking-wider uppercase text-gray-400 mb-14 font-medium"
              style={{ letterSpacing: '0.12em' }}
            >
              Open Roles
            </p>

            {roles.length === 0 ? (
              <div className="py-24 text-center">
                <p className="text-[1.125rem] text-gray-700 font-light">Nothing open right now — check back soon</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {roles.map((role) => (
                  <div key={role.title} className="rounded-lg border border-gray-200 bg-white p-8 flex flex-col">
                    <h3 className="font-serif text-[1.875rem] leading-tight tracking-tight font-light">
                      {role.title}
                    </h3>

                    <p className="text-[0.9375rem] leading-relaxed text-gray-600 font-light mt-6 whitespace-pre-line">
                      {role.description}
                    </p>

                    <div className="mt-8 flex items-center justify-end">
                      <button
                        type="button"
                        onClick={() => openApply(role)}
                        className="text-[0.875rem] text-gray-700 hover:text-black transition-colors border border-gray-300 hover:border-black px-3 py-1.5 rounded"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      <div
        className={[
          'fixed inset-0 z-50',
          applyOpen ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
        aria-hidden={!applyOpen}
      >
        {/* Backdrop */}
        <button
          type="button"
          onClick={closeApply}
          className={[
            'absolute inset-0 bg-black/40 transition-opacity duration-300',
            applyOpen ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          aria-label="Close apply modal"
        />

        {/* Content */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedRole ? `Apply for ${selectedRole.title}` : 'Apply'}
          className={[
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
            'w-[min(1000px,92vw)]',
            'max-h-[min(720px,84vh)] overflow-y-auto',
            'bg-white border border-gray-200 shadow-2xl rounded-lg',
            applyOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
            'transition-all duration-300',
          ].join(' ')}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-gray-200 sticky top-0 bg-white">
            <div className="min-w-0">
              <p className="text-[0.75rem] tracking-wider uppercase text-gray-500 font-medium" style={{ letterSpacing: '0.1em' }}>
                Application
              </p>
              <h3 className="font-serif text-[1.5rem] leading-tight tracking-tight text-gray-900 truncate font-light">
                {selectedRole?.title ?? 'Apply'}
              </h3>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={closeApply}
                className="text-[0.875rem] text-gray-700 hover:text-black transition-colors border border-gray-300 hover:border-black px-3 py-1.5 rounded"
              >
                Close
              </button>
            </div>
          </div>

          <div className="px-5 py-6">
            {form.submitted ? (
              <div className="py-10">
                <p className="font-serif text-[2rem] leading-tight tracking-tight font-light mb-6">Thanks for applying.</p>
                <p className="text-[1.0625rem] text-gray-700 font-light leading-relaxed">
                  We received your application for{' '}
                  <span className="font-normal text-black">{form.roleTitle}</span>
                  {form.softwareTeam ? (
                    <>
                      {' '}
                      (<span className="font-normal text-black">{form.softwareTeam}</span>)
                    </>
                  ) : null}
                  . We’ll review and follow up if there’s a fit.
                </p>
                <div className="mt-10 flex justify-end">
                  <button
                    type="button"
                    onClick={closeApply}
                    className="text-[0.875rem] text-gray-700 hover:text-black transition-colors border border-gray-300 hover:border-black px-3 py-1.5 rounded"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[0.8125rem] tracking-wider uppercase text-gray-500 font-light" style={{ letterSpacing: '0.08em' }}>
                      Name
                    </label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.8125rem] tracking-wider uppercase text-gray-500 font-light" style={{ letterSpacing: '0.08em' }}>
                      Email
                    </label>
                    <Input
                      value={form.email}
                      onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[0.8125rem] tracking-wider uppercase text-gray-500 font-light" style={{ letterSpacing: '0.08em' }}>
                    Resume
                  </label>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setForm((prev) => ({ ...prev, resume: e.target.files?.[0] ?? null }))}
                    required
                  />
                </div>

                {form.softwareTeam !== null ? (
                  <div className="space-y-2">
                    <label
                      className="text-[0.8125rem] tracking-wider uppercase text-gray-500 font-light"
                      style={{ letterSpacing: '0.08em' }}
                      htmlFor="hiring-modal-team"
                    >
                      Team
                    </label>
                    <select
                      id="hiring-modal-team"
                      value={form.softwareTeam}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          softwareTeam: e.target.value as SoftwareTeam,
                        }))
                      }
                      required
                      className="flex h-9 w-full max-w-xs rounded-md border border-input bg-input-background px-3 py-1 text-sm text-foreground outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    >
                      <option value="Chain">Chain</option>
                      <option value="Junction">Junction</option>
                      <option value="Autonomy">Autonomy</option>
                    </select>
                  </div>
                ) : null}

                <div className="space-y-2">
                  <label className="text-[0.8125rem] tracking-wider uppercase text-gray-500 font-light" style={{ letterSpacing: '0.08em' }}>
                    Why You
                  </label>
                  <Textarea
                    value={form.whyYou}
                    onChange={(e) => setForm((prev) => ({ ...prev, whyYou: e.target.value }))}
                    placeholder="A few sentences about why you're interested in CJA Capital Group."
                    required
                    className="min-h-32"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeApply}
                    className="text-[0.875rem] text-gray-700 hover:text-black transition-colors border border-gray-300 hover:border-black px-3 py-1.5 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-[0.875rem] text-black hover:text-black transition-colors border border-gray-300 bg-white hover:bg-gray-50 px-3 py-1.5 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

