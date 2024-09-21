export async function fetchArticlesPreview(locale: string) {
  const articles = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
         },
         body: JSON.stringify({ query: `query {
              articleCollection(locale: "${locale}") {
              items {
                  title
                  category
                  slug
                  titleImage {
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
                  }
              }
          }` }),
         next: { tags: ["article"] },
       }
     ).then((response) => response.json()).catch((error) => console.log(error));
  return articles.data.articleCollection.items;
}

export async function getArticlePage(slug: string, locale: string) {
    const article = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
         },
         body: JSON.stringify({ query: `query {
              articleCollection(locale: "${locale}", where:{slug: "${slug}"}) {
              items {
                title
                category
                titleImage {
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
         next: { tags: ["article"] },
       }
     ).then((response) => response.json()).catch((error) => console.log(error));
     return article.data.articleCollection.items[0];
  }

  export async function fetchArticlePages() {
    const article = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
           },
           body: JSON.stringify({ query: `query {
                articleCollection {
                items {
                    title
                    slug
                    titleImage {
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
                    category
                    }
                }
            }` }),
           next: { tags: ["article"] },
         }
       ).then((response) => response.json()).catch((error) => console.log(error));
    return article.data.articleCollection.items;
}