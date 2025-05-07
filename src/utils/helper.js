export const filterData = (search, restaurants) => {
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(search.toLowerCase()),
  );
  return filteredRestaurants;
};
