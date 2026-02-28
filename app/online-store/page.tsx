"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

const products = [
  {
    id: 1,
    title: "제목입니다",
    images: ["/images/ring-product-1.jpg", "/images/hero-ring.jpg", "/images/diamond-ring-2.jpg"],
    moreLink: "#",
  },
  {
    id: 2,
    title: "제목입니다",
    images: ["/images/ring-product-2.jpg", "/images/diamond-ring-2.jpg", "/images/hero-ring.jpg"],
    moreLink: "#",
  },
]

export default function OnlineStorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff]">
      <Header />

      <main className="flex-1">
        {/* Product Hero Carousel */}
        <section className="relative w-full bg-[#f5f5f5]">
          <div className="max-w-[1280px] mx-auto px-6 py-10">
            <div className="flex items-center justify-center gap-6 overflow-hidden">
              <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px] flex-shrink-0">
                <Image
                  src="/images/ring-product-1.jpg"
                  alt="Ring Product 1"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px] flex-shrink-0">
                <Image
                  src="/images/hero-ring.jpg"
                  alt="Ring Product 2"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px] flex-shrink-0 hidden md:block">
                <Image
                  src="/images/diamond-ring-2.jpg"
                  alt="Ring Product 3"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Sections */}
        <div className="max-w-[1280px] mx-auto px-6">
          {products.map((product, index) => (
            <section key={product.id}>
              {/* Divider */}
              {index > 0 && <hr className="border-[#eef1f4]" />}

              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start gap-8 py-12`}
              >
                {/* Product Image */}
                <div className="w-full md:w-[280px] flex-shrink-0">
                  <div className="relative w-full h-[200px] overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-[#1a1a1a] mb-4">
                    {product.title}
                  </h2>

                  {/* Description placeholder lines */}
                  <div className="space-y-2 mb-4">
                    <div className="h-2.5 bg-[#cfcfcf] rounded-full w-full" />
                    <div className="h-2.5 bg-[#cfcfcf] rounded-full w-full" />
                    <div className="h-2.5 bg-[#cfcfcf] rounded-full w-[90%]" />
                    <div className="h-2.5 bg-[#eef1f4] rounded-full w-[80%]" />
                    <div className="h-2.5 bg-[#eef1f4] rounded-full w-[70%]" />
                  </div>

                  <Link
                    href={product.moreLink}
                    className="inline-block text-xs text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors"
                  >
                    MORE
                  </Link>
                </div>

                {/* Secondary image on right for even, left for odd */}
                <div className="w-full md:w-[220px] flex-shrink-0 hidden md:block">
                  <div className="relative w-full h-[160px] overflow-hidden">
                    <Image
                      src={product.images[1]}
                      alt={`${product.title} detail`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Scroll to top */}
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 bg-[#F1BC69] text-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#e0a94f] transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
