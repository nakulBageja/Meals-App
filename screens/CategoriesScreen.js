import React from "react";
import { Text, View, Button } from "react-native";

const CategoriesScreen = ({ navigation }) => (
  <View>
    <Text>CategoriesScreen</Text>
    <Button
      title="Indian Recipe"
      onPress={() => {
        navigation.navigate({ routeName: "CategoryMeal" });
      }}
    />
  </View>
);

export default CategoriesScreen;
