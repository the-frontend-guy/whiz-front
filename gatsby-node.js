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
  const result = await graphql(`
      {
        allStrapiPages(filter: {Active: {eq: true}}) {
          nodes {
            Name
            Slug
          }
        }
      }
  `)
  console.log(result.data.allStrapiPages.nodes);
result.data.allStrapiPages.nodes.forEach(node => {
  createPage({
    path: `/${node.Slug === 'home' ? '' : node.Slug}`,
    component: homeTemplate
  })
})
}