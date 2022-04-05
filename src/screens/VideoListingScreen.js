import { VideoCard } from "../components/VideoCard";
import { useApi } from "../contexts/ApiContext";

export const VideoListingScreen = () => {
  const { usegetAllVideos } = useApi();
  const { loading, data } = usegetAllVideos();
  return (
    <div>
      {!loading &&
        data &&
        data.videos.map((item) => {
          return <VideoCard videoId={item._id} />;
        })}
    </div>
  );
};
