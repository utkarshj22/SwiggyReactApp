import foodVilla from '../../Images/FoodVilla.jpeg';

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={foodVilla} alt="logo" />
    </a>
  );
};

export default Title;
