import ListGroup from "react-bootstrap/ListGroup";

const Ingredients = ({ meal }) => {
  const ingredientAndMesureList = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`] !== "") {
      if (meal[`strMeasure${i}`] !== "") {
        ingredientAndMesureList.push({
          qte: meal[`strMeasure${i}`],
          ingredient: meal[`strIngredient${i}`],
        });
      } else {
        ingredientAndMesureList.push({
          qte: "un peu :)",
          ingredient: meal[`strIngredient${i}`],
        });
      }
    }
  }

  return (
    <ListGroup>
      {ingredientAndMesureList &&
        ingredientAndMesureList.map((oneIngredientAndMesure) => {
          return (
            <ListGroup.Item key={oneIngredientAndMesure.ingredient}>
              <div className="row">
                <span className="col-2">{oneIngredientAndMesure.qte}</span>
                <span className="col-10 text-start">
                  {oneIngredientAndMesure.ingredient}
                </span>
              </div>
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
};

export default Ingredients;
