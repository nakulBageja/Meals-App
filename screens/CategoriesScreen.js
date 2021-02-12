//Home screen. Displaying all the categories

import React from "react";
import { FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CategoriesData } from "../data/CategoriesData";
import CategoriesGrid from "../Components/CategoriesGrid";
import HeaderButton from "../Components/HeaderButton";
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

//ADDING CUSTOM HEADER and menu drawer
CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
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
export default CategoriesScreen;
