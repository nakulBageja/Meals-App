export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILERS = "SET_FILERS";
export const toggle_favorite = (id) => {
  console.log("I'm in action");
  return { type: TOGGLE_FAVORITE, mealId: id };
};
export const set_filers = (filters) => {
  console.log("I'm in action");
  return { type: SET_FILERS, filters };
};
