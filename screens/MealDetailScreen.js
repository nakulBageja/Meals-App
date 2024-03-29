import React, { useCallback, useEffect } from "react";
import { ScrollView, Image, Text, View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux"; //useSelector is used to call the redux store and fetch req data
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";
import ListItem from "../Components/ListItem";
import { toggle_favorite } from "../store/actions/mealsActions";
const MealDetailScreen = ({ navigation }) => {
  //get all meals
  const availableMeals = useSelector((state) => state.mealsReducer.MEALS);
  const currentFavorites = useSelector((state) => state.mealsReducer.FAV_MEAL); //fetch all fav
  const mealID = navigation.getParam("mealID");
  const selectedMeal = availableMeals.find((meal) => meal.id === mealID);
  const isFav = currentFavorites.some((meal) => meal.id === mealID); //check if current
  const dispatch = useDispatch();
  //function to dispatch a new fav action
  const toggleFavHandler = useCallback(() => {
    dispatch(toggle_favorite(mealID));
  }, [mealID, dispatch]);

  //send new function reference to navigation, everytime a new meal is selected
  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavHandler });
  }, [toggleFavHandler]);

  useEffect(() => {
    navigation.setParams({ isFav });
  }, [isFav]);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  //Fetch the category id sent through param

  const toggleFAVButton = navigationData.navigation.getParam("toggleFav");
  const isFav = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: navigationData.navigation.getParam("mealTitle"),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFAVButton}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    backgroundColor: "#d9d9d9",
    borderRadius: 5,
    overflow: "hidden",
  },
  title: {
    marginVertical: 10,
    fontFamily: "OpenSans-Regular",
    fontSize: 22,
    textAlign: "center",
  },
});
export default MealDetailScreen;
