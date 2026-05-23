import type { Metadata } from "next"

type Props = {
  params: Promise<{ category: string }>
}

const categoryMeta: Record<string, { title: string; description: string }> = {
  necklace: {
    title: "Necklace Collection | DECO IND",
    description: "Explore DECO IND's premium 10K, 14K, 18K gold mounting necklace collection. Stone-ready settings for diamonds and colored stones.",
  },
  bracelets: {
    title: "Bracelets Collection | DECO IND",
    description: "Discover DECO IND's tennis bracelet collection. High-quality gold mounting bracelets ready for diamond and gemstone settings.",
  },
  earrings: {
    title: "Earrings Collection | DECO IND",
    description: "Browse DECO IND's elegant earrings collection. Premium gold mounting earrings designed for diamonds and colored stones.",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const meta = categoryMeta[category] || categoryMeta.necklace

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://decoindco.com/brand/${category}`,
      type: "website",
    },
  }
}

export function generateStaticParams() {
  return [
    { category: "necklace" },
    { category: "bracelets" },
    { category: "earrings" },
  ]
}

export default function BrandCategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
