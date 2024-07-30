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
      <NavBar currentRoute={currentRoute} />
      <div className="bg-primary-light50">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
