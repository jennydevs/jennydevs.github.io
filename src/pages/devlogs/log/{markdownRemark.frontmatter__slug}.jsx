import React from 'react';
import { graphql, Link } from 'gatsby';
import Topbar from '../../../components/Topbar.jsx';
import Footer from '../../../components/Footer.jsx';

export default function DevlogTemplate({ data }) { // this prop will be injected by the GraphQL query below.
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
      <div className='container'>
        <Topbar header_data={'Devlog'} />
        <div className='content'>
          <img className='img-border' alt='' />
          <div className='log'>
            <article>
              <h1 className='outlined-header'>{frontmatter.title}</h1>
              <p>{frontmatter.date} - (Updated {frontmatter.edit_date})</p>
              <hr />
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
          </div>
          <div style={{textAlign:'center', paddingBottom:'20px'}}>
            <Link to={'/devlogs'}>To devlogs</Link>
          </div>
          <img className='img-border' alt='' />
        </div>
        <Footer />
      </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        edit_date(formatString: "MMMM DD, YYYY" )
        slug
        title
        description
        tags
      }
    }
  }
`;