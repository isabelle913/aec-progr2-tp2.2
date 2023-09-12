import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../meals/store/favoritesSlice";

export default configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});
