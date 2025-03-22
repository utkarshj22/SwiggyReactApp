import React from "react";
import ReactDOM from "react-dom/client";
import foodVilla from "./Images/FoodVilla.jpeg";
import restaurants from "./data/restaurants";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={foodVilla} alt="logo" />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = ({name, cuisines, avgRating, cloudinaryImageId}) => (
    <div className="restro-card">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="restro" />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
    </div>
)

const Body = () => (
    <div className="restro-list">
        {
            restaurants.map((restro) => (
                <RestroCard key={restro.info.id} {...restro.info}/>
            ))
        }
    </div>
)

const Footer = () => (
    <h1>Footer</h1>
);

const AppComponent = () => (
    <>
    <Header />
    <Body />
    <Footer />
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
