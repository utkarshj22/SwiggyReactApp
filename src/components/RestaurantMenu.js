import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  });

  async function getRestaurantMenu() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9304278&lng=77.678404&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`,
    );
    const data = await response.json();
    setRestaurant(data?.data?.cards[2].card.card.info);
    // console.log(data.data.cards[4].groupedCard);
  }
  const { id } = useParams();
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
