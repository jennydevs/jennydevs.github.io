import { useState, useEffect } from 'react';

import Topbar from '../components/Topbar.jsx';
import LogSummary from '../components/LogSummary.jsx';
import Footer from '../components/Footer.jsx';


function Devlogs() {
    const [logList, setLogList] = useState([]);
    
    useEffect(() => {
        async function getLogDirectory() {
            await fetch("/text_files/directory.txt")
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
                <img src="/images/border.png" width="100%" height="100%" className='img-border'/>
                {
                    logList.length == 0 ? <p>Loading...</p> : 
                    <> {logList.map((log) => <LogSummary key={log} log_id={log}/>)} </>
                }
                <img src="/images/border.png" width="100%" height="100%" className='img-border'/>
            </div>
            <Footer />
        </div>
      );
}

export default Devlogs;