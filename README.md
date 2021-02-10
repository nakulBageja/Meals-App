## NAVIGATION

### NEED REACT NAVIGATION ALWAYS

import { createAppContainer } from "react-navigation";

- This gives the components props like navigation() which helps to navigate to specified route

### DIFFERENT WAYS OF NAVIGATION/NAVIGATORS

So when we use the StackNavigator (= next lecture), run

npm install --save react-navigation-stack
before you start using it (with v3 and lower, it was part of react-navigation itself).

Also add this import in the file where you are using createStackNavigator:

import { createStackNavigator } from 'react-navigation-stack';
Same for TabsNavigator (used a little bit later in this module):

npm install --save react-navigation-tabs
import { createBottomTabNavigator } from 'react-navigation-tabs';
And also for DrawerNavigator (also used later in this module):

npm install --save react-navigation-drawer
import { createDrawerNavigator } from 'react-navigation-drawer';
