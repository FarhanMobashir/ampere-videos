import { Link, useNavigate, useParams } from "react-router-dom";
import { EmptyState } from "../components/EmptyState";
import { VideoCardWithDelete } from "../components/VideoCardWithDelete";
import { useApi } from "../contexts/ApiContext";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";
import emptyImage from "../assets/emptyImage.svg";
import { VideoLoader } from "../components/VideoLoader";

export const SinglePlaylistScreen = () => {
  const navigate = useNavigate();
  const { playlistid } = useParams();
  const { state: globalState } = useData();
  const { usegetSinglePlaylist, usedeleteFromSinglePlaylist } = useApi();
  const { isAuthenticated } = useAuth();
  const {
    loading: isLoadingSinglePlaylist,
    data: singlePlaylistData,
    error: singlePlaylistError,
  } = usegetSinglePlaylist(playlistid);

  const [deleteFromPlaylist, { loading: isDeletingFromPlaylist }] =
    usedeleteFromSinglePlaylist();

  const showTitle = (title) => {
    if (title.length <= 40) {
      return title;
    } else {
      return `${title.slice(0, 30)}...`;
    }
  };
  if (!isLoadingSinglePlaylist) {
    console.log("gfhjk", globalState.singlePlaylist);
  }

  return (
    <div className="video-screen-container">
      <h1 className="h3">
        {!isLoadingSinglePlaylist && globalState.singlePlaylist?.title}
      </h1>
      {globalState.singlePlaylist.videos &&
        globalState.singlePlaylist.videos.length === 0 && (
          <div className="m-20 ">
            <EmptyState
              imageUrl={emptyImage}
              title="This Playlist is empty"
              description="Add to the playlist while watching"
              buttonText="Add Now"
              onButtonClick={() => navigate("/videos")}
            />
          </div>
        )}
      <div className="video-listing-container">
        {!isLoadingSinglePlaylist &&
          globalState.singlePlaylist?.videos &&
          globalState.singlePlaylist.videos.map((item) => {
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
                  console.log("delete");
                  deleteFromPlaylist(
                    {},
                    `${globalState.singlePlaylist._id}/${item._id}`
                  );
                }}
              />
            );
          })}
        {isLoadingSinglePlaylist && <VideoLoader />}
      </div>
    </div>
  );
};
