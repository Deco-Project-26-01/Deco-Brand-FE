"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import "flag-icons/css/flag-icons.min.css"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/Nano2.png"
              alt="Logo"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </section>

        {/* Content Section 1 */}
        <section className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-[400px] flex-shrink-0">
              <div className="relative w-full h-[280px] overflow-hidden">
                <Image
                  src="/images/kora_pavilion2012.jpg"
                  alt="KORA pavilion at a jewelry trade show"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-4">DECO IND CO., LTD.</h2>
              <div className="mt-4 text-sm text-[#4f4f4f] leading-relaxed space-y-2">
                <p>
                  We are a manufacturer of the 10k,14k,18k mounting for &quot;tennis bracelets,necklace,
                  earrings&quot; for diamonds color stones.
                </p>
                <p>We work exclusively with high-quality gold materials.</p>
                <p>
                  We supply it in a stone-ready setting form suitable for setting diamonds or colored stones.
                  Custom designs, sizes, and gold tones can be produced according to customer requests.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1280px] mx-auto px-6">
          <hr className="border-[#eef1f4]" />
        </div>

        {/* Content Section 2 */}
        <section className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-4">
                Since 1986, manufacturing in South Korea. Exporting to 20+ countries worldwide.
              </h2>

              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 max-w-[600px]">
                <div className="text-center p-4 sm:p-5 border border-[#eef1f4]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#004127]">40+</div>
                  <div className="text-xs text-[#7d7d7d] mt-1.5 leading-tight">
                    Years of<br />Manufacturing
                  </div>
                </div>
                <div className="text-center p-4 sm:p-5 border border-[#eef1f4]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#004127]">22</div>
                  <div className="text-xs text-[#7d7d7d] mt-1.5 leading-tight">
                    Export Countries<br />in 2025
                  </div>
                </div>
                <div className="text-center p-4 sm:p-5 border border-[#eef1f4]">
                  <div className="text-2xl sm:text-3xl font-bold text-[#004127]">3~5</div>
                  <div className="text-xs text-[#7d7d7d] mt-1.5 leading-tight">
                    Days Sample<br />Lead Time
                  </div>
                </div>
              </div>

              <div className="max-w-[700px] mx-auto space-y-8 mt-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Product</h3>
                  <p className="text-sm text-[#4f4f4f] leading-relaxed">
                    Gold Jewellery Set, White Gold Jewellery, Diamond Jewellery
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Brand</h3>
                  <p className="text-sm text-[#4f4f4f] leading-relaxed">
                    18K gold mounting jewellery of tennis bracelet, necklace & earring for diamonds.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Main Markets</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex items-center gap-1.5">
                      <span className="fi fi-us text-xl"></span>
                      <span className="text-sm text-[#4f4f4f]">USA</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="fi fi-ae text-xl"></span>
                      <span className="text-sm text-[#4f4f4f]">UAE</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="fi fi-hk text-xl"></span>
                      <span className="text-sm text-[#4f4f4f]">Hong Kong</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="fi fi-in text-xl"></span>
                      <span className="text-sm text-[#4f4f4f]">India</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="fi fi-jp text-xl"></span>
                      <span className="text-sm text-[#4f4f4f]">Japan</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="fi fi-au text-xl"></span>
                      <span className="text-sm text-[#4f4f4f]">Australia</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="fi fi-th text-xl"></span>
                      <span className="text-sm text-[#4f4f4f]">Thailand</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="fi fi-it text-xl"></span>
                      <span className="text-sm text-[#4f4f4f]">Italy</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="fi fi-sg text-xl"></span>
                      <span className="text-sm text-[#4f4f4f]">Singapore</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[300px] flex-shrink-0">
              <div className="relative w-full h-[500px] overflow-hidden">
                <Image
                  src="/images/decoindcoltd_factory.JPG"
                  alt="DECO Industry factory exterior with company executives"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-right mt-2 text-sm text-[#7d7d7d]">
                CEO : KIM KISEONG, LEE KWANYOUNG
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
