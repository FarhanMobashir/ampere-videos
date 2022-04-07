import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HorizontalVideoCard } from "../components/HorizontalVideoCard";
import { Youtube } from "../components/Youtube";
import React from "react";
import { useData } from "../contexts/DataContext";
import { useApi } from "../contexts/ApiContext";
import { useAuth } from "../contexts/AuthContext";
import { checkDb } from "../helpers/helperFuntions";
export const VideoPlayerScreen = () => {
  const { videoid } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { state: globalState } = useData();
  const { isAuthenticated } = useAuth();
  const {
    useupdateLikes,
    usedeleteLikes,
    usegetAllVideos,
    useupdateWatchHistory,
  } = useApi();
  const [addToLikedVideos, { loading: addingToLikedVideos }] = useupdateLikes();
  const [removeFromLikedVideos, { loading: removeingFromLikedVideos }] =
    usedeleteLikes();
  const { loading: videoIsLoading } = usegetAllVideos();
  const [addToHistory, { loading: addingToHistory }] = useupdateWatchHistory();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const similarVideo = globalState.videos.filter(
    (item) =>
      item.categoryName === state.video.categoryName &&
      item.title !== state.video.title
  );

  const toggleLikeVideo = (video) => {
    if (isAuthenticated()) {
      if (checkDb(globalState.likedVideos, video._id)) {
        // remove from liked video
        removeFromLikedVideos({}, video._id);
      } else {
        // add to liked video
        addToLikedVideos(video);
      }
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className="video-player-screen-container">
      <Youtube
        videoId={videoid}
        title={state.video.title}
        creator={state.video.creator}
        description={state.video.description}
        onLike={() => toggleLikeVideo(state.video)}
        onSave={() => console.log("saved")}
        onCreatePlaylist={() => console.log("create playlist modal")}
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
            onClick={() => {
              addToHistory(item);
              navigate(`/videos/${item._id}`, {
                state: {
                  video: item,
                },
              });
              window.scrollTo(0, 0);
            }}
          />
        ))}
      </div>
    </div>
  );
};
