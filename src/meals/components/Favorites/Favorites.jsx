import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import CardLink from "../../../components/CardLink/CardLink";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { favoritesSelector } from "../../store/favoriteSelectors";

import MealsService from "../../services/MealsServices";

const mealsService = new MealsService();

const Favorites = () => {
  const favoritesId = useSelector(favoritesSelector);

  if (favoritesId.length) {
    const { isLoading, isError, data, error } = useQuery({
      queryKey: ["favorites"],
      queryFn: () => mealsService.getAllFavorites(favoritesId),
    });
    if (isLoading) return;
    if (isError) return <div>Error: {error.message}</div>;

    return (
      <div>
        <Header isLinkVisible={true} />
        <div className="py-5">
          <h2>Vos recettes favorites</h2>
        </div>
        <div className="row justify-content-evenly">
          {data &&
            data.map((res) => (
              <CardLink
                name={res.meals[0].strMeal}
                link={`/details/${res.meals[0].idMeal}`}
                img={res.meals[0].strMealThumb}
                key={res.meals[0].idMeal}
                idMeal={res.meals[0].idMeal}
                cardSize="big"
              />
            ))}
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header isLinkVisible={true} />
        <h2 className="py-5">
          Vous n'avez pas sélectionné de recettes favorites
        </h2>
        <Footer />
      </div>
    );
  }
};

export default Favorites;
