import React from 'react';

import youtube from '../decor/youtube_logo.png';
import bluesky from '../decor/bluesky_logo.png';
import mastodon from '../decor/mastodon_logo.png';
import github from '../decor/github_logo.png';
import itchio from '../decor/itchio_logo.png';

function ImgLogo({logo_name}) {
    const IMG_LOGOS = {
        'bluesky': bluesky,
        'github': github,
        'itch': itchio,
        'mastodon': mastodon,
        'youtube': youtube
    };

    return (
        <img className='logo' src={IMG_LOGOS[logo_name]} />
    );
}

export default ImgLogo;