export const VideoCardForHistory = ({
  videoId,
  title,
  creator,
  onClick,
  onDelete,
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
            <i class="uil uil-trash-alt card-icon" onClick={onDelete}></i>
          </div>
        </div>
      </div>
    </div>
  );
};
