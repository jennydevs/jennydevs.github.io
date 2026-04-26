import React from 'react';
import youtube from '../decor/youtube_logo.png';
import bluesky from '../decor/bluesky_logo.png';
import mastodon from '../decor/mastodon_logo.png';
import github from '../decor/github_logo.png';
import itchio from '../decor/itchio_logo.png';

function ImgLogo({logo_name}) {
    const IMG_LOGO_INFO = {
        'bluesky': [bluesky, "Bluesky logo."],
        'github': [github, "Github logo."],
        'itch': [itchio, "itch.io logo."],
        'mastodon': [mastodon, "Mastodon logo."],
        'youtube': [youtube, "YouTube logo."]
    };

    return (
        <img className='logo' src={IMG_LOGO_INFO[logo_name][0]} alt={IMG_LOGO_INFO[logo_name][1]} />
    );
}

export default ImgLogo;