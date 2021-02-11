import React from "react";
import { Text, View } from "react-native";
import { MEALS } from "../data/CategoriesData";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";

const MealDetailScreen = ({ navigation }) => {
  const mealID = navigation.getParam("mealID");

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  return (
    <View>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  //Fetch the category id sent through params
  const mealID = navigationData.navigation.getParam("mealID");
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("Favvv")}
        />
      </HeaderButtons>
    ),
  };
};
export default MealDetailScreen;
