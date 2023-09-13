import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSelector } from "../../../../meals/store/favoriteSelectors";
import {
  addFavorite,
  removeFavorite,
} from "../../../../meals/store/favoritesSlice";

const ButtonFavorite = ({ idMeal }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(favoritesSelector);

  const isFavorite =
    favorites.filter((favorite) => favorite === idMeal).length > 0;

  console.log("isFavorite", isFavorite);

  const onClick = () => {
    if (isFavorite) {
      return dispatch(removeFavorite(idMeal));
    } else {
      return dispatch(addFavorite(idMeal));
    }
  };

  return (
    <Button
      onClick={onClick}
      size="lg"
      variant={isFavorite ? "danger" : "outline-danger"}>
      {isFavorite ? "Recette favorite" : "Ajouter aux recettes favorites"}
    </Button>
  );
};

export default ButtonFavorite;
