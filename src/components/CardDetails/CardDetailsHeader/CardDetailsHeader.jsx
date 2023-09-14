import Card from "react-bootstrap/Card";
import Badges from "../Badges/Badges";
import ButtonFavorite from "../../ButtonFavorite/ButtonFavorite";

import "./CardDetailHeader.css";

const CardDetailsHeader = ({ meal }) => {
  //console.log(meal);

  return (
    <div className="row">
      <div className="col d-flex flex-column justify-content-between">
        <div>
          <Card.Text as="h2" className="text-dark">
            {meal.strMeal}
          </Card.Text>
          <Card.Text as="h4" className="text-dark">
            Categorie: {meal.strCategory}
          </Card.Text>
          {meal.strArea && (
            <Card.Text as="h4" className="text-dark">
              Cette provient de cette région: {meal.strArea}
            </Card.Text>
          )}
        </div>

        <div className="tags-container">
          {meal.strTags && <Badges tags={meal.strTags} />}
        </div>
        <ButtonFavorite idMeal={meal.idMeal} />
      </div>
      {meal.strMealThumb && (
        <div className="col image-container">
          <Card.Img variant="top" src={meal.strMealThumb} className="image" />
        </div>
      )}
    </div>
  );
};

export default CardDetailsHeader;
