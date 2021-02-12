import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteMealsScreen from "../screens/FavoriteMealScreen";
import Color from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const defaultNavOption = {
  headerStyle: {
    backgroundColor: Color.primary,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign: "center",
};

//Stack navigator containing all screens except fav
const MealsNavigator = createStackNavigator(
  {
    Categories: { screen: CategoriesScreen },
    CategoryMeal: { screen: CategoryMealScreen },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    defaultNavigationOptions: defaultNavOption,
  }
);

//Fav stack

const FavoriteNavigator = createStackNavigator(
  {
    Favorites: FavoriteMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavOption,
  }
);

//Tabs navigator. Root navigator
const MealsTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            ></Ionicons>
          );
        },
      },
    },
    Favorites: {
      screen: FavoriteNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-star"
              size={25}
              color={tabInfo.tintColor}
            ></Ionicons>
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

export default createAppContainer(MealsTabNavigator);
