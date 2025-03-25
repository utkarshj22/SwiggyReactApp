import * as Constants from '../constants';

const RestroCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => (
  <div className="restro-card">
    <img src={`${Constants.IMG_CDN_URL}${cloudinaryImageId}`} alt="restro" />
    <h2>{name}</h2>
    <h3>{cuisines.join(', ')}</h3>
    <h4>{avgRating} stars</h4>
  </div>
);

export default RestroCard;
