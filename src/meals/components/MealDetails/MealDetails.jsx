import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import CardDetails from "../../../components/CardDetails/CardDetails";

import MealsService from "../../services/MealsServices";

import "./MealDetails.css";

const mealsService = new MealsService();

const MealDetails = () => {
  const params = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["mealDetail"],
    queryFn: () => mealsService.getMealDetailById(params.idMeal),
  });

  if (isLoading) return <div>Loading en cours...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <Header isLinkVisible={true} category={data.meals[0].strCategory} />
      {data &&
        data.meals.map((meal) => <CardDetails meal={meal} key={meal.idMeal} />)}
      <Footer />
    </div>
  );
};

export default MealDetails;
