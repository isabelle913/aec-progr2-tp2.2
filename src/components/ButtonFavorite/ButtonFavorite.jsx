import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSelector } from "../../meals/store/favoriteSelectors";
import { addFavorite, removeFavorite } from "../../meals/store/favoritesSlice";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ButtonFavorite = ({ idMeal, smallButton = false }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(favoritesSelector);

  const isFavorite =
    favorites.filter((favorite) => favorite === idMeal).length > 0;

  const onClick = (event) => {
    event.preventDefault();
    if (isFavorite) {
      return dispatch(removeFavorite(idMeal));
    } else {
      return dispatch(addFavorite(idMeal));
    }
  };

  const textLong = isFavorite
    ? "Recette favorite"
    : "Ajouter aux recettes favorites";
  const textTooltip = isFavorite
    ? "Enlever des recettes favorites"
    : "Ajouter aux recettes favorites";

  return (
    <div>
      {!smallButton && (
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip">{textTooltip}</Tooltip>}>
          <Button
            onClick={onClick}
            size="lg"
            variant={isFavorite ? "danger" : "outline-danger"}>
            {textLong}
          </Button>
        </OverlayTrigger>
      )}
      {smallButton && (
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="tooltip">{textTooltip}</Tooltip>}>
          <Button
            onClick={onClick}
            size="lg"
            variant={isFavorite ? "danger" : "outline-danger"}
            className="fs-1 ">
            ♡
          </Button>
        </OverlayTrigger>
      )}
    </div>
  );
};

export default ButtonFavorite;
