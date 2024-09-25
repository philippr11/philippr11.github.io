"use client";

import * as React from "react"
// import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
// deckDeckGoHighlightElement()
import NavBar from "@/components/navbar"
import { usePathname } from 'next/navigation'
import { Footer } from "@/components/footer";

const Layout = ({ children }: { children: any }) => {
  const currentRoute = usePathname()
  return (
    <>
      <div className="absolute top-0">
        <NavBar currentRoute={currentRoute} />
      </div>
      <div className="mt-10 md:mt-20 bg-primary-light50">
        <main>{children}</main>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  )
}

export default Layout
