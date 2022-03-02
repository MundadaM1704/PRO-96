import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateProfileScreen from './screens/CreateProfileScreen';
import CreateRecipeScreen from './screens/CreateRecipeScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RecipeScreen from './screens/RecipeScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    CreateRecipe: { screen: CreateRecipeScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'Home') {
          return (
            <Image
              source={require('./assets/home-icon.png')}
              style={{ width: 35, height: 35 }}
            />
          );
        } else if (routeName === 'CreateRecipe') {
          return (
            <Image
              source={require('./assets/create-icon.jpg')}
              style={{ width: 30, height: 30 }}
            />
          );
        }
      },
    }),
  }
);

const switchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  TabNavigator: { screen: TabNavigator },
  CreateRecipe: { screen: CreateRecipeScreen },
  CreateProfile: { screen: CreateProfileScreen },
  Profile: { screen: ProfileScreen },
  Home: { screen: HomeScreen },
  Recipe: { screen: RecipeScreen },
});

const AppContainer = createAppContainer(switchNavigator);
