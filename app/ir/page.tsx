"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Image from "next/image"
import { ArrowUp } from "lucide-react"

export default function IRPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff]">
      <Header />

      <main className="flex-1">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Breadcrumb */}
          <BreadcrumbNav
            items={[
              { label: "Shares", href: "#" },
              { label: "IR" },
            ]}
          />

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-8">IR</h1>

          {/* Stock Chart */}
          <div className="relative w-full h-[200px] md:h-[300px] mb-10 overflow-hidden">
            <Image
              src="/images/stock-chart.jpg"
              alt="Stock Chart"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-[600px] mx-auto py-8">
            {/* Placeholder bars */}
            <div className="mb-6">
              <div className="w-full max-w-[400px] mx-auto">
                <div className="h-3 bg-[#4f4f4f] rounded-full w-full mb-2" />
                <div className="h-3 bg-[#7d7d7d] rounded-full w-[80%]" />
              </div>
            </div>

            <h2 className="text-xl font-semibold text-[#1a1a1a] text-center mb-6">
              Headline goes here
            </h2>

            <div className="space-y-2">
              <div className="h-2.5 bg-[#cfcfcf] rounded-full w-full" />
              <div className="h-2.5 bg-[#cfcfcf] rounded-full w-full" />
              <div className="h-2.5 bg-[#cfcfcf] rounded-full w-[90%]" />
              <div className="h-2.5 bg-[#eef1f4] rounded-full w-[80%]" />
              <div className="h-2.5 bg-[#eef1f4] rounded-full w-[70%]" />
            </div>
          </div>
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
