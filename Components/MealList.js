//Component used to display list of meals

import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../Components/MealItem";
const MealList = ({ displayMeals, navigation }) => {
  const currentFavorites = useSelector((state) => state.mealsReducer.FAV_MEAL); //fetch all fav
  const renderMeals = (itemData) => {
    const isFav = currentFavorites.some((meal) => meal.id === itemData.item.id); //check if current
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealID: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav,
            },
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

export default MealList;
