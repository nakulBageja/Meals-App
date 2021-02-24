import { MEALS } from "../../data/CategoriesData";
import { TOGGLE_FAVORITE } from "../actions/mealsActions";
//initialising state
const initialState = {
  MEALS: MEALS,
  FAV_MEAL: [],
  FILTERS: MEALS,
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      console.log("I'm in reducer");
      //find if the meal is already in the fav list or not.
      const existingMeal = state.FAV_MEAL.findIndex(
        (meal) => meal.id === action.mealId
      );

      //meal is present in fav_meal
      if (existingMeal >= 0) {
        const updatedFavMeals = [...state.FAV_MEAL];
        updatedFavMeals = updatedFavMeals.splice(action.mealId, 1); //remove the meal from fav_meals list
        return { ...state, FAV_MEAL: updatedFavMeals };
      } else {
        //meal is not present
        const newMeal = state.MEALS.find(action.mealId); //find meal from total MEALS list
        return { ...state, FAV_MEAL: state.FAV_MEAL.concat(newMeal) }; //add it to the FAV_MEAL
      }
    default:
      return state;
  }
};

export default mealsReducer;
