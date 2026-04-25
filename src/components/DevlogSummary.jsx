import React from 'react';
import { Link } from 'gatsby';

function DevlogSummary({ devlog_data }) {
    const devlog = devlog_data;
    return (
        <div className="log-summary">
            <Link to={`/devlogs/log${devlog.slug}`}><h2>{devlog.title}</h2></Link>
            <p><em>Created:</em> {devlog.date} - <em>Updated</em> {devlog.edit_date}</p>
            <p>{devlog.description}</p>
        </div>
    );
}

export default DevlogSummary;


