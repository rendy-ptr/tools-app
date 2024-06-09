import React from "react";

const Video = ({ link }) => {
  const embedLink = `https://www.tiktok.com/embed/v2/${link.split("/").pop()}`;

  return (
    <div>
      <iframe
        src={embedLink}
        width="340"
        height="580"
        frameBorder="0"
        allowFullScreen
        title="TikTok Video"
        className="mx-auto"
      ></iframe>
    </div>
  );
};

export default Video;
