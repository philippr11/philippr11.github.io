import { getRichTextFormattingOptions } from "@/lib/contentful/rendering";
import { fetchTutorialPages, getTutorialPage } from "@/lib/contentful/tutorial";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
    const pages = await fetchTutorialPages();
    return pages.map((page: any) => ({
        slug: page.slug
    }));
}

export default async function Page({ params }: { params: { slug: string, title: string, content: any } }) {
    const options = getRichTextFormattingOptions();
    const content = await getTutorialPage(params.slug, 'de');
    return <div className="py-5 px-5 lg:px-52">
        <h1 className="text-xl font-bold pb-4">{content.title}</h1>
        {documentToReactComponents(content.content.json, options)}
    </div>
}