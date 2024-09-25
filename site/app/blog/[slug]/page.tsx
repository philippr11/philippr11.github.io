import { getRichTextFormattingOptions } from "@/lib/contentful/rendering";
import { fetchBlogPages, getBlogPage } from "@/lib/contentful/blog";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BlogArticle } from "@/components/blogArticle";

export async function generateStaticParams() {
    const pages = await fetchBlogPages();
    return pages.map((page: any) => ({
        slug: page.slug
    }));
}

export default async function Page({ params }: { params: { slug: string, title: string, content: any } }) {
    const options = await getRichTextFormattingOptions('de');
    const content = await getBlogPage(params.slug, 'de');
    return <div className="pt-28 mt-10 px-5 lg:px-52">
        <BlogArticle options={options} content={content} />
    </div>
}