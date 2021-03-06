import { Link, useNavigate } from "react-router-dom";
import { EmptyState } from "../components/EmptyState";
import { VideoCardWithDelete } from "../components/VideoCardWithDelete";
import { useApi } from "../contexts/ApiContext";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";
import emptyImage from "../assets/emptyImage.svg";
import { VideoLoader } from "../components/VideoLoader";

export const WatchHistoryScreen = () => {
  const navigate = useNavigate();
  const { state: globalState } = useData();
  const {
    usegetWatchHistory,
    usedeleteWatchHistory,
    usedeleteAllWatchHistory,
  } = useApi();
  const { isAuthenticated } = useAuth();
  const { loading: isLoadingWatchHistory, data: watchHistoryData } =
    usegetWatchHistory();
  const [deleteFromHistory, { loading: isDeletingFromHistory }] =
    usedeleteWatchHistory();
  const [clearWatchHistory, { loading: isClearingHistory }] =
    usedeleteAllWatchHistory();
  const showTitle = (title) => {
    if (title.length <= 40) {
      return title;
    } else {
      return `${title.slice(0, 30)}...`;
    }
  };

  if (globalState.watchHistory.length === 0) {
    return (
      <div className="m-20 ">
        <EmptyState
          imageUrl={emptyImage}
          title="Watch history is empty"
          description="Try Exploring our handpicked song just for you"
          buttonText="Explore Now"
          onButtonClick={() => navigate("/videos")}
        />
      </div>
    );
  }
  return (
    <div className="video-screen-container">
      <div className="pill-container">
        <h1 className="h3">Watch History</h1>
        <small
          className="pill grey pill-bordered pointer"
          onClick={() => clearWatchHistory()}
        >
          Clear All
        </small>
      </div>
      <div className="video-listing-container">
        {!isLoadingWatchHistory &&
          watchHistoryData &&
          globalState.watchHistory.map((item) => {
            return (
              <VideoCardWithDelete
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
        {isLoadingWatchHistory && <VideoLoader />}
      </div>
    </div>
  );
};
