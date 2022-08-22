const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { node } = require('prop-types');

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};

// Generate a Slug Each Post Data
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: 'slug', value: slug });
  }
};

// Generate Post Page Through Markdown Data
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Get All Markdown File For Paging
  const queryAllMarkdownData = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  // Handling GraphQL Query Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return;
  }

  // Import Post Template Component
  const PostTemplateComponent = path.resolve(__dirname, 'src/templates/post_template.tsx');

  const posts = queryAllMarkdownData.data.allMarkdownRemark.edges;
  // Page Generating Function
  const generatePostPage = (
    {
      node: {
        fields: { slug },
      },
    },
    index
  ) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: {
        slug: slug,
        next: index === 0 ? null : posts[index - 1].node,
        prev: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    };

    createPage(pageOptions);
  };

  // Generate Post Page And Passing Slug Props for Query
  posts.forEach(generatePostPage);
};
