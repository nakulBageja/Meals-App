import { MEALS } from "../../data/CategoriesData";
import { TOGGLE_FAVORITE, SET_FILERS } from "../actions/mealsActions";
//initialising state
const initialState = {
  MEALS: MEALS,
  FAV_MEAL: [],
  FILTERS: MEALS,
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      console.log("I'm in reducer");
      console.log(action.mealId);
      //find if the meal is already in the fav list or not.
      const existingMeal = state.FAV_MEAL.findIndex(
        (meal) => meal.id === action.mealId
      );

      //meal is present in fav_meal
      if (existingMeal >= 0) {
        const updatedFavMeals = [...state.FAV_MEAL];
        updatedFavMeals.splice(existingMeal, 1); //remove the meal from fav_meals list
        return { ...state, FAV_MEAL: updatedFavMeals };
      } else {
        //meal is not present
        const newMeal = state.MEALS.find((meal) => meal.id === action.mealId); //find meal from total MEALS list
        return { ...state, FAV_MEAL: state.FAV_MEAL.concat(newMeal) }; //add it to the FAV_MEAL
      }
    }
    /** Logic for applying filters */
    case SET_FILERS: {
      const appliedFilters = action.filters;
      const updatedFilters = state.MEALS.filter((meal) => {
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) return false;
        if (appliedFilters.isVegan && !meal.isVegan) return false;
        if (appliedFilters.isVegetarian && !meal.isVegetarian) return false;
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) return false;

        return true;
      });

      return { ...state, FILTERS: updatedFilters };
    }
    default:
      return state;
  }
};

export default mealsReducer;
