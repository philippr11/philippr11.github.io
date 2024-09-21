import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from 'next/image';

export function BlogArticle({ options, content}: { options: any, content: any }) {
    return <>
    <Image className="rounded" src={content.titlePicture.url} alt={content.titlePicture.description} width={content.titlePicture.width} height={content.titlePicture.height} />
    <h1 className="mt-10 text-4xl font-bold pb-4">{content.heading1}</h1>
    {documentToReactComponents(content.text.json, options)}
    </>
}