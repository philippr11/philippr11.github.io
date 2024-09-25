import ArticlePreview from "@/components/articlePreview";
import { BlogPreview } from "@/components/blogPreview";
import { getHomepage } from "@/lib/contentful/homepage";

export default async function Home() {
const data = await getHomepage("de");
  return (
    <div className="min-h-screen bg-primary-light50 flex flex-col items-center">
      <div className="w-full md:w-3/5">
        {
          data.artikelCollection.items.map((artikel : any) => <div key={artikel.slug} ><ArticlePreview title={artikel.title} text={artikel.text.json.content[0].content[0].value} image={artikel.titleImage} slug={artikel.slug} className="" /></div> )
        }
      </div>
      <div className="flex flex-col bg-primary px-8 lg:px-13 py-20">
      <h2 className="text-5xl font-bold text-primary-light50 mb-10">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
      {
        data.blogpostsCollection.items.map((blogpost : any) => <div key={blogpost.slug} className="h-full" ><BlogPreview className="h-full" slug={blogpost.slug} title={blogpost.heading1} image={blogpost.titlePicture} text={blogpost.text.json.content[0].content[0].value} /></div> )
      }
      </div>
      </div>
    </div>
  );
}
