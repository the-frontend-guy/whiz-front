

const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const serviceTemplate = path.resolve(`src/templates/service-detail-page.js`)
  const innerTemplate = path.resolve(
    `src/templates/service-child-detail-page.js`
  )

  const result = await graphql(`
    query AllactivePages {
      allStrapiPage(filter: { active: { eq: true } }) {
        nodes {
          name
          slug
          strapiId
          order
          title
          strapiParent {
            id
            name
            slug
            order
            title
          }
          strapiChildren {
            name
            order
            id
            slug
            title
          }
          service_child_detail {
            id
          }
          service_detail {
            id
          }
        }
      }
    }
  `)

  const allPages = result.data.allStrapiPage.nodes.filter(
    page => page.strapiParent || page.strapiChildren.length
  )

  allPages.forEach(node => {
    if (node.slug !== "services") {
      createPage({
        path: node.slug,
        component: node.strapiChildren.length ? serviceTemplate : innerTemplate,
        context: {
          pageId: node.strapiId,
          pageInfo: node,
          serviceChild: node.service_child_detail
            ? node.service_child_detail.id
            : null,
          serviceDetail: node.service_detail ? node.service_detail.id : null,
          parentId: node.strapiParent ? node.strapiParent.id : null,
        },
      })
    }
  })
}


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/app` page.
  if (page.path.match(/^\/blog/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/blog/*"
    // Update the page.
    createPage(page)
  }
}