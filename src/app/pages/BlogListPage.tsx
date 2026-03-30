import { motion } from 'motion/react'
import {
  linkedInPostEmbedSrcs,
  isLinkedInEmbedUrl,
  normalizeLinkedInEmbedRef,
  LINKEDIN_EMBED_IFRAME_WIDTH,
} from '../siteData'
import { Eyebrow, pageFadeIn } from '../uiPrimitives'

function LinkedInPostFrame({ src, height }: { src: string; height: number }) {
  if (!isLinkedInEmbedUrl(src)) return null

  const w = LINKEDIN_EMBED_IFRAME_WIDTH

  return (
    <div className="mx-auto w-full max-w-[504px] overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-50 shadow-[0_1px_0_rgba(0,0,0,0.04)] leading-[0]">
      <iframe
        src={src}
        title="LinkedIn post"
        width={w}
        height={height}
        className="m-0 block w-full max-w-[504px] border-0 bg-white p-0"
        loading="lazy"
        allow="clipboard-write; encrypted-media"
      />
    </div>
  )
}

export function BlogListPage() {
  const embeds = linkedInPostEmbedSrcs.map(normalizeLinkedInEmbedRef).filter((x): x is NonNullable<typeof x> => x != null)

  return (
    <motion.section className="border-t border-neutral-200/80 bg-white" {...pageFadeIn}>
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10 pt-16 pb-20 lg:pb-24">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] tracking-tight text-balance text-neutral-950">
          Updates.
        </h1>

        <div className="mt-12 flex flex-col gap-10 lg:mt-14 lg:gap-12">
          {embeds.map(({ src, height: h }, i) => (
            <motion.div
              key={`${src}-${i}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <LinkedInPostFrame src={src} height={h} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
