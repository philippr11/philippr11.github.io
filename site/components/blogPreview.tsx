"use client";

import Link from "next/link";
import Image from 'next/image';

export function BlogPreview({ slug, title, text, image, className }: { slug: string, title: string, text: string, image: any, className?: string }) {
    return <div className={`flex flex-row bg-primary-light50 p-7 rounded gap-3 ${className}`} >
        <div className="w-2/5">
        {/* <div className="w-full md:w-1/5"> */}
        <Image className="rounded object-contain" sizes="10vw" src={image.url} alt={image.description} width={image.width} height={image.height} />
        </div>
        <div className="flex flex-col w-full md:w-3/5">
        <h3 className="font-bold text-lg inline-block align-top underline">{title}</h3>
        <div>{text}</div>
        <Link className="text-primary" href={`/blog/${slug}`}>Mehr lesen...</Link>
        </div>
    </div>
}