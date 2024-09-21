export async function fetchBlogpostsPreview(locale: string) {
  const pages = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
         },
         body: JSON.stringify({ query: `query {
              blogpostCollection(locale: "${locale}") {
              items {
                  heading1
                  slug
                  titlePicture {
                  url
                  fileName
                  description
                  width
                  height
                  contentType
                  }
                  text {
                  json
                  }
                  tags
                  }
              }
          }` }),
         next: { tags: ["tutorial"] },
       }
     ).then((response) => response.json()).catch((error) => console.log(error));
     console.log(pages);
  return pages.data.blogpostCollection.items;
}

export async function getBlogPage(slug: string, locale: string) {
    const tutorial = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
         },
         body: JSON.stringify({ query: `query {
              blogpostCollection(locale: "${locale}", where:{slug: "${slug}"}) {
              items {
                heading1
                titlePicture {
                  url
                  fileName
                  description
                  width
                  height
                  contentType
                  }
                slug
                text {
                json
                }
              }
            }
          }` }),
         next: { tags: ["blogpost"] },
       }
     ).then((response) => response.json()).catch((error) => console.log(error));
     return tutorial.data.blogpostCollection.items[0];
  }

  export async function fetchBlogPages() {
    const pages = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
           },
           body: JSON.stringify({ query: `query {
                blogpostCollection {
                items {
                    heading1
                    slug
                    titlePicture {
                    url
                    fileName
                    description
                    width
                    height
                    contentType
                    }
                    text {
                    json
                    }
                    tags
                    }
                }
            }` }),
           next: { tags: ["tutorial"] },
         }
       ).then((response) => response.json()).catch((error) => console.log(error));
       console.log(pages);
    return pages.data.blogpostCollection.items;
}