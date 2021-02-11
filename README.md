## NAVIGATION

Use this in every app to improve performance

npm install --save react-native-screens

in app.js

```

import {enableScreens} from "react-native-screens"

enableScreens()

```

### ADDING BUTTONS IN YOUR HEADER

npm install --save react-navigation-header-buttons

### NEED REACT NAVIGATION ALWAYS

import { createAppContainer } from "react-navigation";

- This gives the components props like navigation() which helps to navigate to specified route

### DIFFERENT WAYS OF NAVIGATION/NAVIGATORS

So when we use the StackNavigator (= next lecture), run

npm install --save react-navigation-stack
before you start using it (with v3 and lower, it was part of react-navigation itself).

Also add this import in the file where you are using createStackNavigator:

import { createStackNavigator } from 'react-navigation-stack';

## NAVIGATION OPTIONS

CategoriesScreen.navigationOptions = header("MEALS CATEGORIES");
