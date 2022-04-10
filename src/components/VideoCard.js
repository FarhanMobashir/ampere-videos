// src={`http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}

export const VideoCard = ({
  videoId,
  title,
  creator,
  onClick,
  onSave,
  onCreatePlaylist,
  isSaved,
}) => {
  return (
    <div class="card-container container-lg">
      <img
        onClick={onClick}
        class="card-img-lg"
        src={`http://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
      />
      <div class="content-container">
        <h2 class="card-title tx-20 mv-0">{title}</h2>

        <div class="bottom-container">
          <h2 class="card-subheading tx-14">{creator}</h2>
          <div class="icon-container">
            {/* <i class="uil uil-thumbs-up card-icon"></i> */}
            <i
              class={`uil uil-bookmark card-icon-video-card  ${
                isSaved ? "card-icon-active-save" : ""
              }`}
              onClick={onSave}
            ></i>
            <i
              class="uil uil-create-dashboard card-icon-video-card"
              onClick={onCreatePlaylist}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
