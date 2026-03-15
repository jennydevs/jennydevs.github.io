import { useState, useEffect } from 'react';

import Topbar from '../components/Topbar.jsx';
import LogSummary from '../components/LogSummary.jsx';
import Footer from '../components/Footer.jsx';


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


function setupPages(page_groups, curr_page, updatePage, updateList) {
    let pages = [];
    
    for (let i = 0; i < page_groups.length; i++) {
        pages.push(
            curr_page == i ? <li className='spacer unactive-link'><div>{i}</div></li> :
            <li className='spacer active-link' onClick={() => {updatePage(i)}}><div>{i}</div></li>
        );
    }

    updateList(page_groups[curr_page]);

    return pages;
}


function DevlogsList({list}){
    return (
        <>{list.map((log) => <LogSummary key={log} log_id={log}/>)}</>
    );
}


function Pages({groups, curr_page, updatePage, updateList}) {
    return (
        <>
            {
                <div style={{listStyle:'none', display:"flex", justifyContent:'space-evenly', flexGrow:'1', color:'rgb(241, 118, 11)'}}>
                    <div style={{display:"flex", alignContent:'space-between'}}>
                        {
                            curr_page == 0 ? <li className='unactive-link spacer' ><div>&lt;&lt;</div></li> :
                            <li className='active-link spacer' onClick={() => {updatePage(Math.min(0, curr_page - 1))}}><div>&lt;&lt;</div></li>
                        }
                        {   setupPages(groups, curr_page, updatePage, updateList)    }
                        {
                            curr_page == groups.length - 1 ? <li className='unactive-link spacer' ><div>&gt;&gt;</div></li> :
                            <li className='active-link spacer' onClick={() => {updatePage(Math.max(curr_page + 1, groups.length - 1))}}><div>&gt;&gt;</div></li>
                        }
                    </div>
                </div>
            }
        </>
    );
}


function Devlogs() {
    const DIR_PATH = "/data/devlogs/directory.txt";
    const [log_list_groups, setLogList] = useState([]);
    const [curr_list, setCurrList] = useState([]);
    const [curr_page, setCurrPage] = useState(0);
    
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
    
    return (
        <div className="container">
            <Topbar header_data={'Devlogs'}/>
            <div className="content">
                <img className='img-border'/>
                {
                    log_list_groups.length == 0 ? <div>Loading...</div> :
                        <>
                            <DevlogsList list={curr_list} />
                            <Pages
                                groups={log_list_groups} 
                                curr_page={curr_page} 
                                updatePage={setCurrPage} 
                                updateList={setCurrList} 
                            />
                        </>
                        
                }


                {/* 
                {
                    logList.length == 0 ? <p>Loading...</p> : 
                    <> {logList.map((log) => <LogSummary key={log} log_id={log}/>)} </>
                } */}

                <img className='img-border'/>
            </div>
            <Footer />
        </div>
      );
}

export default Devlogs;