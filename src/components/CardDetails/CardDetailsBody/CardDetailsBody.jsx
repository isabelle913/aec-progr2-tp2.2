import Accordion from "react-bootstrap/Accordion";
import Ingredients from "./Ingredients/ingredients";

const CardDetailsBody = ({ meal }) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ingrédients</Accordion.Header>
        <Accordion.Body>
          <Ingredients meal={meal} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Instructions</Accordion.Header>
        <Accordion.Body className="text-start">
          {meal.strInstructions}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CardDetailsBody;
