import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant ID : {id}</h1>
      <h2>{restaurant.name}</h2>
      <img
        className="resImage"
        src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        alt="restro"
      />
      <h3>{restaurant.areaName}</h3>
      <h3>{restaurant.city}</h3>
      <h3>{restaurant.avgRating}</h3>
    </div>
  );
};

export default RestaurantMenu;
