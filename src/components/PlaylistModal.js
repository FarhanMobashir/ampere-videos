import { Modal } from "./Modal";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import React from "react";
import { useApi } from "../contexts/ApiContext";
import { useData } from "../contexts/DataContext";
export const PlaylistModal = ({
  onClose,
  showModal,
  setShowModal,
  selectedVideo,
}) => {
  const { state: globalState, dispatch: globalDisptach } = useData();
  const {
    usegetAllPlaylist,
    useupdatePlaylist,
    useupdateSinglePlaylist,
    usedeleteFromSinglePlaylist,
  } = useApi();
  const { loading: isLoadingPlaylist, data: playlistData } =
    usegetAllPlaylist();
  const [
    createNewPlaylist,
    {
      loading: isCreatingPlaylist,
      error: errorWhileCreatingPlaylist,
      data: newPlaylistData,
    },
  ] = useupdatePlaylist();

  const [addToParticularPlaylist, { loading: isAddingToPlaylist }] =
    useupdateSinglePlaylist();

  const [deleteFromParticularPlaylist, { loading: isDeletingFromPlaylist }] =
    usedeleteFromSinglePlaylist();

  // * local state
  const [showCreatePlaylist, setShowCreatePlaylist] = React.useState(false);
  const [playlistName, setPlaylistName] = React.useState("");

  const createNewPlaylistHandler = () => {
    setShowCreatePlaylist(false);
    createNewPlaylist({ title: playlistName });
  };

  const checkboxChangeHandler = (playlist, event) => {
    if (!event.target.checked === true) {
      deleteFromParticularPlaylist({}, `${playlist._id}/${selectedVideo._id}`);
    } else {
      addToParticularPlaylist(selectedVideo, `${playlist._id}`);
    }
  };
  console.log("playlist data", globalState.playlists);
  return (
    <Modal>
      <div className="bg-black-0 playlist-modal-container">
        <div className="modal-header">
          <h1 className="h5 black-6">Save to...</h1>
          <i
            className="uil uil-times tx-24 black-6 pointer"
            onClick={onClose}
          ></i>
        </div>
        <div className="playlist-list">
          {globalState.playlists &&
            globalState.playlists.map((item, idx) => {
              return (
                <Checkbox
                  key={item._id}
                  label={item.title}
                  checked={
                    globalState.playlists
                      .filter((playlist) => playlist._id === item._id)[0]
                      .videos.find((video) => selectedVideo._id === video._id)
                      ? true
                      : false
                  }
                  onChange={(e) => checkboxChangeHandler(item, e)}
                />
              );
            })}
          {globalState.playlists.length === 0 && (
            <p className="tx-14">You haven't created any playlist yet</p>
          )}
        </div>
        {!showCreatePlaylist && (
          <button
            className="btn btn-text bg-black-0"
            onClick={() => setShowCreatePlaylist(true)}
          >
            <i className="uil uil-plus"></i>Create Playlist
          </button>
        )}
        {showCreatePlaylist && (
          <>
            <Input
              label="Enter playlist name"
              onChange={(e) => setPlaylistName(e.target.value)}
              required
              type="text"
              htmlFor="playlist"
            />
            <p className="tx-12">{playlistName.length}/150</p>
            <button
              className="btn btn-text bg-black-0 ml-auto"
              disabled={playlistName === ""}
              onClick={() => createNewPlaylistHandler()}
            >
              Create
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};
