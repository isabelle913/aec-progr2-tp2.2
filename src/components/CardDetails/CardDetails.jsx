import Card from "react-bootstrap/Card";
import CardDetailsHeader from "./CardDetailsHeader/CardDetailsHeader";
import CardDetailsFooter from "./CardDetailsFooter/CardDetailsFooter";
import CardDetailsBody from "./CardDetailsBody/CardDetailsBody";

import "./CardDetails.css";

const CardDetails = ({ meal }) => {
  //console.log("CardDetails", meal);

  return (
    <Card bg="light" className="card-container gap-5">
      <CardDetailsHeader meal={meal} />
      <CardDetailsBody meal={meal} />
      {meal.strYoutube && <CardDetailsFooter strYoutube={meal.strYoutube} />}
    </Card>
  );
};

export default CardDetails;

// ingrédients
// quantités // caché
// instructions // caché

// pourquoi pas tab pour ingrédients, pour instructions
