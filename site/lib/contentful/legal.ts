
export async function fetchLegalPages() {
    const pages = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
           },
           body: JSON.stringify({ query: `query {
                legalPageCollection {
                items {
                    title
                    slug
                    }
                }
            }` }),
           next: { tags: ["legal"] },
         }
       ).then((response) => response.json());
    return pages.data.legalPageCollection.items;
}

export async function getLegalPage(slug: string, locale: string) {
  const legal = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
     {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
       },
       body: JSON.stringify({ query: `query {
            legalPageCollection(locale: "${locale}", where:{slug: "${slug}"}) {
            items {
              title
              slug
              content {
                json
              }
            }
          }
        }` }),
       next: { tags: ["legal"] },
     }
   ).then((response) => response.json()).catch((error) => console.log(error));
   return legal.data.legalPageCollection.items[0];
}