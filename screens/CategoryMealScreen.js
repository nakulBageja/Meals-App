//Second screen. Displaying recipes of that particular cuisine

import React from "react";
import { FlatList } from "react-native";
import { CategoriesData, MEALS } from "../data/CategoriesData";
import MealItem from "../Components/MealItem";
const CategoryMealScreen = ({ navigation }) => {
  //Fetch the category id sent through params
  const catID = navigation.getParam("categoryID");
  //Get all the meals which contain the params Category id
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );
  const renderMeals = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: { mealID: itemData.item.id },
          });
        }}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  };

  return (
    <FlatList
      data={displayMeals}
      renderItem={renderMeals}
      keyExtractor={(item) => item.id}
    />
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  //Fetch the category id sent through params
  const catID = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CategoriesData.find((cat) => cat.id === catID);
  return { headerTitle: selectedCategory.title };
};
export default CategoryMealScreen;
