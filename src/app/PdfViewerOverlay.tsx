import type { ResearchPaperId } from './siteData'
import { researchPdfs } from './siteData'

type PdfViewerOverlayProps = {
  openPaper: ResearchPaperId | null
  onClose: () => void
}

export function PdfViewerOverlay({ openPaper, onClose }: PdfViewerOverlayProps) {
  const isOpen = openPaper !== null
  const active = openPaper ? researchPdfs[openPaper] : null

  return (
    <div
      className={['fixed inset-0 z-50', isOpen ? 'pointer-events-auto' : 'pointer-events-none'].join(' ')}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        onClick={onClose}
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
              onClick={onClose}
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
  )
}
