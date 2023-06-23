import React from "react";
import { useLocation } from "react-router-dom";

const DetailsProduct = () => {
  const location = useLocation();
  const { food } = location.state;

  return (
    <div>
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <h3>Additional Ingredients</h3>
      <div>
      <input type="checkbox" />{food.ingredients1}
      <h5>{food.priceIngred1}</h5>
      </div>
      <div>
      <input type="checkbox" />{food.ingredients2}
      <h5>{food.priceIngred2}</h5>
      </div>
      <div>
      <input type="checkbox" />{food.ingredients3}
      <h5>{food.priceIngred3}</h5>
      </div>
    </div>
  );
};

export default DetailsProduct;