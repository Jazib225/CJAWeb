export const logo = new URL('../assets/a632f2d0f30846efa3dc5e98eb742cff439a1307.png', import.meta.url).href
export const adiHeadshot = new URL('../assets/7745adcfbc153ff7d293317a0e32eb66a8b457b6.png', import.meta.url).href
export const jazibHeadshot = new URL('../assets/678ebadb985361a9a1b94843e0ffab7e9646f7d6.png', import.meta.url).href
export const chrisHeadshot = new URL('../assets/c9e418b60465e4f52ec157c8838c0cd7a3c3b236.png', import.meta.url).href
export const abdallahHeadshot = new URL('../assets/abdallah.jpg', import.meta.url).href
export const joeHeadshot = new URL('../assets/joe.jpg', import.meta.url).href
export const winningPhoto = new URL('../assets/bfa4c34b5e3c41f0b5b095fab7bc8f517baad849.png', import.meta.url).href
export const stakeclashPhoto = new URL('../assets/stakeclash.png', import.meta.url).href
export const iconHedera = new URL('../assets/Hedera.png', import.meta.url).href
export const iconUSDC = new URL('../assets/USDC.png', import.meta.url).href
export const iconETH = new URL('../assets/ETH.png', import.meta.url).href
export const iconCircle = new URL('../assets/Circle.png', import.meta.url).href
export const iconSolana = new URL('../assets/Solana.png', import.meta.url).href
export const iconBase = new URL('../assets/Base.png', import.meta.url).href

export const iconDogecoin = 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png'
export const iconSyrup =
  'https://coin-images.coingecko.com/coins/images/51232/small/_syrup_token_logo.png?1747292046'
export const iconAave = 'https://assets.coingecko.com/coins/images/12645/large/AAVE.png'
export const iconMorpho = 'https://assets.coingecko.com/coins/images/29837/standard/Morpho-token-icon.png?1726771230'

export type Badge = { letter: string; label: string; icon?: string }
export type ProjectLink = { label: string; href: string }

export type Project = {
  name: string
  body1: string
  body2?: string
  badges: Badge[]
  image?: string
  imageAlt?: string
  imagePresentation?: 'full' | 'logo' | 'square'
  winnings?: number
  links?: ProjectLink[]
  layoutFlip?: boolean
}

/** Paste height from LinkedIn’s “Copy code”. Optional `trimBottom` shaves pixels under the post (embed chrome). */
export type LinkedInPostEmbedRef =
  | string
  | { readonly src: string; readonly height?: number; readonly trimBottom?: number }

const MIN_LINKEDIN_EMBED_HEIGHT = 240

const DEFAULT_LINKEDIN_EMBED_HEIGHT = 840

/** LinkedIn’s embed snippet is authored for this width; stretching wider usually adds empty space below the post. */
export const LINKEDIN_EMBED_IFRAME_WIDTH = 504

/**
 * LinkedIn’s “Copy code” height almost always includes footer/padding below the post at 504px wide.
 * Trimming fixes the gap without measuring inside the cross-origin iframe.
 */
const LINKEDIN_EMBED_AUTO_HEIGHT_TRIM_PX = 120

/**
 * LinkedIn posts on /blog. Each entry: embed/post URL string, or `{ src, height? }` from LinkedIn’s iframe.
 */
export const linkedInPostEmbedSrcs: readonly LinkedInPostEmbedRef[] = [
  {
    src: 'https://www.linkedin.com/posts/blockchain-iu_this-weekend-we-had-the-opportunity-to-attend-activity-7444143410510213120-cGVB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYKG6IBbGqc9O_CDENepxS3x4kChDVNe8M',
    height: 1180,
  },
  { src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7435084023611187201', height: 1194 },
  { src: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7433999311333400576' },
  { src: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7404356067171934210' },
  { src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7404305675759120384', height: 963 },
]

export function isLinkedInEmbedUrl(src: string): boolean {
  try {
    const u = new URL(src)
    return u.hostname === 'www.linkedin.com' && u.pathname.startsWith('/embed/feed/update/')
  } catch {
    return false
  }
}

/** Turn embed `src`, feed/update URL, or /posts/…-activity-… link into iframe `src`. */
export function resolveLinkedInEmbedSrc(raw: string): string | null {
  const s = raw.trim()
  if (!s) return null
  if (isLinkedInEmbedUrl(s)) return s

  let u: URL
  try {
    u = new URL(s)
  } catch {
    return null
  }
  if (u.hostname !== 'www.linkedin.com' && u.hostname !== 'linkedin.com') return null

  const fromUrn = s.match(/urn:li:activity:(\d+)/i)
  if (fromUrn) {
    return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${fromUrn[1]}`
  }
  const fromPosts = s.match(/activity-(\d+)/i)
  if (fromPosts) {
    return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${fromPosts[1]}`
  }
  const fromShare = s.match(/urn:li:share:(\d+)/i)
  if (fromShare) {
    return `https://www.linkedin.com/embed/feed/update/urn:li:share:${fromShare[1]}`
  }
  const fromUgc = s.match(/urn:li:ugcPost:(\d+)/i)
  if (fromUgc) {
    return `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${fromUgc[1]}`
  }
  return null
}

/** Resolved iframe URL and display height (after LinkedIn chrome trim + optional extra `trimBottom`). */
export function normalizeLinkedInEmbedRef(ref: LinkedInPostEmbedRef): { src: string; height: number } | null {
  const raw = typeof ref === 'string' ? ref : ref.src
  const extraTrim = typeof ref === 'string' ? 0 : (ref.trimBottom ?? 0)
  const height0 = typeof ref === 'string' ? DEFAULT_LINKEDIN_EMBED_HEIGHT : (ref.height ?? DEFAULT_LINKEDIN_EMBED_HEIGHT)
  const src = resolveLinkedInEmbedSrc(raw)
  if (!src || !isLinkedInEmbedUrl(src)) return null
  const trimmed = height0 - LINKEDIN_EMBED_AUTO_HEIGHT_TRIM_PX - extraTrim
  const height = Math.max(MIN_LINKEDIN_EMBED_HEIGHT, trimmed)
  return { src, height }
}

export const partnerStrip = [
  { src: iconHedera, label: 'Hedera' },
  { src: iconUSDC, label: 'USDC' },
  { src: iconETH, label: 'Ethereum' },
  { src: iconCircle, label: 'Circle' },
  { src: iconSolana, label: 'Solana' },
  { src: iconBase, label: 'Base' },
  { src: '/poly.png', label: 'Polymarket' },
]

export const cjaProjects: Project[] = [
  {
    name: 'StakeClash',
    body1:
      'A DeFi protocol that routes deposits into liquid staking and lending positions, letting users compete through generated yield without ever risking principal.',
    body2:
      'Won the ETHERSPACE track ($1,000), the Hedera CLI Plugin bounty ($2,500), and a Celebrity Judge Honorable Mention ($1,000) at ETHDenver 2026.',
    badges: [
      { letter: 'H', label: 'Hedera', icon: iconHedera },
      { letter: 'U', label: 'USDC', icon: iconUSDC },
      { letter: 'Ξ', label: 'Ethereum', icon: iconETH },
    ] as Badge[],
    winnings: 4500,
    image: stakeclashPhoto,
    imageAlt: 'StakeClash hackathon',
    links: [
      { label: 'Demo', href: 'https://stake-clash.vercel.app/' },
      { label: 'Devfolio', href: 'https://devfolio.co/projects/stake-clash-84f4' },
      { label: 'GitHub', href: 'https://github.com/jazibrq/StakeClash' },
    ],
  },
  {
    name: 'HyperSphere',
    body1: 'A cross-chain NFC tap-to-pay USDC system enabling instant settlement across Solana and Base.',
    body2:
      'Selected 1st out of 200+ teams (75+ universities) at the University Blockchain Conference — Circle Track ($3,500).',
    badges: [
      { letter: 'C', label: 'Circle', icon: iconCircle },
      { letter: 'S', label: 'Solana', icon: iconSolana },
      { letter: 'B', label: 'Base', icon: iconBase },
    ] as Badge[],
    winnings: 3500,
    image: winningPhoto,
    imageAlt: 'CJA Capital Group winning at University Blockchain Conference',
    layoutFlip: true,
    links: [
      {
        label: 'Devpost',
        href: 'https://devpost.com/software/hypersphere?ref_content=user-portfolio&ref_feature=in_progress',
      },
      { label: 'GitHub', href: 'https://github.com/adichaudhary/hypersphere' },
    ],
  },
  {
    name: 'hiero-schedule',
    body1:
      'A library that makes it easy to create and monitor Hedera scheduled transactions. Available as a CLI plugin, Node.js SDK, or browser module.',
    body2: 'Submitted to the Hello Future Apex Hackathon.',
    badges: [{ letter: 'H', label: 'Hedera', icon: iconHedera }] as Badge[],
    image: '/hiero.png?v=20260327',
    imageAlt: 'Hiero',
    imagePresentation: 'square',
    links: [
      { label: 'Demo', href: 'https://hiero-schedule.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/adichaudhary/hiero-schedule-cli' },
    ],
  },
  {
    name: 'Paragon',
    body1:
      'A Polymarket interface for real-time data across active prediction markets, surfacing live order books and trading activity with a dynamic AI flowchart system.',
    badges: [{ letter: 'P', label: 'Polymarket', icon: '/poly.png' }] as Badge[],
    image: '/paragon.png',
    imageAlt: 'Paragon',
    imagePresentation: 'square',
    layoutFlip: true,
    links: [
      { label: 'Demo', href: 'https://paragon-cyan.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Jazib225/Paragon' },
    ],
  },
  {
    name: 'Tokenized Platforms & Games',
    body1:
      'A wallet-connected competitive game and an on-chain self-distributing token economy using SPL tokenization, with an emphasis on scalable tokenomics, automated rewards, and off-chain integrations.',
    badges: [{ letter: 'S', label: 'Solana', icon: iconSolana }] as Badge[],
    image: '/game.png',
    imageAlt: 'Tokenized platforms and games',
    imagePresentation: 'square',
  },
]

export const totalHackathonWinnings = cjaProjects.reduce((sum, project) => sum + (project.winnings ?? 0), 0)

export const NAV_ROUTES = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Research', path: '/research' },
  { label: 'Trading', path: '/trading' },
  { label: 'Blog', path: '/blog' },
  { label: 'Team', path: '/team' },
] as const

export type ResearchPaperId =
  | 'maple'
  | 'stablecoins'
  | 'dogecoin'
  | 'aave-morpho-herzog'
  | 'aave-morpho-adi'
  | 'morpho-aave-jazib'

export const researchPdfs: Record<ResearchPaperId, { title: string; href: string }> = {
  stablecoins: {
    title: 'Stablecoins Explained: Why Crypto Needs a Dollar Twin',
    href: '/pdfs/stablecoins-explained.pdf',
  },
  dogecoin: {
    title: 'Dogecoin (DOGE): Shorting an Inflationary Meme Asset in Structural Decline',
    href: '/pdfs/dogecoin-shorting-thesis.pdf',
  },
  maple: {
    title: 'Maple Finance Investment Thesis',
    href: '/pdfs/Maple_Investment_Thesis.pdf',
  },
  'aave-morpho-herzog': {
    title: 'AAVE vs. MORPHO: Long / Short Pair Trade Analysis',
    href: '/pdfs/aave-vs-morpho-herzog.pdf',
  },
  'aave-morpho-adi': {
    title: 'AAVE & MORPHO: A Sum-of-the-Parts Inquiry Into Two Lending Tokens at $1.7B FDV',
    href: '/pdfs/aave-morpho-adi.pdf',
  },
  'morpho-aave-jazib': {
    title: 'MORPHO vs. AAVE: Long / Short Pair Trade Analysis',
    href: '/pdfs/morpho-vs-aave-jazib.pdf',
  },
}

export const HACKATHON_WINNINGS_COUNTUP_SESSION_KEY = 'cja-hackathon-winnings-countup-done'
