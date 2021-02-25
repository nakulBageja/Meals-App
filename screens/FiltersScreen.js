import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { set_filers } from "../store/actions/mealsActions";
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

const FitlerScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegetarian, setisVegetarian] = useState(false);
  const [isLactoseFree, setisLactoseFree] = useState(false);
  const dispatchEvent = useDispatch();
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree,
    };
    dispatchEvent(set_filers(appliedFilters));
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree, dispatchEvent]);

  useEffect(() => {
    navigation.setParams({ saveFilters });
  }, [saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilerSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilerSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setisVegan(newValue)}
      />
      <FilerSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setisVegetarian(newValue)}
      />
      <FilerSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue) => setisLactoseFree(newValue)}
      />
    </View>
  );
};

//ADDING CUSTOM HEADER and menu drawer
FitlerScreen.navigationOptions = (navData) => {
  const saveFilters = navData.navigation.getParam("saveFilters");
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-save" onPress={saveFilters} />
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
