import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Color from "../constants/Colors";
const MealsNavigator = createStackNavigator(
  {
    Categories: { screen: CategoriesScreen },
    CategoryMeal: { screen: CategoryMealScreen },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.primary,
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center",
    },
  }
);

export default createAppContainer(MealsNavigator);
