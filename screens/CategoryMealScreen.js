//Second screen. Displaying recipes of that particular cuisine
import React from "react";
import MealList from "../Components/MealList";
import { CategoriesData, MEALS } from "../data/CategoriesData";

const CategoryMealScreen = ({ navigation }) => {
  //Fetch the category id sent through params
  const catID = navigation.getParam("categoryID");
  //Get all the meals which contain the params Category id
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );

  return <MealList displayMeals={displayMeals} navigation={navigation} />;
};

//Setting custom header
CategoryMealScreen.navigationOptions = (navigationData) => {
  //Fetch the category id sent through params
  const catID = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CategoriesData.find((cat) => cat.id === catID);
  return { headerTitle: selectedCategory.title };
};
export default CategoryMealScreen;
