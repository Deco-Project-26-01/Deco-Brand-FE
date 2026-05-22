import type { Metadata } from "next"

const validTabs = ["how-we-work", "history", "certificates", "contact"] as const
type TabType = typeof validTabs[number]

const tabConfig: Record<TabType, { label: string; title: string; description: string }> = {
  "how-we-work": {
    label: "How we work",
    title: "How We Work | DECO IND CO., LTD.",
    description: "Learn about our jewelry manufacturing process, expertise, and commitment to quality craftsmanship since 1986.",
  },
  "history": {
    label: "History",
    title: "Company History | DECO IND CO., LTD.",
    description: "Explore the history of DECO Industry from 1986 to present. 38 years of excellence in gold jewelry manufacturing.",
  },
  "certificates": {
    label: "Certificates",
    title: "Certificates & Credentials | DECO IND CO., LTD.",
    description: "View our certifications including Korea International Trade Association membership and manufacturing excellence awards.",
  },
  "contact": {
    label: "Contact",
    title: "Contact Us | DECO IND CO., LTD.",
    description: "Get in touch with DECO Industry. Factory location, phone numbers, and business inquiries.",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ tab: string }> }): Promise<Metadata> {
  const { tab } = await params
  
  if (!validTabs.includes(tab as TabType)) {
    return {
      title: "Not Found | DECO IND CO., LTD.",
      description: "Page not found",
    }
  }

  const config = tabConfig[tab as TabType]
  
  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      type: "website",
      siteName: "DECO IND CO., LTD.",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
    },
  }
}

export function generateStaticParams() {
  return validTabs.map((tab) => ({
    tab,
  }))
}

export { default } from "./page"
