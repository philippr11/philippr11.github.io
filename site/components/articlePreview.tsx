// import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import Link from "next/link";
import Image from 'next/image';

const ArticlePreview = ({ slug, title, text, image, className }: { slug: string, title: string, text: string, image: any, className?: string }) => {
  return <div className={`flex flex-col bg-primary-light50 p-7 rounded gap-3 ${className}`} >
        <div className="w-full">
          <Image className="rounded object-contain" sizes="10vw" src={image.url} alt={image.description} width={image.width} height={image.height} />
        </div>
        <div className="flex flex-col w-full">
          <span className="font-bold text-lg inline-block align-top underline">{title}</span>
          <div>{text}</div>
          <Link className="text-primary" href={`/${slug}`}>Mehr lesen...</Link>
        </div>
    </div>
}

export default ArticlePreview
