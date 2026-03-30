import * as React from 'react'
import type { ResearchPaperId } from './siteData'

export type PaperViewerContextValue = {
  openPaper: ResearchPaperId | null
  setOpenPaper: React.Dispatch<React.SetStateAction<ResearchPaperId | null>>
}

export const PaperViewerContext = React.createContext<PaperViewerContextValue | null>(null)

export function usePaperViewer() {
  const ctx = React.useContext(PaperViewerContext)
  if (!ctx) throw new Error('usePaperViewer must be used within PaperViewerContext')
  return ctx
}
