import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContainerDetailRest, ContainerFoods, InfoRestaurant, InfoRestaurant1, StarAndTime } from "./StyleDetailsRest";

const DetailsRestaurant = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    Foods,
    restaurantImage,
    restaurantName,
    restaurantLogo,
    restaurantDescription,
    restaurantStar,
    restaurantTime,
  } = location.state;

  const navigateToProductDetails = (food) => {
    navigate(`/detailsproduct/${food.id}`, { state: { food } });
  };

  if (!Foods) {
    return <p>No food data available.</p>;
  }

  return (
    <ContainerDetailRest>
      <InfoRestaurant>
        <div>
          <figure>
            <img src={restaurantLogo} alt="" />
          </figure>
        </div>
        <InfoRestaurant1>
          <div>
            <img src={restaurantImage} alt={restaurantName} />
          </div>
          <div>
            <h1>{restaurantName}</h1>
            <p>{restaurantDescription}</p>
            <StarAndTime>
              <img src={restaurantStar} alt={restaurantName} />
              <h6>{restaurantTime}</h6>
            </StarAndTime>
          </div>
        </InfoRestaurant1>
      </InfoRestaurant>
      <div>
        <button>All</button>
        <button>Salates</button>
        <button>Pizza</button>
      </div>
      {Foods.map((food) => (
        <ContainerFoods key={food.id} onClick={() => navigateToProductDetails(food)}>
          <figure>
            <img src={food.image} alt={food.name} />
          </figure>
          <h3>{food.name}</h3>
          <h4>{food.price}</h4>
        </ContainerFoods>
      ))}
    </ContainerDetailRest>
  );
};

export default DetailsRestaurant;

