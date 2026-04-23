import React from 'react';

function ImgLogo({logo_name}) {
    const IMAGE_PATH = "./data/decor/";
    const IMG_LOGOS = {
        "bluesky": "bluesky_logo.jpg",
        "github": "github_logo.jpg",
        "itch": "itch_logo.jpg",
        "mastodon": "mastodon_logo.jpg",
        "youtube": "youtube_logo.jpg"
    };

    return (
        <img className='logo' src={`${IMAGE_PATH}${IMG_LOGOS[logo_name]}`} />
    );
}

export default ImgLogo;