"use client";

import { getCurrentLocale, getLinkToLocale } from "@/lib/locale";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LocaleSwitch() {
    const pathname = usePathname();
    const currentLocale = getCurrentLocale(pathname);
    const unselectedStyle = "opacity-20";
    return <div className="text-black flex gap-2 text-2xl">
        <Link className={currentLocale === 'de' ? "" : unselectedStyle} href={getLinkToLocale(pathname, 'de', currentLocale)}>🇩🇪</Link>
        <Link className={currentLocale === 'en' ? "" : unselectedStyle} href={getLinkToLocale(pathname, 'en', currentLocale)}>🇺🇸</Link>
    </div>

}