/** Intentions de recherche pour le ciblage éditorial. */
export type SearchIntent =
  | 'informational'
  | 'commercial'
  | 'transactional'
  | 'local'

export type CompetitionLevel = 'low' | 'medium' | 'high'

export type PageType = 'pilier' | 'cluster' | 'blog' | 'local'

export type SchemaType = 'LocalBusiness' | 'Course' | 'FAQPage' | 'Article' | 'BreadcrumbList'

export type PersonaId =
  | 'demandeur-emploi'
  | 'reconversion-40plus'
  | 'femme-eloignee-emploi'
  | 'jeune-qpv'
  | 'professionnel-insertion'
  | 'rh-entreprise'
  | 'salarie-evolution'

export interface Persona {
  id: PersonaId
  label: string
  goals: string[]
  painPoints: string[]
}

export interface KeywordCluster {
  id: string
  label: string
  primaryKeyword: string
  intent: SearchIntent
  modifiers: {
    geo: string[]
    financement: string[]
    public: string[]
  }
  longTail: string[]
  secondaryKeywords: string[]
}

export interface SerpCompetitor {
  name: string
  url: string
  title: string
  metaDescription: string
}

export interface SerpSnapshot {
  id: string
  keyword: string
  clusterId: string
  analyzedAt: string
  intent: SearchIntent
  competition: CompetitionLevel
  competitors: SerpCompetitor[]
  peopleAlsoAsk: string[]
  editorialAngles: string[]
  contentOpportunities: string[]
  secondaryKeywords: string[]
}

export interface FaqItem {
  question: string
  answer: string
}

export interface InternalLink {
  label: string
  href: string
  anchorIntent: string
}

export interface ContentBrief {
  id: string
  clusterId: string
  serpSnapshotId: string
  pageType: PageType
  h1: string
  metaTitle: string
  metaDescription: string
  recommendedSlug: string
  primaryKeywords: string[]
  longTailKeywords: string[]
  intent: SearchIntent
  personas: PersonaId[]
  faq: FaqItem[]
  internalLinks: InternalLink[]
  schemaTypes: SchemaType[]
  eeatSignals: string[]
  existingPagePath?: string
}

export interface ProspectMapping {
  targetBriefId: string
  suggestedSlug: string
  priority: 'high' | 'medium' | 'low'
  rationale: string
}

export interface RegistryEntry {
  path: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  lastModified?: string
  section: 'home' | 'formations' | 'blog' | 'services' | 'equipe' | 'legal' | 'other'
}

export interface SeoContextForAI {
  brief: ContentBrief
  keywords: KeywordCluster | undefined
  serp: SerpSnapshot | undefined
  prompts: {
    page: string
    meta: string
    faq: string
    headings: string
    linkedIn: string
    local: string
  }
  schemaExample: Record<string, unknown> | Record<string, unknown>[]
}
