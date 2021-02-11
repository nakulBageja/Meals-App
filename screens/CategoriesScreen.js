//Home screen. Displaying all the categories

import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { CategoriesData } from "../data/CategoriesData";
import CategoriesGrid from "../Components/CategoriesGrid";

const CategoriesScreen = (props) => {
  const displayGrid = (itemData) => {
    return (
      <CategoriesGrid
        color={itemData.item.color}
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeal",
            params: { categoryID: itemData.item.id },
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CategoriesData}
      renderItem={displayGrid}
      numColumns={2}
    />
  );
};

//ADDING CUSTOM HEADER
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};
const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
export default CategoriesScreen;
