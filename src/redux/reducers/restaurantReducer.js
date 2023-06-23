const initialState = {
    restaurantData: [],
  };
  
  const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_RESTAURANT_DATA":
        return {
          ...state,
          restaurantData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default restaurantReducer;