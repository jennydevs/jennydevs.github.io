import React from "react";
import { Link } from "gatsby";

function setupPages(curr_page, updatePage, pages_length) {
    let pages = [];
    for (let i = 0; i < pages_length; i++) {
        pages.push(
            curr_page === i + 1 ? <li key={i} className='spacer unactive-link'>{i}</li> :
            <li key={i} ><Link className='spacer active-link' to={i === 0? "/devlogs" : `/devlogs/${i + 1}`} onClick={() => {updatePage(i)}}>{i}</Link></li>
        );
    }

    return pages;
}

function Pagination({curr_page, updatePage, pages_length}) {
    return (
        <>
            {
                <div className='pagination'>
                    <div style={{display:'flex', alignContent:'space-between'}}>
                        {
                            curr_page === 1 ? <li className='unactive-link spacer'>&lt;&lt;</li> :
                            <li className='active-link spacer'><Link to={curr_page - 1 === 1? "/devlogs" : `/devlogs/${curr_page - 1}`} onClick={() => {updatePage(Math.max(1, curr_page))}}>&lt;&lt;</Link></li>
                        }
                        { setupPages(curr_page, updatePage, pages_length) }
                        {
                            curr_page === pages_length? <li className='unactive-link spacer' >&gt;&gt;</li> :
                            <li className='active-link spacer'><Link to={curr_page === pages_length? `/devlogs/${pages_length}` : `/devlogs/${curr_page + 1}`} onClick={() => {updatePage(Math.min(1, pages_length + 1))}}>&gt;&gt;</Link></li>
                        }
                    </div>
                </div>
            }
        </>
    );
}

export default Pagination;