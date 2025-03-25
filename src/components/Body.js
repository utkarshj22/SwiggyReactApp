import restaurantsData from '../../data/restaurants';
import RestroCard from './RestroCard';
import { useState } from 'react';

const Body = () => {
  const [search, setSearch] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantsData);
  const [restaurants, setRestaurants] = useState(restaurantsData);

  const filterRestaurants = (search, restaurants) => {
    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredRestaurants(filteredRestaurants);
  };
  return (
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
        {filteredRestaurants.map((restro) => (
          <RestroCard key={restro.info.id} {...restro.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
