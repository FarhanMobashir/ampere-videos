import { useLocation, useNavigate } from "react-router-dom";
import { VideoCard } from "../components/VideoCard";
import { useApi } from "../contexts/ApiContext";
import { useAuth } from "../contexts/AuthContext";
import { checkDb } from "../helpers/helperFuntions";
import React from "react";
import { useData } from "../contexts/DataContext";
import { PlaylistModal } from "../components/PlaylistModal";
import { BasicDialogue } from "../components/BasicDialogue";
import { VideoLoader } from "../components/VideoLoader";

export const VideoListingScreen = () => {
  const {
    usegetAllVideos,
    usegetAllCategories,
    useupdateWatchHistory,
    useupdateWatchLater,
    usedeleteWatchLater,
  } = useApi();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated } = useAuth();
  const { state: globalState, dispatch: globalDispatch } = useData();
  const { loading: isLoadingAllVideos, data: allVideosData } =
    usegetAllVideos();
  const { loading: isLoadingCategories, data: categoriesData } =
    usegetAllCategories();
  const [addToHistory, { loading: addingToHistory }] = useupdateWatchHistory();
  const [addToWatchLater, { loading: addingToWatchLater }] =
    useupdateWatchLater();
  const [deleteFromWatchLater, { loading: deletingFromWatchLater }] =
    usedeleteWatchLater();

  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [showDialogue, setShowDialogue] = React.useState(false);

  React.useEffect(() => {
    if (!isLoadingAllVideos && !isLoadingCategories) {
      if (location.state) {
        globalDispatch({
          type: "setActiveCategory",
          payload: location.state.categoryIndex,
        });
      }
    }
  }, [isLoadingAllVideos, isLoadingCategories]);

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
    } else {
      setShowDialogue(true);
    }
  };
  const createPlaylistHandler = (item) => {
    if (isAuthenticated()) {
      setSelectedVideo(item);
      setShowModal(true);
    } else {
      setShowDialogue(true);
    }
  };
  let filteredData = [];
  if (!isLoadingCategories && categoriesData) {
    filteredData = globalState.videos.filter((video) => {
      let activeCategories = [];
      globalState.activeCategories.forEach((item, idx) => {
        if (item === true) {
          activeCategories.push(globalState.categories[idx].categoryName);
        }
      });
      if (activeCategories.length === 0) {
        return video;
      }
      return activeCategories.indexOf(video.categoryName) > -1;
    });
  }

  return (
    <div className="video-screen-container">
      <div className="pill-container mb-20">
        {!isLoadingCategories &&
          categoriesData &&
          categoriesData.categories.map((item, idx) => (
            <small
              key={item._id}
              className={`pill grey pointer ${
                globalState.activeCategories[idx] === true
                  ? "pill-bordered"
                  : ""
              }`}
              onClick={() =>
                globalDispatch({
                  type: "setActiveCategory",
                  payload: idx,
                })
              }
            >
              {item.categoryName}
            </small>
          ))}
      </div>
      {showModal && (
        <PlaylistModal
          onClose={() => setShowModal(false)}
          selectedVideo={selectedVideo}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {showDialogue && (
        <BasicDialogue
          title="You Need to Sign in First"
          subtitle="You need to sign in to avail all services"
          rightActionButtonText="OK"
          rightActionButtonOnClick={() => navigate("/auth")}
          leftActionButtonText="Cancel"
          leftActionButtonOnClick={() => setShowDialogue(false)}
        />
      )}
      <div className="video-listing-container">
        {!isLoadingAllVideos &&
          allVideosData &&
          filteredData.map((item) => {
            return (
              <VideoCard
                key={item._id}
                videoId={item._id}
                title={showTitle(item.title)}
                creator={item.creator}
                onClick={() => addToHistoryHandler(item)}
                onCreatePlaylist={() => createPlaylistHandler(item)}
                onSave={() => toggleSaveToWatchLater(item)}
                isSaved={checkDb(globalState.watchLater, item._id)}
              />
            );
          })}
        {isLoadingAllVideos && <VideoLoader />}
      </div>
    </div>
  );
};
