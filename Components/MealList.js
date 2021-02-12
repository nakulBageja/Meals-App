//Component used to display list of meals

import React from "react";
import { FlatList } from "react-native";
import MealItem from "../Components/MealItem";
const MealList = ({ displayMeals, navigation }) => {
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

export default MealList;
