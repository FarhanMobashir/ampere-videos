import { useNavigate } from "react-router-dom";
import { VideoCard } from "../components/VideoCard";
import { useApi } from "../contexts/ApiContext";
import { useAuth } from "../contexts/AuthContext";
import { checkDb } from "../helpers/helperFuntions";
import React from "react";
import { useData } from "../contexts/DataContext";

export const VideoListingScreen = () => {
  const {
    usegetAllVideos,
    useupdateWatchHistory,
    useupdateWatchLater,
    usedeleteWatchLater,
  } = useApi();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { state: globalState } = useData();
  const { loading, data } = usegetAllVideos();
  const [addToHistory, { loading: addingToHistory }] = useupdateWatchHistory();
  const [addToWatchLater, { loading: addingToWatchLater }] =
    useupdateWatchLater();
  const [deleteFromWatchLater, { loading: deletingFromWatchLater }] =
    usedeleteWatchLater();

  const [selectedProduct, setSelectedProduct] = React.useState(null);

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

  const toggleSaveToWatchLater = (video) => {
    if (isAuthenticated()) {
      if (checkDb(globalState.watchLater, video._id)) {
        // remove from watch later
        deleteFromWatchLater({}, video._id);
      } else {
        // add to watch later
        addToWatchLater(video);
      }
      //   if (!isAddingToCart) {
      //     setSelectedProduct(product._id);
      //   } else if (cartData) {
      //     setSelectedProduct(null);
      //   }
    } else {
      navigate("/auth");
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
                onCreatePlaylist={() => console.log("on create playlist")}
                onSave={() => toggleSaveToWatchLater(item)}
                isSaved={true}
              />
            );
          })}
      </div>
    </div>
  );
};
