import React from 'react';
import { useState } from 'react';
import { graphql } from 'gatsby';
import Topbar from './Topbar.jsx';
import Footer from './Footer.jsx';
import DevlogSummary from './DevlogSummary.jsx';
import Pagination from './Pagination.jsx';

function DevlogList({ data, pageContext: { PAGES_LENGTH, currentPage }}) {
    const frontmatter_list = data.allMarkdownRemark.edges;
    const [curr_page, setCurrPage] = useState(currentPage);

    return (
        <div className='container'>
            <Topbar header_data={'Devlogs'}/>
            <div className='content'>
                <img className='img-border' alt='' />
                {
                    frontmatter_list.map((node) => 
                        <DevlogSummary key={node.node.frontmatter.slug} devlog_data={node.node.frontmatter}/>
                    )
                }
                <hr/>
                <Pagination curr_page={curr_page}  updatePage={setCurrPage} pages_length={PAGES_LENGTH} />
                <img className='img-border' alt='' />
            </div>
            <Footer />
        </div>
    );
}

export default DevlogList;


export const LogListQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}} limit: $limit skip: $skip) {
            edges{
                node {
                    frontmatter {
                        slug
                        title
                        description
                        date(formatString: "MMMM DD, YYYY")
                        edit_date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`;
