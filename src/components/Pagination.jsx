import React from "react";
import { useEffect } from "react";
import { Link } from "gatsby";

// function setupPages(page_groups, curr_page, updatePage) {
//     let pages = [];
    
//     for (let i = 0; i < page_groups.length; i++) {
//         pages.push(
//             curr_page === i ? <li key={i} className='spacer unactive-link'>{i}</li> :
//             <li key={i} ><Link className='spacer active-link' onClick={() => {updatePage(i)}}>{i}</Link></li>
//         );
//     }

//     return pages;
// }


function Pagination({groups, curr_page, updatePage, updateList}) {
    // useEffect(() => {
    //     updateList(groups[curr_page]);
    // }, [curr_page]);

    return (
        <>
            {/* {
                <div className='pagination'>
                    <div style={{display:'flex', alignContent:'space-between'}}>
                        {
                            curr_page === 0 ? <li className='unactive-link spacer' >&lt;&lt;</li> :
                            <li className='active-link spacer' onClick={() => {updatePage(Math.max(0, curr_page - 1))}}>&lt;&lt;</li>
                        }
                        {   setupPages(groups, curr_page, updatePage)   }
                        {
                            curr_page === groups.length - 1 ? <li className='unactive-link spacer' >&gt;&gt;</li> :
                            <li className='active-link spacer' onClick={() => {updatePage(Math.min(curr_page + 1, groups.length - 1))}}>&gt;&gt;</li>
                        }
                    </div>
                </div>
            } */}
        </>
    );
}

export default Pagination;