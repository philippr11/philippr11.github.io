import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from 'next/image';

export function ArticlePage({ options, content}: { options: any, content: any }) {
    return <>
    <Image className="rounded" src={content.titleImage.url} alt={content.titleImage.description} width={content.titleImage.width} height={content.titleImage.height} />
    <h1 className="mt-10 text-4xl font-bold pb-4">{content.title}</h1>
    {documentToReactComponents(content.text.json, options)}
    </>
}