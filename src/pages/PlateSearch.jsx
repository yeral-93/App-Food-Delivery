import React from 'react';
import { InputText } from './user/InputText';
import searchI from "../asset/shearch.png";
import GarbageIc from "../asset/WhatsApp Image 2023-06-23 at 2.36.39 PM.jpeg";
import Footer from './footer/Footer';
import { fetchRestaurantData } from "../redux/actions/restaurantAction";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

const PlateSearch = ({ fetchRestaurantData }) => {
  const dispatch = useDispatch();

  const handleSearchClick = () => {

    dispatch(fetchRestaurantData());
  };

  return (
    <div>
      <InputText
        type="text"
        iconSrc={searchI}
        iconsSrc={GarbageIc}
        placeholder="search"
        onClick={handleSearchClick}
      />
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurantData: () => dispatch(fetchRestaurantData()),
  };
};

export default connect(null, mapDispatchToProps)(PlateSearch);