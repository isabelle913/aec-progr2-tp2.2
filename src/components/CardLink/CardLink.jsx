import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ButtonFavorite from "../ButtonFavorite/ButtonFavorite";

import "./CardLink.css";

const CardLink = ({ name, link, img, cardSize = "small", idMeal = 0 }) => {
  const classCard =
    cardSize === "small"
      ? "col-6 col-md-4 col-xl-3 p-0 m-3"
      : "col-12 col-lg-5 p-0 m-3";

  return (
    <Card bg="light" className={classCard}>
      <Link to={link}>
        <div className="d-flex flex-row align-items-center justify-content-between">
          {img && (
            <div className="image-container">
              <Card.Img variant="top" src={img} className="image" />
            </div>
          )}

          <Card.Body>
            <Card.Text as="h4" className="text-dark">
              {name}
            </Card.Text>
          </Card.Body>
          {idMeal != 0 && (
            <Card.Body>
              <ButtonFavorite idMeal={idMeal} smallButton={true} />
            </Card.Body>
          )}
        </div>
      </Link>
    </Card>
  );
};

export default CardLink;
