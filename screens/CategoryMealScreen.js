//Second screen. Displaying recipes of that particular cuisine
import React from "react";
import MealList from "../Components/MealList";
import { CategoriesData } from "../data/CategoriesData";
import { useSelector } from "react-redux"; //useSelector is used to call the redux store and fetch req data
import { Text, View, StyleSheet } from "react-native";
const CategoryMealScreen = ({ navigation }) => {
  //get all meals
  const availableMeals = useSelector((state) => state.mealsReducer.FILTERS);
  //Fetch the category id sent through params
  const catID = navigation.getParam("categoryID");
  //Get all the meals which contain the params Category id
  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );

  if (displayMeals.length == 0 || !displayMeals) {
    return (
      <View style={styles.content}>
        <Text>No item here! Check out your filters?!</Text>
      </View>
    );
  }
  return <MealList displayMeals={displayMeals} navigation={navigation} />;
};

//Setting custom header
CategoryMealScreen.navigationOptions = (navigationData) => {
  //Fetch the category id sent through params
  const catID = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CategoriesData.find((cat) => cat.id === catID);
  return { headerTitle: selectedCategory.title };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CategoryMealScreen;
