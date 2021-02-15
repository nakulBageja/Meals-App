import React from "react";
import { ScrollView, Image, Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/CategoriesData";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";
import ListItem from "../Components/ListItem";
const MealDetailScreen = ({ navigation }) => {
  const mealID = navigation.getParam("mealID");

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

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
