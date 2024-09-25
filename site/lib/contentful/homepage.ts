export async function getHomepage(locale: string) {
    const home = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
         },
         body: JSON.stringify({ query: `query {
              pageCollection(locale: "${locale}", where: { title: "Startseite" }) {
                items {
                slug
                title
                artikelCollection (limit: 5) {
                  items {
                    titleImage {
                      url
                      fileName
                      description
                      width
                      height
                    }
                    title
                    slug
                    text {
                    json
                    }
                  }
                }
                blogpostsCollection (limit: 5) {
                    items {
                    heading1
                    titlePicture {
                      url
                      fileName
                      description
                      width
                      height
                    }
                    slug
                    text {
                      json
                    }
                  }
                }
              }
            }
          }` }),
         next: { tags: ["blogpost"] },
       }
     ).then((response) => response.json()).catch((error) => console.log(error));
     console.log(home);
     return home.data.pageCollection.items[0];
  }