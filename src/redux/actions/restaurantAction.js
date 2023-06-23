import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";

export const fetchRestaurantData = () => {
  return async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(dataBase, "restaurants"));
      const restaurantData = [];

      for (const doc of querySnapshot.docs) {
        const restaurantId = doc.id;

        // Obtener los datos de la colección "Foods" del restaurante
        const foodsSnapshot = await getDocs(collection(dataBase, "restaurants", restaurantId, "Foods"));
        const foodsData = [];

        foodsSnapshot.forEach((foodDoc) => {
          foodsData.push({ id: foodDoc.id, ...foodDoc.data() });
        });

        // Agregar los datos del restaurante y los alimentos a la matriz restaurantData
        restaurantData.push({
          id: restaurantId,
          ...doc.data(),
          Foods: foodsData,
        });
      }

      dispatch({ type: "FETCH_RESTAURANT_DATA", payload: restaurantData });
    } catch (error) {
      console.log("Error fetching restaurant data: ", error);
    }
  };
};

