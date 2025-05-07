import { useEffect, useState } from 'react';

const useRestaurantMenu = ({ id }) => {
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

  return restaurant;
};

export default useRestaurantMenu;
