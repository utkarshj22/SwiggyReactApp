import restaurantsData from '../../data/restaurants';
import RestroCard from './RestroCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
  const [search, setSearch] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING',
    );
    const data = await response.json();
    setRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }

  const filterRestaurants = (search, restaurants) => {
    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="button"
          className="search-button"
          onClick={() => filterRestaurants(search, restaurants)}
        >
          Search
        </button>
      </div>
      <div className="restro-list">
        {filterRestaurants.length === 0 ? (
          <h3>No filtered Restro</h3>
        ) : (
          filteredRestaurants.map((restro) => (
            <Link to={`/restaurant/${restro.info.id}`} key={restro.info.id}>
              <RestroCard {...restro.info} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
