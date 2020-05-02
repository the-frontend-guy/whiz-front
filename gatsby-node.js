// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

// 
const path = require(`path`)
exports.createPages = async({graphql, actions}) => {
  const { createPage } = actions
  const serviceTemplate = path.resolve(`src/templates/service-detail-page.js`)
  const innerTemplate = path.resolve(`src/templates/service-child-detail-page.js`)

  const result = await graphql(`
  query AllactivePages {
    allStrapiPage(filter: {active: {eq: true}}) {
      nodes {
        name
        slug
        strapiId
        order
        strapiParent {
          id
          name
          slug
          order
        }
        strapiChildren {
          name
          order
          id
          slug
        }
      }
    }
  }
  `)
  

  const allPages = result.data.allStrapiPage.nodes.filter(page => page.strapiParent || page.strapiChildren.length);

 
  allPages.forEach(node => {
    createPage({
      path: node.slug,
      component: node.strapiChildren.length ? serviceTemplate : innerTemplate,
      context: {
        pageId: node.strapiId,
        parentId: node.strapiParent ? node.strapiParent.id : null
      }
    })
  })
}

