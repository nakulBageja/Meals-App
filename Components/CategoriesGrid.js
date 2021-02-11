//Component to display grids

import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform, //This is used to find out the platform we are running on
} from "react-native";

const CategoriesGrid = (props) => {
  let TouchableCmp = TouchableOpacity;

  //If android version >21 then add ripple effect
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoriesGrid;
