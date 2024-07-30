import { TechnicalNotesPreview } from "@/components/technicalNotesPreview";
import { fetchTutorialPagesPreview } from "@/lib/contentful/tutorial";


export default async function Page() {
    const pages = await fetchTutorialPagesPreview('en-US');
    return <div className="py-5 px-5 lg:px-52">
        {pages.map((page: any) => (
            <TechnicalNotesPreview key={page.slug} slug={page.slug} title={page.title} text={page.previewText} />
        ))}
    </div>
}