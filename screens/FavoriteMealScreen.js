import React from "react";
import MealList from "../Components/MealList";
import { MEALS } from "../data/CategoriesData";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";
const FavoriteMealsScreen = ({ navigation }) => {
  //Get all the meals which contain the params Category id
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m3");
  return <MealList displayMeals={favMeals} navigation={navigation} />;
};

//ADDING CUSTOM HEADER and menu drawer
FavoriteMealsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};
export default FavoriteMealsScreen;
