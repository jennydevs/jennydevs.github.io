import React from "react";
import { useState} from "react";
import { graphql } from "gatsby";
import Topbar from '../components/Topbar.jsx';
import Footer from '../components/Footer.jsx';
import DevlogSummary from "./DevlogSummary";
import Pagination from "./Pagination.jsx";

function DevlogList({ data }) {
    const { allMarkdownRemark } = data;
    const frontmatter_list = allMarkdownRemark.edges;

    const [curr_page, setCurrPage] = useState(0);

    return (
        <div className='container'>
            <Topbar header_data={'Devlogs'}/>
            <div className='content'>
                <img className='img-border' alt="" />
                {
                    frontmatter_list.map((node) => 
                        <DevlogSummary key={node["node"]["frontmatter"]["slug"]} devlog_data={node["node"]["frontmatter"]}/>
                    )
                }
                <hr/>
                <Pagination curr_page={curr_page}  updatePage={setCurrPage} />
                <img className='img-border' alt="" />
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
