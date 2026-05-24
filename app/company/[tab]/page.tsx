"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import { notFound } from "next/navigation"
import { useState, useEffect, useCallback, use } from "react"
import { ArrowUp, ChevronRight } from "lucide-react"
import Image from "next/image"

const certificateItems = [
  { id: 1, title: "Korea International Trade Association Membership", image: "/images/kita_kor.JPG" },
  { id: 2, title: "Outstanding Precious Metals & Jewelry Manufacturing Certificate - Iksan", image: "/images/424987_264942_1117.jpg", link: "https://www.snmnews.com/news/articleView.html?idxno=424987" },
]

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
    description: "Explore the history of DECO Industry from 1986 to present.",
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

export default function CompanyTabPage({ params }: { params: Promise<{ tab: string }> }) {
  const { tab } = use(params)

  if (!validTabs.includes(tab as TabType)) {
    notFound()
  }

  const activeTab = tab as TabType
  const config = tabConfig[activeTab]

  const [certPage, setCertPage] = useState(1)
  const certItemsPerPage = 3
  const certTotalPages = Math.ceil(certificateItems.length / certItemsPerPage)
  const paginatedCerts = certificateItems.slice(
    (certPage - 1) * certItemsPerPage,
    certPage * certItemsPerPage
  )

  const [loadedCertImages, setLoadedCertImages] = useState<Set<number>>(new Set())
  const [allCertImagesReady, setAllCertImagesReady] = useState(false)

  useEffect(() => {
    setLoadedCertImages(new Set())
    setAllCertImagesReady(false)
  }, [certPage])

  useEffect(() => {
    if (loadedCertImages.size === paginatedCerts.length && paginatedCerts.length > 0) {
      setAllCertImagesReady(true)
    }
  }, [loadedCertImages, paginatedCerts.length])

  const handleCertImageLoad = useCallback((id: number) => {
    setLoadedCertImages(prev => {
      const newSet = new Set(prev)
      newSet.add(id)
      return newSet
    })
  }, [])

  const tabs = [
    { id: "how-we-work", label: "How we work", href: "/company/how-we-work" },
    { id: "history", label: "History", href: "/company/history" },
    { id: "certificates", label: "Certificates", href: "/company/certificates" },
    { id: "contact", label: "Contact", href: "/company/contact" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff]">
      <Header />

      <main className="flex-1">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Breadcrumb */}
          <BreadcrumbNav
            items={[
              { label: "Home", href: "/" },
              { label: "Company", href: "/company" },
              { label: config.label },
            ]}
          />

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-6">
            {config.label}
          </h1>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map((t) => (
              <a
                key={t.id}
                href={t.href}
                className={`px-3 py-2 text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap ${activeTab === t.id
                  ? "bg-[#004127] text-[#ffffff] border-[#004127]"
                  : "bg-[#ffffff] text-[#4f4f4f] border-[#cfcfcf] hover:border-[#004127]"
                  }`}
              >
                {t.label}
              </a>
            ))}
          </div>

          {/* Content Area */}
          <div className="py-8">
            {activeTab === "contact" ? (
              <div className="max-w-[600px] mx-auto">
                <ul className="space-y-2 text-[#1a1a1a] text-sm leading-relaxed">
                  <li>WhatsApp: +82-10-2728-4255</li>
                  <li>Business E-mail: </li>
                </ul>
                <br />
                <ul className="space-y-2 text-[#1a1a1a] text-sm leading-relaxed">
                  <li>Tel </li>
                  <li>Sales: +82-2-747-0908</li>
                  <li>Factory: +82-63-833-8435</li>
                </ul>
                <div className="mt-6 mb-6 w-full max-w-sm">
                  <Image
                    src="/images/decoindco_pdf.jpg"
                    alt="DECO IND. CO., LTD - 18K Mounting Jewelry Catalog"
                    width={600}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <hr className="my-6 border-[#cfcfcf]" />

                <h2 className="text-xl font-semibold text-[#1a1a1a] mb-8">
                  Factory
                </h2>
                <ul className="space-y-2 text-[#1a1a1a] text-sm leading-relaxed">
                  <li>Address: 215-8, Seonhwa-ro 63-gil, Iksan-city, Jeollabuk-do, Republic of Korea</li>
                </ul>

                <div className="mt-8 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.8548474076584!2d126.95476347574978!3d35.94850997250124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f41a0b9f6c05d%3A0x4b5b7b7b7b7b7b7b!2s215-8%20Seonhwa-ro%2063-gil%2C%20Iksan-si%2C%20Jeollabuk-do%2C%20South%20Korea!5e0!3m2!1sen!2skr!4v1710000000000!5m2!1sen!2skr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="DECO Industry Factory Location"
                  />
                </div>
              </div>
            ) : activeTab === "history" ? (
              <div className="w-full max-w-[1000px] mx-auto">
                <Image
                  src="/images/deco_history.webp"
                  alt="DECO Industry History Timeline - 1986 to 2026"
                  width={1000}
                  height={560}
                  className="w-full h-auto rounded mb-12"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 560'%3E%3Crect fill='%23f0f0f0' width='1000' height='560'/%3E%3C/svg%3E"
                  quality={85}
                />

                <div className="space-y-8">
                  <div className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="text-xl font-bold text-[#004127]">1986</div>
                      <div className="text-xs text-[#7d7d7d] mt-1">08</div>
                    </div>
                    <div className="flex-shrink-0 w-2 h-2 bg-[#004127] rounded-full mt-3" />
                    <div className="flex-1 pt-1 text-center">
                      <p className="text-sm text-[#4f4f4f] leading-relaxed">Founded as Deco Ind Co., Ltd. in Seoul, South Korea</p>
                    </div>
                  </div>

                  <div className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="text-xl font-bold text-[#004127]">1994</div>
                      <div className="text-xs text-[#7d7d7d] mt-1">06</div>
                    </div>
                    <div className="flex-shrink-0 w-2 h-2 bg-[#004127] rounded-full mt-3" />
                    <div className="flex-1 pt-1 text-center">
                      <p className="text-sm text-[#4f4f4f] leading-relaxed">Seoul office relocated to Jongno district</p>
                    </div>
                  </div>

                  <div className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="text-xl font-bold text-[#004127]">2002</div>
                      <div className="text-xs text-[#7d7d7d] mt-1">10</div>
                    </div>
                    <div className="flex-shrink-0 w-2 h-2 bg-[#004127] rounded-full mt-3" />
                    <div className="flex-1 pt-1 text-center">
                      <p className="text-sm text-[#4f4f4f] leading-relaxed">Seoul office relocated to Jongno 143-1, Seoul</p>
                    </div>
                  </div>

                  <div className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="text-xl font-bold text-[#004127]">2007</div>
                      <div className="text-xs text-[#7d7d7d] mt-1">03</div>
                    </div>
                    <div className="flex-shrink-0 w-2 h-2 bg-[#004127] rounded-full mt-3" />
                    <div className="flex-1 pt-1 text-center">
                      <p className="text-sm text-[#4f4f4f] leading-relaxed">First participated in the Hong Kong International Jewellery Show (Ongoing)</p>
                    </div>
                  </div>

                  <div className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="text-xl font-bold text-[#004127]">2012</div>
                      <div className="text-xs text-[#7d7d7d] mt-1">08</div>
                    </div>
                    <div className="flex-shrink-0 w-2 h-2 bg-[#004127] rounded-full mt-3" />
                    <div className="flex-1 pt-1 text-center">
                      <p className="text-sm text-[#4f4f4f] leading-relaxed">Kim Ki-seong and Lee Kwan-young Appointed as Co-CEOs</p>
                    </div>
                  </div>

                  <div className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="text-xl font-bold text-[#004127]">2022</div>
                      <div className="text-xs text-[#7d7d7d] mt-1">12</div>
                    </div>
                    <div className="flex-shrink-0 w-2 h-2 bg-[#004127] rounded-full mt-3" />
                    <div className="flex-1 pt-1 text-center">
                      <p className="text-sm text-[#4f4f4f] leading-relaxed">Awarded the &quot;USD 30 Million Export Tower&quot; at Korea&apos;s 59th Trade Day </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeTab === "how-we-work" ? (
              <div className="max-w-[800px] mx-auto">
                <h2 className="text-2xl font-bold text-[#1a1a1a] text-center mb-2">DECO IND CO., LTD.</h2>
                <hr className="border-[#cfcfcf] mb-8" />

                <section className="mb-8">
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    Deco Ind Co Ltd is a B2B jewelry brand based in South Korea since 1986. We specialize in 10k, 14k, 18k mounting for tennis bracelets, necklaces, and earrings for diamonds and color stones since 1986.
                  </p>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    Every piece is personally selected, inspected and completed with a strong focus on quality, origin and craftsmanship. We take personal responsibility for each item we offer.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Expertise and experience</h3>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    For four decades, we have focused exclusively on fine gold jewelry manufacturing. Thanks to this long-term specialization, we have deep expertise in gold mounting quality, precision, and craftsmanship.
                  </p>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed">
                    You can purchase our jewelry by contacting us directly for business inquiries. If you can&apos;t find a specific piece in the current selection, we will be happy to arrange a <a href="/company/contact" className="text-[#004127] hover:underline"> custom order by email or WhatsApp or an individual adjustment. </a>.
                  </p>
                </section>

                <section className="mb-16">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">How our jewelry is created</h3>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    We work exclusively with high-quality gold materials, including 10k gold, 14k gold, and 18k gold. All materials are carefully selected and sourced from trusted suppliers.
                  </p>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    Our jewelry is manufactured in our own factory in South Korea, ensuring full control over quality and precision. We work with long-standing, carefully vetted international partners.
                  </p>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed">
                    We balance precision craftsmanship with reliable production capacity. Each piece passes individual QC inspection.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Our selection</h3>
                  <ul className="space-y-1">
                    <li><a href="/brand?category=bracelets" className="text-[#004127] hover:underline text-sm">Tennis bracelets</a></li>
                    <li><a href="/brand?category=necklace" className="text-[#004127] hover:underline text-sm">Tennis necklaces</a></li>
                    <li><a href="/brand?category=earrings" className="text-[#004127] hover:underline text-sm">Tennis earrings</a></li>
                    <li className="text-sm text-[#1a1a1a]">Custom jewelry designs</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Personal approach</h3>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed">
                    Every customer matters to us. We&apos;ll gladly help you choose and take your preferences into account - whether you&apos;re looking for a specific design, a custom mounting, or an exceptional piece that isn&apos;t usually in stock.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Trust and responsibility</h3>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    Our work follows ethical principles. Founded in 1986 by Mr. Kim Eung-yeol,
                    Deco Ind Co., Ltd. is currently led by co-CEOs Mr. Lee Kwan-young and
                    Mr. Kim Ki-seong, who have directed the company since 2012.
                  </p>



                  <p className="text-sm text-[#1a1a1a] leading-relaxed">
                    For business enquiries or specific requests, you can reach the Seoul Office via the email decoindco@gmail.com
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Where to find us</h3>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-2">
                    You can contact us by mail and whatsapp <a href="/company/contact" className="text-[#004127] hover:underline">Contacts</a>
                  </p>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    We deliver quickly and securely via trusted carriers, worldwide. We support CIF and FOB shipping terms
                  </p>

                  <div className="text-sm text-[#1a1a1a] leading-relaxed">
                    <p className="font-semibold">Location</p>
                    <p>215-8, Seonhwa-ro 63-gil</p>
                    <p>Iksan-city, Jeollabuk-do</p>
                    <p>Republic of Korea</p>
                  </div>

                  <div className="flex justify-center">
                    <Image
                      src="/images/factory.png"
                      alt="Deco Ind Co Ltd Factory - Jewelry Manufacturing Workshop"
                      width={700}
                      height={525}
                      className="rounded"
                    />
                  </div>
                </section>
              </div>
            ) : activeTab === "certificates" ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                  {paginatedCerts.map((item) => (
                    <article key={item.id} className="group cursor-pointer">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                          <div className="relative w-full h-[450px] overflow-hidden mb-3">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className={`object-cover group-hover:scale-105 transition-all duration-300 ${allCertImagesReady ? "opacity-100" : "opacity-0"}`}
                              onLoad={() => handleCertImageLoad(item.id)}
                              {...(item.id === 1 ? { priority: true } : { loading: "lazy" })}
                            />
                            {!allCertImagesReady && (
                              <div className="absolute inset-0 bg-[#f0f0f0] animate-pulse" />
                            )}
                          </div>
                          <h3 className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#004127] transition-colors hover:underline">
                            {item.title}
                          </h3>
                        </a>
                      ) : (
                        <>
                          <div className="relative w-full h-[450px] overflow-hidden mb-3">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className={`object-cover group-hover:scale-105 transition-all duration-300 ${allCertImagesReady ? "opacity-100" : "opacity-0"}`}
                              onLoad={() => handleCertImageLoad(item.id)}
                              {...(item.id === 1 ? { priority: true } : { loading: "lazy" })}
                            />
                            {!allCertImagesReady && (
                              <div className="absolute inset-0 bg-[#f0f0f0] animate-pulse" />
                            )}
                          </div>
                          <h3 className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#004127] transition-colors">
                            {item.title}
                          </h3>
                        </>
                      )}
                    </article>
                  ))}
                </div>

                {certTotalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pb-12">
                    {Array.from({ length: certTotalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCertPage(page)}
                        className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded cursor-pointer transition-colors ${certPage === page
                          ? "bg-[#004127] text-[#ffffff]"
                          : "text-[#7d7d7d] hover:text-[#1a1a1a]"
                          }`}
                      >
                        {page}
                      </button>
                    ))}
                    {certPage < certTotalPages && (
                      <button
                        onClick={() => setCertPage((p) => Math.min(p + 1, certTotalPages))}
                        className="w-8 h-8 flex items-center justify-center text-[#7d7d7d] hover:text-[#1a1a1a] cursor-pointer transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" strokeWidth={3} />
                      </button>
                    )}
                  </div>
                )}
              </>
            ) : null}
          </div>
        </div>

        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#f1bc69] rounded-full flex items-center justify-center shadow-lg hover:bg-[#e0ab58] transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-[#ffffff]" />
        </button>
      </main>

      <Footer />
    </div>
  )
}
