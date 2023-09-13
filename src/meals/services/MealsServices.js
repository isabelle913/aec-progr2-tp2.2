// Docs https://www.themealdb.com/api.php

// List all meal categories
//www.themealdb.com/api/json/v1/1/categories.php

// Filter by Category
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

// Lookup full meal details by id
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

// base url www.themealdb.com/api/json/v1/1/

import { config } from "../../config";

class MealsService {
  baseUrl = config.baseUrl;
  endpointAll = "categories.php";
  endpointOneCategory = "filter.php?c=";
  endpointDetail = "lookup.php?i=";

  async getAllCategories() {
    const response = await fetch(`${this.baseUrl}${this.endpointAll}`);

    if (!response.ok)
      throw new Error(`Error:getAllCategories ${response.status}`);

    const categories = await response.json();
    //console.log("getAllCategories -> ", categories);

    return categories;
  }

  async getMealsByCategory(category) {
    const response = await fetch(
      `${this.baseUrl}${this.endpointOneCategory}${category}`
    );

    if (!response.ok)
      throw new Error(`Error:getMealsByCategory ${response.status}`);

    const categoryMeals = await response.json();
    //console.log("getMealsByCategory -> ", categoryMeals);

    return categoryMeals;
  }

  async getMealDetailById(id) {
    const response = await fetch(`${this.baseUrl}${this.endpointDetail}${id}`);

    if (!response.ok)
      throw new Error(`Error:getMealDetailById ${response.status}`);

    const mealDetail = await response.json();
    //console.log("getMealDetailById -> ", mealDetail);

    return mealDetail;
  }

  async getAllFavorites(favoritesId) {
    if (favoritesId.length) {
      const responses = await Promise.all(
        favoritesId.map((id) =>
          fetch(`${this.baseUrl}${this.endpointDetail}${id}`)
        )
      );

      // TODO trouver comment throw error

      const data = await Promise.all(responses.map((res) => res.json()));
      return data;
    }
  }
}

export default MealsService;
