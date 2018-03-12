const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === "MarkdownRemark") {
    // Generate an URL slug for markdown files
    // ie. if the file is /pages/another-thing.md, the slug
    // becomes 'another-thing'. The slug is then added as
    // an extra field to the node.
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  // Fetch all markdown files (now converted to HTML)
  // and build a page for each of them using the post.js template.
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
