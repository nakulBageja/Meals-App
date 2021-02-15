import React, { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";
import Colors from "../constants/Colors";

const FilerSwitch = (props) => {
  return (
    <View style={styles.fitlerContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primary, false: Colors.accent }}
        thumbColor={Colors.primary}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FitlerScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isSugarFree, setIsSugarFree] = useState(false);
  const [isSaltFree, setIsSaltFree] = useState(false);
  const [isSpiceFree, setIsSpiceFree] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilerSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilerSwitch
        label="Sugar-free"
        state={isSugarFree}
        onChange={(newValue) => setIsSugarFree(newValue)}
      />
      <FilerSwitch
        label="Salt-free"
        state={isSaltFree}
        onChange={(newValue) => setIsSaltFree(newValue)}
      />
      <FilerSwitch
        label="Spice-free"
        state={isSpiceFree}
        onChange={(newValue) => setIsSpiceFree(newValue)}
      />
    </View>
  );
};

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
const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: "center" },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  fitlerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});
export default FitlerScreen;
