export async function getAssetFromId(id: string, locale: string) {
    const asset = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
         },
         body: JSON.stringify({ query: `query {
              assetCollection(locale: "${locale}", where: {sys: {id: "${id}"}}) {
                items {
                url
                fileName
                description
                width
                height
                }
            }
          }` }),
         next: { tags: ["legal"] },
       }
     ).then((response) => response.json()).catch((error) => console.log(error));
     return asset.data.assetCollection.items[0];
  }