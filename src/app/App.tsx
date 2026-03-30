import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PdfViewerOverlay } from './PdfViewerOverlay'
import { PaperViewerContext } from './paperViewerContext'
import type { ResearchPaperId } from './siteData'
import { ScrollToTop } from './ScrollToTop'
import { SiteLayout } from './SiteLayout'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ResearchPage } from './pages/ResearchPage'
import { BlogListPage } from './pages/BlogListPage'
import { TeamPage } from './pages/TeamPage'

export default function App() {
  const [openPaper, setOpenPaper] = React.useState<ResearchPaperId | null>(null)

  const paperViewerValue = React.useMemo(
    () => ({ openPaper, setOpenPaper }),
    [openPaper],
  )

  return (
    <PaperViewerContext.Provider value={paperViewerValue}>
      <div className="min-h-screen bg-white text-neutral-950 antialiased">
        <ScrollToTop />
        <PdfViewerOverlay openPaper={openPaper} onClose={() => setOpenPaper(null)} />

        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="research" element={<ResearchPage />} />
            <Route path="blog" element={<BlogListPage />} />
            <Route path="blog/:slug" element={<Navigate to="/blog" replace />} />
            <Route path="team" element={<TeamPage />} />
          </Route>
        </Routes>
      </div>
    </PaperViewerContext.Provider>
  )
}
