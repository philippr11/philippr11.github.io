"use client";

import { getCurrentLocale, getLinkToLocale } from "@/lib/locale";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';

export function BlogPreview({ slug, title, text, image }: { slug: string, title: string, text: string, image: any }) {
    const currentRoute = usePathname();
    const readMore = 'Weiterlesen';
    return <div className="flex flex-col md:flex-row bg-background m-4 p-4 rounded gap-3">
        <div className="w-full md:w-1/5">
        <Image className="rounded object-contain" sizes="10vw" src={image.url} alt={image.description} width={image.width} height={image.height} />
        </div>
        <div className="flex flex-col w-full md:w-4/5">
        <span className="font-bold text-lg inline-block align-top underline">{title}</span>
        <div>{text}</div>
        <Link className="text-primary" href={`/blog/${slug}`}>Mehr lesen...</Link>
        </div>
    </div>
}