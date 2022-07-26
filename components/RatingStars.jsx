import { Icon, IconSize } from "@blueprintjs/core";
const RatingStars = ({ rating, reviews }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating-stars">
      <div className="stars">
        <div className="empty">
          {stars.map((s, i) => {
            return <Icon icon="star-empty" key={`emptyStar${i}`} />;
          })}
        </div>
        <div className="filled" style={{ width: rating == 0 ? "0px" : (rating / 5) * 100 + "%" }}>
          {stars.map((s, i) => {
            return <Icon icon="star" key={`emptyStar${i}`} />;
          })}
        </div>
      </div>
      <div className="rating-count">{rating}</div>
      <div className="reviews-count">{reviews} Review(s)</div>
    </div>
  );
};
export default RatingStars;
