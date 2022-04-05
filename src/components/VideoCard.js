// src={`http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}

export const VideoCard = ({ videoId }) => {
  return (
    <div class="card-container container-lg">
      <img
        class="card-img-lg"
        src={`http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
      />
      <div class="content-container">
        <h2 class="card-title">The world of Turtle</h2>

        <div class="bottom-container">
          <h2 class="card-subheading">By Discovery</h2>
          <div class="icon-container">
            <i class="uil uil-thumbs-up card-icon"></i>
            <i class="uil uil-bookmark card-icon"></i>
            <i class="uil uil-create-dashboard card-icon"></i>
          </div>
        </div>
        {/* <p class="card-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p> */}
      </div>
    </div>
  );
};
