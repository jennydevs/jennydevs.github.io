import React from 'react';
import { useState, useEffect } from 'react';
import Topbar from '../components/Topbar.jsx';
import Footer from '../components/Footer.jsx';
import LogSummary from '../components/LogSummary.jsx';


function divideContent(logs_list) {
    const MAX_LENGTH = 4;
    var pages = Math.floor(logs_list.length / MAX_LENGTH);

    var counter = 0;
    var groups = [];
    var collection = [];
    for (let i = 0; i < pages; i++) {
        for (let j = 0; j < MAX_LENGTH; j++) {
            collection.push(logs_list[counter]);
            counter += 1;
        }
        groups.push(collection);
        collection = [];
    }

    if (counter < logs_list.length) {
        for (let i = counter; i < logs_list.length; i++) {
            collection.push(logs_list[i]);
        }
        groups.push(collection);
        collection = [];
    }

    return groups;
}


function setupPages(page_groups, curr_page, updatePage) {
    let pages = [];
    
    for (let i = 0; i < page_groups.length; i++) {
        pages.push(
            curr_page == i ? <li key={i} className='spacer unactive-link'>{i}</li> :
            <li key={i} className='spacer active-link' onClick={() => {updatePage(i)}}>{i}</li>
        );
    }

    return pages;
}


function DevlogsList({list}){
    return (
        <>{list.map((log) => <LogSummary key={log} log_id={log}/>)}</>
    );
}


function Pages({groups, curr_page, updatePage, updateList}) {
    useEffect(() => {
        updateList(groups[curr_page]);
    }, [curr_page]);

    return (
        <>
            {
                <div className='pagination'>
                    <div style={{display:'flex', alignContent:'space-between'}}>
                        {
                            curr_page == 0 ? <li className='unactive-link spacer' >&lt;&lt;</li> :
                            <li className='active-link spacer' onClick={() => {updatePage(Math.max(0, curr_page - 1))}}>&lt;&lt;</li>
                        }
                        {   setupPages(groups, curr_page, updatePage)   }
                        {
                            curr_page == groups.length - 1 ? <li className='unactive-link spacer' >&gt;&gt;</li> :
                            <li className='active-link spacer' onClick={() => {updatePage(Math.min(curr_page + 1, groups.length - 1))}}>&gt;&gt;</li>
                        }
                    </div>
                </div>
            }
        </>
    );
}


function Devlogs() {
    const DIR_PATH = "/data/devlogs/directory.txt";
    const [curr_page, setCurrPage] = useState(0);
    const [curr_list, setCurrList] = useState([]);
    const [log_list_groups, setLogList] = useState([]);
    
    useEffect(() => {
        async function getLogDirectory() {
            await fetch(DIR_PATH)
            .then((response)=> {
                return response.text();
            })
            .then((id_list) => {
                divideContent(id_list.split("\n"))
                setLogList(divideContent(id_list.split("\n")));
            })
            .catch((error) => {
                console.error(error);
            });
        }

        getLogDirectory();
    }, []);

    useEffect(() => {
        // scroll(0,0);
    }, [curr_page]);
    
    return (
        <div className='container'>
            <Topbar header_data={'Devlogs'}/>
            <div className='content'>
                <img className='img-border'/>
                {
                    log_list_groups.length == 0 ? <div>Loading...</div> :
                        <>
                            <DevlogsList list={curr_list} />
                            <hr />
                            <Pages
                                groups={log_list_groups} 
                                curr_page={curr_page} 
                                updatePage={setCurrPage} 
                                updateList={setCurrList} 
                            />
                        </>  
                }
                <img className='img-border'/>
            </div>
            <Footer />
        </div>
      );
}

export default Devlogs;