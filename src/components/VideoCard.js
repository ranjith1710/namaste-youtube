import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);

  const { snippet, statistics } = info;
  const { channelId, title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;

  const views = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short"
  }).format(viewCount);

  return (
    <div className="m-2 w-64 rounded-lg">
      <img className=" rounded-lg" src={thumbnails.medium.url} alt="img" />
      <div className="p-2">
        <h1 className="w-full text-sm font-bold whitespace-nowrap text-ellipsis overflow-hidden">
          {title}
        </h1>
        <p className="text-gray-500 text-sm">{channelTitle}</p>
        <p className="text-gray-500 text-xs">{views} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
