import * as React from 'react';
import { Link } from 'gatsby';
import { useState, useEffect } from 'react';
import Topbar from '../components/Topbar.jsx';
import Footer from '../components/Footer.jsx';


function parseLogText(text_data) {
    const line_length = 4;
    const indexes = [];

    var curr_index = 0;
    for (let i = 0; i < line_length; i++) {
        curr_index = text_data.indexOf("\n", curr_index + 1);
        indexes.push(curr_index);
    }

    return {
        edit_date: text_data.substring(0, indexes[0]),
        creation_date: text_data.substring(indexes[0] + 1, indexes[1]),
        title: text_data.substring(indexes[1] + 1, indexes[2]),
        body: text_data.substring(indexes[3] + 1 ),
    };
}


function LogImg({img_data, log_path}) {
    const IMG_PATH = `${log_path}/images/`;
    return (
        <img loading='lazy' src={`${IMG_PATH}${img_data.src}`} alt={img_data.alt} style={{width: '100%'}}/>
    );
}


function Log(){
    const LOG_PATH = "/data/devlogs/";
    const { log_id } = useParams();
    const [log, setLog] = useState({});

    useEffect(() => {
        async function getLogList() {
            await fetch(`${LOG_PATH}${log_id}/${log_id}.txt`)
            .then((response)=> {
                return response.text();
            })
            .then((text_data) => {
                const info = parseLogText(text_data);
                setLog(info);
            })
            .catch((error) => {
                console.error(error);
            });
        }

        getLogList();
    }, [log_id]);

    return(
        <>
            {
                !log ? 
                    <p>Loading...</p> :
                    <div className="container">
                        <Topbar header_data={'Devlog'}/>
                        <div className="content">
                            <img className='img-border'/>
                            <div className="log">
                                <article>
                                    <h1>{log.title}</h1>
                                    <hr/>
                                    <em>Edited:</em> {log.edit_date} - <em>Created:</em> {log.creation_date}
                                    <Markdown 
                                        components={{
                                            img(props) {
                                                const {src, alt} = props;

                                                return (
                                                    <LogImg img_data={{src, alt}} log_path={`${LOG_PATH}${log_id}`}/>
                                                );
                                            }
                                        }}
                                    >{log.body}</Markdown>
                                </article>
                                <div style={{textAlign:'center', paddingBottom:'20px'}}>
                                    <Link to={"/devlogs"}>To devlogs</Link>
                                </div>
                            </div>
                            <img className='img-border'/>
                        </div>
                        <Footer />
                    </div>
            }
        </>
    );
}


export default Log;
