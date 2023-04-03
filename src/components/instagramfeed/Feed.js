import React from 'react'

const Feed = (props) => {
    const { id, caption, media_type, media_url} = props.feed
    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    width='250'
                    height='250' 
                    src={media_url} 
                    type="video/mp4" 
                    controls playsInline>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <img 
                    width='250'
                    height='width*auto'
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                />
            );
            break;
        default:
            post = (
                <img 
                    width='200'
                    height='auto'
                    id={id} 
                    src={media_url} 
                    alt={caption} 
                />
            );
    }       

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;