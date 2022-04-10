import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HorizontalVideoCard } from "../components/HorizontalVideoCard";
import { Youtube } from "../components/Youtube";
import React from "react";
import { useData } from "../contexts/DataContext";
import { useApi } from "../contexts/ApiContext";
import { useAuth } from "../contexts/AuthContext";
import { checkDb } from "../helpers/helperFuntions";
import { PlaylistModal } from "../components/PlaylistModal";
import { BasicDialogue } from "../components/BasicDialogue";
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
    useupdateWatchLater,
    usedeleteWatchLater,
  } = useApi();
  const [addToLikedVideos, { loading: addingToLikedVideos }] = useupdateLikes();
  const [removeFromLikedVideos, { loading: removeingFromLikedVideos }] =
    usedeleteLikes();
  const { loading: videoIsLoading } = usegetAllVideos();
  const [addToHistory, { loading: addingToHistory }] = useupdateWatchHistory();
  const [addToWatchLater, { loading: addingToWatchLater }] =
    useupdateWatchLater();
  const [deleteFromWatchLater, { loading: deletingFromWatchLater }] =
    usedeleteWatchLater();

  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [showDialogue, setShowDialogue] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const similarVideo = globalState?.videos.filter(
    (item) =>
      item.categoryName === state?.video.categoryName &&
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
      setShowDialogue(true);
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

  const createPlaylistHandler = () => {
    if (isAuthenticated()) {
      setSelectedVideo(state.video);
      setShowModal(true);
    } else {
      setShowDialogue(true);
    }
  };

  if (globalState.videos.find((item) => item._id === videoid) === undefined) {
    return <h1>Page not found</h1>;
  } else {
    return (
      <div className="video-player-screen-container">
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
            subtitle="Do you want to sign in or keep watching ?"
            rightActionButtonText="OK"
            rightActionButtonOnClick={() => navigate("/auth")}
            leftActionButtonText="Cancel"
            leftActionButtonOnClick={() => setShowDialogue(false)}
          />
        )}
        <Youtube
          videoId={videoid}
          title={state.video.title}
          creator={state.video.creator}
          description={state.video.description}
          onLike={() => toggleLikeVideo(state.video)}
          onSave={() => toggleSaveToWatchLater(state.video)}
          onCreatePlaylist={() => createPlaylistHandler()}
          isLiked={checkDb(globalState.likedVideos, state.video._id)}
          isSaved={checkDb(globalState.watchLater, state.video._id)}
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
              onSave={() => toggleSaveToWatchLater(item)}
              isSaved={checkDb(globalState.watchLater, item._id)}
              onCreatePlaylist={() => createPlaylistHandler(state.video)}
            />
          ))}
        </div>
      </div>
    );
  }
};
