import React from "react";
import { useLocation } from "react-router-dom";
import { DivDetails, DivIngre, SectionAdi, SectionAdicion } from "./StyledDetailsProducts";

const DetailsProduct = () => {
  const location = useLocation();
  const { food } = location.state;

  return (
    <DivDetails>
      <section>
        <figure>
      <img src={food?.image} alt={food.name} />
      </figure>
      </section>
      <h4>{food?.name}</h4>
      <p>{food?.description}</p>
      <h3>Additional Ingredients</h3>
    
        <DivIngre>
      <div>
      <input type="checkbox" />{food?.ingredients1}
      </div>
      <h5>{food?.priceIngred1}</h5>
      </DivIngre>
      <DivIngre>
        <div>
      <input type="checkbox" />{food?.ingredients2}
      </div>
      <h5>{food?.priceIngred2}</h5>
      </DivIngre>
      <DivIngre>
        <div>
      <input type="checkbox" />{food?.ingredients3}
      </div>
      <h5>{food.priceIngred3}</h5>
      </DivIngre>
      
    </DivDetails>
  );
};

export default DetailsProduct;