import { Link, useNavigate } from "react-router-dom";
import { VideoCard } from "../components/VideoCard";
import { VideoCardForHistory } from "../components/VideoCardForHistory";
import { useApi } from "../contexts/ApiContext";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";

export const WatchHistoryScreen = () => {
  const navigate = useNavigate();
  const { state: globalState } = useData();
  const { usegetWatchHistory, usedeleteWatchHistory } = useApi();
  const { isAuthenticated } = useAuth();
  const { loading, data } = usegetWatchHistory();
  const [deleteFromHistory, { loading: isDeletingFromHistory }] =
    usedeleteWatchHistory();
  const showTitle = (title) => {
    if (title.length <= 40) {
      return title;
    } else {
      return `${title.slice(0, 30)}...`;
    }
  };

  //   const removeFromHistoryHandler = (item) => {
  //     if (isAuthenticated()) {
  //       addToHistory({ item });
  //     } else {
  //       return;
  //     }
  //   };
  return (
    <div className="video-screen-container">
      <div className="pill-container">
        <h1 className="h3">Watch History</h1>
        <small className="pill grey pill-bordered">Clear All</small>
      </div>
      <div className="video-listing-container">
        {!loading &&
          data &&
          globalState.watchHistory.map((item) => {
            return (
              <VideoCardForHistory
                key={item._id}
                onClick={() =>
                  navigate(`/videos/${item._id}`, {
                    state: {
                      video: item,
                    },
                  })
                }
                videoId={item._id}
                title={showTitle(item.title)}
                creator={item.creator}
                onDelete={() => {
                  console.log("Helo");
                  deleteFromHistory({}, item._id);
                }}
              />
            );
          })}
      </div>
    </div>
  );
};
