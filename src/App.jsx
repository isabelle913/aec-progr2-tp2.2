import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import AllCategories from "./meals/components/AllCategories/AllCategories";
import MealsByCategory from "./meals/components/MealsByCategory/MealsByCategory";
import MealDetails from "./meals/components/MealDetails/MealDetails";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<AllCategories />} />
          <Route path="/category/:category" element={<MealsByCategory />} />
          <Route path="/details/:idMeal" element={<MealDetails />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
