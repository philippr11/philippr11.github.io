import * as React from "react"

interface IArticle {title: string, excerpt: string, alt: string, image:any, path: string};

// function getContent() : any {
//   return useStaticQuery(
//     graphql`query {
//       allMarkdownRemark(
//         filter: {fileAbsolutePath: {regex: "/blog/"}}
//         limit: 10
//         sort: {frontmatter: {date: DESC}}
//       ) {
//         edges {
//           node {
//             excerpt
//             fileAbsolutePath
//             frontmatter {
//               image
//               title
//               date
//               alt
//               slug
//             }
//           }
//         }
//       }
//       allFile(
//         filter: {sourceInstanceName: {eq: "images"}, relativePath: {regex: "/blog/"}}
//         sort: {birthTime: ASC}
//         limit: 10
//       ) {
//         nodes {
//           childImageSharp {
//             gatsbyImageData
//           }
//           relativePath
//         }
//       }
//       }`
//   );
// }

// function getImageToArticle(imageFrontmatter:string, imageList:any): any{
//   return imageList.find((element: { relativePath: string, childImageSharp:any }) => element.relativePath == imageFrontmatter).childImageSharp.gatsbyImageData;
// }

const ContentLayout = () => {
  let items: IArticle[] = [];
  // const { allMarkdownRemark, allFile }: any = getContent();
  // for (let i = 0; i < allMarkdownRemark.edges.length; i++) {
  //   items.push({
  //     title: allMarkdownRemark.edges[i].node.frontmatter.title, 
  //     excerpt: allMarkdownRemark.edges[i].node.excerpt, 
  //     alt: allMarkdownRemark.edges[i].node.frontmatter.alt, 
  //     image: getImageToArticle(allMarkdownRemark.edges[i].node.frontmatter.image, allFile.nodes),
  //     path: allMarkdownRemark.edges[i].node.frontmatter.slug
  //   });
  // }
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 m-4 md:m-10">
      {/* {
      // items.map(item => 
      //   // <Link to={item.path}>
      //   //   <ArticlePreview title={item.title} excerpt={item.excerpt} image={item.image} alt={item.alt} />
      //   // </Link>
      // )
      } */}
    </div>
  )
}

export default ContentLayout
