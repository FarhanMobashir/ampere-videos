export const Youtube = ({
  videoId,
  title,
  creator,
  description,
  onLike,
  onSave,
  onCreatePlaylist,
  isLiked,
  isSaved,
}) => {
  return (
    <div className="video-player-container">
      <div className="card-container card-container-player">
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="content-container">
          <h2 className="card-title tx-20 mv-0">{title}</h2>
          <p className="card-description">{description}</p>
          <div className="bottom-container">
            <h2 className="card-subheading tx-14">{creator}</h2>
            <div className="icon-container">
              <i
                className={`uil uil-thumbs-up card-icon-video-player ${
                  isLiked ? "card-icon-active-like" : ""
                }`}
                onClick={onLike}
              ></i>
              <i
                className={`uil uil-bookmark card-icon-video-player ${
                  isSaved ? "card-icon-active-save" : ""
                }`}
                onClick={onSave}
              ></i>
              <i
                className="uil uil-create-dashboard card-icon-video-player"
                onClick={onCreatePlaylist}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
