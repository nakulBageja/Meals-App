export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggle_favorite = (id) => {
  console.log("I'm in action");
  return { type: TOGGLE_FAVORITE, mealId: id };
};
