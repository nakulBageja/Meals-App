import React from "react";
import MealList from "../Components/MealList";
import { MEALS } from "../data/CategoriesData";
const FavoriteMealsScreen = ({ navigation }) => {
  //Get all the meals which contain the params Category id
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m3");
  return <MealList displayMeals={favMeals} navigation={navigation} />;
};

//ADDING CUSTOM HEADER
FavoriteMealsScreen.navigationOptions = {
  headerTitle: "Favorites",
};

export default FavoriteMealsScreen;
