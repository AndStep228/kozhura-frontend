// ContentArea.js
import React from "react";

function ContentArea({ lecture }) {
  return (
    <div className="content-area">
      <div className="video-container">
        <iframe
          src={lecture.videoUrl}
          title={lecture.name}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ContentArea;
