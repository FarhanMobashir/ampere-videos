import { useNavigate } from "react-router-dom";
import { useApi } from "../contexts/ApiContext";
import { useData } from "../contexts/DataContext";
import emptyImage from "../assets/emptyImage.svg";
import { EmptyState } from "../components/EmptyState";

export const PlaylistListingScreen = () => {
  const { usegetAllPlaylist, usedeletePlaylist } = useApi();
  const { state: globaState } = useData();
  const { loading: isLoadingPlaylist } = usegetAllPlaylist();
  const [removePlaylist, { loading: isRemovingPlaylist }] = usedeletePlaylist();
  const navigate = useNavigate();

  const PlaylistListingCard = ({ onDelete, onClick, title }) => {
    return (
      <div className="playlist-card">
        <div className="playlist-title-container pointer" onClick={onClick}>
          <h4 className="h4 black-6 ">{title}</h4>
        </div>

        <i
          className="uil uil-trash-alt tx-24 black-6 pointer"
          onClick={onDelete}
        ></i>
      </div>
    );
  };

  return (
    <div>
      {globaState.playlists.length === 0 && (
        <div className="m-20">
          <EmptyState
            imageUrl={emptyImage}
            title="You Haven't Created Any Playlist yet"
            description="Try Exploring our handpicked song just for you"
            buttonText="Explore Now"
            onButtonClick={() => navigate("/videos")}
          />
        </div>
      )}

      {globaState.playlists.length > 0 && (
        <div className="playlist-screen-header">
          <h1 className="h1 mh-20 black-6 ">Your Playlists</h1>
        </div>
      )}
      <div className="playlist-card-listing">
        {globaState.playlists.length > 0 &&
          globaState.playlists.map((item) => {
            return (
              <PlaylistListingCard
                title={item.title}
                onClick={() => navigate(`/user/playlist/${item._id}`)}
                onDelete={() => removePlaylist({}, item._id)}
              />
            );
          })}
      </div>
    </div>
  );
};
