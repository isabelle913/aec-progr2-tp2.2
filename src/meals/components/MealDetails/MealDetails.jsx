import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import MealsService from "../../services/MealsServices";

const mealsService = new MealsService();

const MealDetails = () => {
  const params = useParams();

  console.log("params", params.idMeal);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["mealDetail"],
    queryFn: () => mealsService.getMealDetailById(params.idMeal),
  });

  if (isLoading) return <div>Loading en cours...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  console.log("data -> MealDetails", data);

  return (
    <div>
      <Header isLinkVisible={true} />
      <Link to={"/"}>Retour à la page catégorie</Link>
      MealDetails
      <Footer />
    </div>
  );
};

export default MealDetails;
// Titre
// Categorie
// image
// ingrédients
// quantités // caché
// instructions // caché

// pourquoi pas tab pour ingrédients, pour instructions
