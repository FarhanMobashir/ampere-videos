import { useNavigate } from "react-router-dom";
import { VideoCard } from "../components/VideoCard";
import { useApi } from "../contexts/ApiContext";
import { useAuth } from "../contexts/AuthContext";

export const VideoListingScreen = () => {
  const { usegetAllVideos, useupdateWatchHistory } = useApi();
  const { isAuthenticated } = useAuth();
  const { loading, data } = usegetAllVideos();
  const navigate = useNavigate();
  const [addToHistory, { loading: addingToHistory }] = useupdateWatchHistory();
  const showTitle = (title) => {
    if (title.length <= 40) {
      return title;
    } else {
      return `${title.slice(0, 30)}...`;
    }
  };

  const addToHistoryHandler = (item) => {
    if (isAuthenticated()) {
      addToHistory(item);
      navigate(`/videos/${item._id}`, {
        state: {
          video: item,
        },
      });
    } else {
      navigate(`/videos/${item._id}`, {
        state: {
          video: item,
        },
      });
    }
  };

  return (
    <div className="video-screen-container">
      <div className="pill-container">
        <small className="pill grey pill-bordered">party</small>
      </div>
      <div className="video-listing-container">
        {!loading &&
          data &&
          data.videos.map((item) => {
            return (
              <VideoCard
                key={item._id}
                videoId={item._id}
                title={showTitle(item.title)}
                creator={item.creator}
                onClick={() => addToHistoryHandler(item)}
              />
            );
          })}
      </div>
    </div>
  );
};
