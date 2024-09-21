import { BlogPreview } from "@/components/blogPreview";
import { fetchBlogpostsPreview } from "@/lib/contentful/blog";


export default async function Page() {
    const pages = await fetchBlogpostsPreview('de');
    return <div className="py-5 px-5 lg:px-52">
        {pages.map((page: any) => (
            <BlogPreview key={page.slug} slug={page.slug} title={page.heading1} text={page.text.json.content[0].content[0].value} image={page.titlePicture} />
        ))}
    </div>
}