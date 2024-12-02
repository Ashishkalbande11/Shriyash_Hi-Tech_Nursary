import React from "react";
import ReactPlayer from "react-player";
import Video from "../content/shriyash2.mp4";
import img7 from "../images/img7.jpg";

const VideoPlayer = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-7 p-6 bg-[#9ed1a6] rounded-lg shadow-md gap-5">
      {/* Video Section */}
      <div className="video-container flex-[50%] rounded-lg overflow-hidden bg-white h-[600px]">
        <ReactPlayer
          url={Video}
          playing={false} // Autoplay off
          controls={true} // Show player controls
          width="100%"
          height="100%"
        />
      </div>

      {/* Image Section */}
      <div className="flex-[50%] h-[600px] rounded-lg overflow-hidden bg-slate-500 shadow-lg">
        <img
          src={img7}
          alt="Thumbnail"
          className="w-fit h-fit object-cover mt-6"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
