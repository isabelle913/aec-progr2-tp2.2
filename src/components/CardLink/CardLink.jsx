import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "./CardLink.css";

const CardLink = ({ name, link, img, cardSize = "small" }) => {
  const classCard =
    cardSize === "small"
      ? "col-6 col-md-4 col-xl-3 p-0 m-3"
      : "col-12 col-lg-5 p-0 m-3";

  return (
    <Card bg="light" className={classCard}>
      <Link to={link}>
        <div className="d-flex flex-row">
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
        </div>
      </Link>
    </Card>
  );
};

export default CardLink;
