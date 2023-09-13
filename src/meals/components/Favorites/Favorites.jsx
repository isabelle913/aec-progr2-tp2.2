import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import CardLink from "../../../components/CardLink/CardLink";
import { useQuery } from "@tanstack/react-query";
//import Button from "react-bootstrap/Button";
import { /*useDispatch,*/ useSelector } from "react-redux";
import { favoritesSelector } from "../../store/favoriteSelectors";
//import {
//   addFavorite,
//   removeFavorite,
// } from "../../../../meals/store/favoritesSlice";

import MealsService from "../../services/MealsServices";

const mealsService = new MealsService();

const Favorites = () => {
  const favoritesId = useSelector(favoritesSelector);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => mealsService.getAllFavorites(favoritesId),
  });

  // TODO mettre guard si data est vide

  if (isLoading) return <div>Loading en cours...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  data.map((res) => {
    console.log("res", res);
    console.log("res.meals", res.meals);
    console.log("res.meals[0]", res.meals[0]);
    console.log("res.meals[0].strMeal", res.meals[0].strMeal);
  });
  return (
    <div>
      <Header isLinkVisible={true} />
      <div className="py-5">
        <h2>Vos recettes favorites</h2>
      </div>
      {data &&
        data.map((res) => (
          <CardLink
            name={res.meals[0].strMeal}
            link={`/details/${res.meals[0].idMeal}`}
            img={res.meals[0].strMealThumb}
            key={res.meals[0].idMeal}
          />
        ))}
      <Footer />
    </div>
  );
};

export default Favorites;
