const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query {
            allMarkdownRemark(sort: { frontmatter: { date: DESC }} limit: 20) {
                edges {
                    node {
                        frontmatter {
                            title
                            description
                            date
                            edit_date
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild("Error while running GraphQL query...");
        return;
    }

    const devlogs = result.data.allMarkdownRemark.edges;
    const MAX_LIST_LENGTH = 4;
    const PAGES_LENGTH = Math.ceil(devlogs.length / MAX_LIST_LENGTH); // not use floor for last page with uneven devlogs
    for (let i = 0; i < PAGES_LENGTH; i++) {
        createPage({
            path: i === 0 ? `/devlogs` : `devlogs/${i + 1}`, // skip /devlogs/1
            component: path.resolve("./src/components/DevlogList.jsx"),
            context: {
                limit: MAX_LIST_LENGTH,
                skip: i * MAX_LIST_LENGTH,
                PAGES_LENGTH,
                currentPage: i + 1
            }
        });
    } 
}