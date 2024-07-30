export async function fetchTutorialPages() {
    const pages = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
           },
           body: JSON.stringify({ query: `query {
                tutorialCollection {
                items {
                    title
                    slug
                    }
                }
            }` }),
           next: { tags: ["tutorial"] },
         }
       ).then((response) => response.json()).catch((error) => console.log(error));
    return pages.data.tutorialCollection.items;
}

export async function fetchTutorialPagesPreview(locale: string) {
  const pages = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
         },
         body: JSON.stringify({ query: `query {
              tutorialCollection(locale: "${locale}") {
              items {
                  title
                  slug
                  previewText
                  }
              }
          }` }),
         next: { tags: ["tutorial"] },
       }
     ).then((response) => response.json()).catch((error) => console.log(error));

  return pages.data.tutorialCollection.items;
}

export async function getTutorialPage(slug: string, locale: string) {
    const tutorial = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
         },
         body: JSON.stringify({ query: `query {
              tutorialCollection(locale: "${locale}", where:{slug: "${slug}"}) {
              items {
                title
                slug
                content {
                  json
                }
              }
            }
          }` }),
         next: { tags: ["tutorial"] },
       }
     ).then((response) => response.json()).catch((error) => console.log(error));
     return tutorial.data.tutorialCollection.items[0];
  }