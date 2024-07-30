// import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"

interface ArticlePreviewInterface {
    title: string,
    excerpt: string,
    image: any,
    alt: string
}

const ArticlePreview = ({ title, excerpt, image, alt } : ArticlePreviewInterface) => {
  return (
    <div className="m-2 rounded-xl overflow-hidden relative h-3/4 flex flex-col">
        {/* <GatsbyImage alt={alt} image={image} className="h-full"></GatsbyImage> */}
        <a className="font-bold font-crimson text-3xl">{title}</a>
        <a>{excerpt}</a>
    </div>
  )
}

export default ArticlePreview
