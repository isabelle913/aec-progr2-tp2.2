import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import CardLink from "../../../components/CardLink/CardLink";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import MealsService from "../../services/MealsServices";

const mealsService = new MealsService();

const MealsByCategory = () => {
  const params = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["mealsByCategory"],
    queryFn: () => mealsService.getMealsByCategory(params.category),
  });

  if (isLoading) return <div>Loading en cours...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  //console.log("data -> mealsByCategory", data);

  return (
    <div>
      <Header isLinkVisible={true} />
      <div className="py-5">
        <h2>Une de ces recettes vous tente?</h2>
        <h3>Catégorie: {params.category}</h3>
      </div>
      <div className="row justify-content-evenly">
        {data &&
          data.meals.map((meal) => (
            <CardLink
              name={meal.strMeal}
              link={`/details/${meal.idMeal}`}
              img={meal.strMealThumb}
              key={meal.idMeal}
              cardSize="big"
            />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default MealsByCategory;
