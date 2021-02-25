import React from "react";
import MealList from "../Components/MealList";
import { useSelector } from "react-redux"; //useSelector is used to call the redux store and fetch req data
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";
import { Text, View, StyleSheet } from "react-native";
const FavoriteMealsScreen = ({ navigation }) => {
  //Get all the meals which contain the params Category id
  const favMeals = useSelector((state) => state.mealsReducer.FAV_MEAL);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }
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
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FavoriteMealsScreen;
