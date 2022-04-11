import { Link, useNavigate } from "react-router-dom";
import { EmptyState } from "../components/EmptyState";
import { VideoCardWithDelete } from "../components/VideoCardWithDelete";
import { useApi } from "../contexts/ApiContext";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";
import emptyImage from "../assets/girlsitting.svg";
import { VideoLoader } from "../components/VideoLoader";

export const WatchLaterScreen = () => {
  const navigate = useNavigate();
  const { state: globalState } = useData();
  const { usegetWatchLater, usedeleteWatchLater } = useApi();
  const { isAuthenticated } = useAuth();
  const { loading: isLoadingWatchLater, data: watchLaterData } =
    usegetWatchLater();
  const [deleteFromWatchLater, { loading: isDeletingFromWatchLater }] =
    usedeleteWatchLater();
  const showTitle = (title) => {
    if (title.length <= 40) {
      return title;
    } else {
      return `${title.slice(0, 30)}...`;
    }
  };

  if (globalState.watchLater.length === 0) {
    return (
      <div className="m-20 ">
        <EmptyState
          imageUrl={emptyImage}
          title="Watch Later is empty"
          description="Save the song you liked and see it here"
          buttonText="Explore Now"
          onButtonClick={() => navigate("/videos")}
        />
      </div>
    );
  }
  return (
    <div className="video-screen-container">
      <div className="pill-container">
        <h1 className="h3">Watch Later</h1>
      </div>
      <div className="video-listing-container">
        {!isLoadingWatchLater &&
          watchLaterData &&
          globalState.watchLater.map((item) => {
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
                  deleteFromWatchLater({}, item._id);
                }}
              />
            );
          })}
        {isLoadingWatchLater && <VideoLoader />}
      </div>
    </div>
  );
};
