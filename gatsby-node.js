/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
exports.createPages = async({graphql, actions}) => {
  const { createPage } = actions
  const homeTemplate = path.resolve(`src/templates/home-page.js`)
  const serviceTemplate = path.resolve(`src/templates/service-detail-page.js`)
  const result = await graphql(`
  query AllactivePages {
    allStrapiPage(filter: {active: {eq: true}}) {
      nodes {
        name
        slug
      }
    }
  }
  `
  )
result.data.allStrapiPage.nodes.forEach(node => {
  createPage({
    path: `/${node.slug === 'home' ? '' : node.slug}`,
    component: node.slug === 'home' ?  homeTemplate : serviceTemplate
  })
})
}