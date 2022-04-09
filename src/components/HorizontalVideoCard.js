export const HorizontalVideoCard = ({
  videoId,
  title,
  creator,
  description,
  onClick,
  onSave,
  onCreatePlaylist,
  isSaved,
}) => {
  return (
    <div className="card-container-horizontal similar-video-card">
      <img
        className="card-img card-img-horizontal"
        src={`http://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        onClick={onClick}
      />
      <div className="content-container pd-10">
        <h2 className="card-title tx-20">{title}</h2>
        <h2 className="card-subheading">{creator}</h2>
        <p className="card-description">{description}</p>
        <div className="bottom-container">
          <div className="icon-container">
            <i
              className={`uil uil-bookmark card-icon-video-card ${
                isSaved ? "card-icon-active-save" : ""
              }`}
              onClick={onSave}
            ></i>
            <i
              className="uil uil-create-dashboard card-icon"
              onClick={onCreatePlaylist}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
