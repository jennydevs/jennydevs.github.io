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


function Devlogs() {
    const DIR_PATH = "/data/devlogs/directory.txt";
    const [logList, setLogList] = useState([]);
    
    useEffect(() => {
        async function getLogDirectory() {
            await fetch(DIR_PATH)
            .then((response)=> {
                return response.text();
            })
            .then((id_list) => {
                setLogList(id_list.split("\n"));
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
                    logList.length == 0 ? <p>Loading...</p> : 
                    <> {logList.map((log) => <LogSummary key={log} log_id={log}/>)} </>
                }
                <img className='img-border'/>
            </div>
            <Footer />
        </div>
      );
}

export default Devlogs;