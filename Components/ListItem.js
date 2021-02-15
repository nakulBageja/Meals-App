import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListItem = (props) => {
  return (
    <View style={styles.ListItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  ListItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
