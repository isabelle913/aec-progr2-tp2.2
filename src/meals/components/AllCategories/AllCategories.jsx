import { useQuery } from "@tanstack/react-query";

import CardLink from "../../../components/CardLink/CardLink";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

import MealsService from "../../services/MealsServices";

const mealsService = new MealsService();

const AllCategories = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => mealsService.getAllCategories(),
  });

  if (isLoading) return <div>Loading en cours...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  //console.log("data", data);

  // TODO Pourrait mettre un spinner
  return (
    <div>
      <Header isLinkVisible={false} />
      <h2 className="py-5">Quelle est votre catégorie préférée?</h2>
      <div className="row justify-content-evenly">
        {data &&
          data.categories.map((category) => (
            <CardLink
              name={category.strCategory}
              link={`/category/${category.strCategory}`}
              img={""}
              key={category.idCategory}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllCategories;
