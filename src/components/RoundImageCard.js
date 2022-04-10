export const RoundImageCard = ({ imageUrl, title, onClick }) => {
  return (
    <div className="basic-round-card" onClick={onClick}>
      <img src={imageUrl} alt="" className="img-res img-round round-card-img" />
      <h4 className="h5 medium black-5 tx-center">{title}</h4>
    </div>
  );
};
