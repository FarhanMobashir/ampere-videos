import { useLocation, useParams } from "react-router-dom";
import { HorizontalVideoCard } from "../components/HorizontalVideoCard";
import { Youtube } from "../components/Youtube";
import React from "react";
import { useData } from "../contexts/DataContext";
import { useApi } from "../contexts/ApiContext";
export const VideoPlayerScreen = () => {
  const { videoid } = useParams();
  const { state } = useLocation();
  const { state: globalState } = useData();
  const { usegetAllVideos } = useApi();
  const { loading, data } = usegetAllVideos();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const similarVideo = globalState.videos.filter(
    (item) =>
      item.categoryName === state.video.categoryName &&
      item.title !== state.video.title
  );

  return (
    <div className="video-player-screen-container">
      <Youtube
        videoId={videoid}
        title={state.video.title}
        creator={state.video.creator}
        description={state.video.description}
      />
      <div className="similar-video-container">
        <h1 className="h3 mb-10">Similar Videos</h1>
        {similarVideo.map((item) => (
          <HorizontalVideoCard
            key={item._id}
            title={item.title}
            creator={item.creator}
            description={item.description}
            videoId={item._id}
          />
        ))}
      </div>
    </div>
  );
};
