import React from 'react'

export default function YtVideo(props) {
    return (
        <iframe
            width="100%"
            height="100%"
            src={props.videoLink}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    )
}
