import React from "react";
import { Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";

const FitlerScreen = ({ params }) => (
  <View>
    <Text>heloo</Text>
  </View>
);

//ADDING CUSTOM HEADER and menu drawer
FitlerScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Fitler Screen",
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

export default FitlerScreen;
