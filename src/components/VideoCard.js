import styled from "styled-components";

const CardContainer = styled.div`
  padding: 1rem;
  border: 2px solid var(--black-400);
  width: 40rem;
`;

const ThumbnailImage = styled.img`
  width: 35rem;
`;

export const VideoCard = ({ videoId }) => {
  return (
    <CardContainer>
      <ThumbnailImage
        src={`http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
      />
    </CardContainer>
  );
};
