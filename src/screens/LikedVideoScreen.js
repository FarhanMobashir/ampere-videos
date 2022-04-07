import { Link, useNavigate } from "react-router-dom";
import { EmptyState } from "../components/EmptyState";
import { VideoCardWithDelete } from "../components/VideoCardWithDelete";
import { useApi } from "../contexts/ApiContext";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";
import emptyImage from "../assets/shoppingcart.png";

export const LikedVideoScreen = () => {
  const navigate = useNavigate();
  const { state: globalState } = useData();
  const { usegetLikes, usedeleteLikes } = useApi();
  const { isAuthenticated } = useAuth();
  const [deleteLikedVideos, { loading: isDeletingFromLikedVideos }] =
    usedeleteLikes();
  const { loading: isLoadingLikedVideos, data: likedVideosData } =
    usegetLikes();

  const showTitle = (title) => {
    if (title.length <= 40) {
      return title;
    } else {
      return `${title.slice(0, 30)}...`;
    }
  };

  console.log("state", globalState);

  if (globalState.likedVideos.length === 0) {
    return (
      <div className="m-20 ">
        <EmptyState
          imageUrl={emptyImage}
          title="No Liked Videos Here"
          description="Like the videos which you love to see them here"
          buttonText="Explore Now"
          onButtonClick={() => navigate("/videos")}
        />
      </div>
    );
  }
  return (
    <div className="video-screen-container">
      <div className="pill-container">
        <h1 className="h3">Liked Videos</h1>
      </div>
      <div className="video-listing-container">
        {!isLoadingLikedVideos &&
          likedVideosData &&
          globalState.likedVideos.map((item) => {
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
                  deleteLikedVideos({}, item._id);
                }}
              />
            );
          })}
      </div>
    </div>
  );
};
