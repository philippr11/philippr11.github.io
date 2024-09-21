import { ArticlePage } from "@/components/articlePage";
import { fetchArticlePages, getArticlePage } from "@/lib/contentful/articles";
import { fetchLegalPages, getLegalPage } from "@/lib/contentful/legal";
import { getRichTextFormattingOptions } from "@/lib/contentful/rendering";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
    const legalPages = await fetchLegalPages();
    const articlePages = await fetchArticlePages();
    const pages = [...legalPages, ...articlePages];
    return pages.map((page: any) => ({
        slug: page.slug
    }));
}

export default async function Page({ params }: { params: { slug: string, title: string, content: any } }) {
    const options = await getRichTextFormattingOptions('de');
    let content = await getLegalPage(params.slug, 'de');
    if (!content) {
        content = await getArticlePage(params.slug, 'de');
        return <div className="py-5 mt-10 px-5 lg:px-52">
            <ArticlePage options={options} content={content} />
        </div>
    }
    else {
        return <div className="py-5 px-5 lg:px-52">
            <h1 className="text-xl font-bold pb-4">{content.titel}</h1>
            {documentToReactComponents(content.text.json, options)}
        </div>
    }
}