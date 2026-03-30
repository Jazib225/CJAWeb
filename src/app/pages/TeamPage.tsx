import { motion } from 'motion/react'
import { Linkedin as LinkedInIcon } from 'lucide-react'
import {
  adiHeadshot,
  abdallahHeadshot,
  chrisHeadshot,
  jazibHeadshot,
  joeHeadshot,
} from '../siteData'
import { Eyebrow, pageFadeIn, TeamPlaceholderAvatar } from '../uiPrimitives'

export function TeamPage() {
  return (
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
            <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200/90 bg-neutral-200 flex items-stretch justify-stretch shadow-sm">
              <TeamPlaceholderAvatar />
            </div>
            <h3 className="text-[1rem] font-semibold text-neutral-950">Abhishek Valuveri</h3>
            <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-2" style={{ letterSpacing: '0.08em' }}>
              Chief Financial Officer
            </p>
            <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-1" style={{ letterSpacing: '0.08em' }}>
              VP of Chain
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
            <p className="text-[0.8125rem] text-neutral-600 tracking-wider uppercase mt-1" style={{ letterSpacing: '0.08em' }}>
              VP of Junction
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
            <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200/90 bg-neutral-200 flex items-stretch justify-stretch shadow-sm">
              <TeamPlaceholderAvatar />
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
            <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200/90 bg-neutral-200 flex items-stretch justify-stretch shadow-sm">
              <TeamPlaceholderAvatar />
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
            <div className="w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto border border-neutral-200/90 bg-neutral-200 flex items-stretch justify-stretch shadow-sm">
              <TeamPlaceholderAvatar />
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
  )
}
