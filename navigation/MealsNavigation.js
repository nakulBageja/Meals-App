import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import { Ionicons } from "@expo/vector-icons";

import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteMealsScreen from "../screens/FavoriteMealScreen";
import Color from "../constants/Colors";
import FitlerScreen from "../screens/FiltersScreen";

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
      activeTintColor: Color.primary,
    },
  }
);
//Fitlers stack navigator
const FitlerNavigator = createStackNavigator(
  {
    Filter: FitlerScreen,
  },
  {
    defaultNavigationOptions: defaultNavOption,
  }
);

//Side drawer
const sideDrawerNavigator = createDrawerNavigator({
  MealsFavs: MealsTabNavigator,
  Filter: FitlerNavigator,
});

export default createAppContainer(sideDrawerNavigator);
