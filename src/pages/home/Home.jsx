import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRestaurantData } from "../../redux/actions/restaurantAction";
import ubication from "../../asset/locationHome.png";
import img1 from "../../asset/Promo 1.png";
import img2 from "../../asset/Promo 2 (1).png";
import hamburger from "../../asset/hamburger.png";
import pizza from "../../asset/🍕.png";
import {
  ButtonCategory,
  ContainerHome,
  ContainerLocation,
  DivH3,
  DivImgRestaurant,
  DivRestaurants,
  DivRestaurantsinf,
  ImgsCarrusel,
} from "./StyleHome";
import { useNavigate } from "react-router-dom";

const Home = ({ restaurantData, fetchRestaurantData }) => {
  useEffect(() => {
    fetchRestaurantData();
  }, [fetchRestaurantData]);

  const navigate = useNavigate();

  const navigateToDetails = (
    restaurantId,
    Foods,
    restaurantImage,
    restaurantName,
    restaurantLogo,
    restaurantDescription,
    restaurantStar,
    restaurantTime
  ) => {
    navigate(`/detailsrestaurant/${restaurantId}`, {
      state: {
        Foods,
        restaurantImage,
        restaurantName,
        restaurantLogo,
        restaurantDescription,
        restaurantStar,
        restaurantTime,
      },
    });
  };

  return (
    <ContainerHome>
      <ContainerLocation>
        <div>
          <img src={ubication} alt="" />
        </div>
        <div>
          <h5>DELIVER TO</h5>
          <h3>882 Well St, New-York</h3>
        </div>
      </ContainerLocation>
      <ImgsCarrusel>
        <figure>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </figure>
      </ImgsCarrusel>
      <div>
        <DivH3>Restaurants and cafes</DivH3>
      </div>
      <ButtonCategory>
        <button>
          <img src="" alt="" />
          All
        </button>
        <button>
          <img src={hamburger} alt="" />
          Fast food
        </button>
        <button>
          <img src={pizza} alt="" />
          Pizza
        </button>
      </ButtonCategory>
      {restaurantData.map((restaurant) => (
        <DivRestaurants key={restaurant.id}>
          <div
            onClick={() =>
              navigateToDetails(
                restaurant.id,
                restaurant.Foods,
                restaurant.image,
                restaurant.name,
                restaurant.logo,
                restaurant.description,
                restaurant.star,
                restaurant.timeEntre
              )
            }
          >
            <DivImgRestaurant>
              <figure>
                <img src={restaurant.image} alt={restaurant.name} />
              </figure>
            </DivImgRestaurant>
          </div>
          <DivRestaurantsinf>
            <h2>{restaurant.name}</h2>
            <figure>
              <img src={restaurant.star} alt="star" />
            </figure>
            <h3>Work time {restaurant.time}</h3>
            <h4>Before you {restaurant.domicile}</h4>
          </DivRestaurantsinf>
        </DivRestaurants>
      ))}
    </ContainerHome>
  );
};

const mapStateToProps = (state) => {
  return {
    restaurantData: state.restaurant.restaurantData,
  };
};

export default connect(mapStateToProps, { fetchRestaurantData })(Home);
