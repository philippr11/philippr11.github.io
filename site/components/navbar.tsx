"use client";

import * as React from "react"
import Logo from "./logo"
import { useState } from "react"
import Link from "next/link";
import { LocaleSwitch } from "./localeSwitch";
import { getCurrentLocale, getLinkToLocale } from "@/lib/locale";

const NavBar = ({ currentRoute }: { currentRoute: string }) => {
  const drawer = () => {
    setDrawerState(!isOpen);
  }
  const [isOpen, setDrawerState] = useState(false);
  const currentLocale = getCurrentLocale(currentRoute);
  const currentRouteIndicator = (route: String) => {
    if (route == currentRoute || `/de${route}` === currentRoute || (currentRoute === "/de" && route === "/"))
      return "bg-navbar-indicator"
    else return ""
  }
  let items: { route: string; title: string }[] = [
    { route: "/", title: "Home" }
  ]
  return (
    <>
      <nav className="fixed w-full p-4 mb-3 bg-navbar-bg shadow-md rounded-b-lg z-50 h-16">
        <div className="flex items-center justify-between h-full">
          <Link href={getLinkToLocale("/", currentLocale, currentLocale)}>
            <Logo />
          </Link>
          {/* Mobile toggle */}
          <div className="md:hidden">
            <button type="button" onClick={drawer}>
              <svg
                className="h-8 w-8 fill-current text-black"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          {/* Navbar */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-sans">
              <LocaleSwitch />
              {items.map(item => (
                <li key={item.route}>
                  <Link
                    href={getLinkToLocale(item.route, currentLocale, currentLocale)}
                  >
                    {item.title}
                  </Link>
                  <div className={`h-0.5 rounded ${currentRouteIndicator(item.route)}`}></div>
                </li>
              ))}
            </ul>
          </div>
          {/* Dark background transition */}


          {/* Drawer menu */}
          <aside
            className={
              "p-5 transform top-0 left-0 w-64 bg-navbar-sidebarbg fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50 text-gray-900 " +
              (isOpen ? "translate-x-0" : "-translate-x-full")
            }
          >
            <div className="close">
              <button
                className="absolute top-0 right-0 mt-4 mr-4"
                onClick={() => {
                  setDrawerState(false)
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <span
              onClick={() => {
                setDrawerState(false);
              }}
              className="flex w-full items-center p-4 border-b"
            >
              <Link href={getLinkToLocale("/", currentLocale, currentLocale)}>
                <Logo />
              </Link>
            </span>
            <ul className="divide-y font-sans">
              {items.map(item => (
                <li key={item.route}>
                  <Link
                    href={getLinkToLocale(item.route, currentLocale, currentLocale)}
                    className={
                      "p-4 inline-block flex"
                    }
                    onClick={() => {
                      setDrawerState(false);
                    }}
                  >
                    {item.title}
                  </Link>
                  <div className={`h-0.5 rounded ${currentRouteIndicator(item.route)}`}></div>
                </li>
              ))}
            </ul>
            <LocaleSwitch />
          </aside>
        </div>
      </nav>
      <div className="py-8"></div>
    </>
  )
}

export default NavBar
