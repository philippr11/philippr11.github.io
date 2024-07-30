"use client";

import { getCurrentLocale, getLinkToLocale } from "@/lib/locale";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function TechnicalNotesPreview({ slug, title, text }: { slug: string, title: string, text: string }) {
    const currentRoute = usePathname();
    const currentLocale = getCurrentLocale(currentRoute);
    const readMore = currentLocale === 'en' ? 'Read more' : 'Weiterlesen';
    return <div>
        <div>{title}</div>
        <div>{text}</div>
        <Link href={getLinkToLocale(`/technical-notes/${slug}`, currentLocale, currentLocale)}>{readMore}</Link>
    </div>
}