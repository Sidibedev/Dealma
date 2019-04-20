import React from 'react';
import { createAppContainer, createSwitchNavigator , createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import IntroScren from '../screens/IntroScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import forgotpassword from '../screens/forgotpassword';
const Intro = createStackNavigator({
  Intro : IntroScren,
  Login : Login,
  Signup : Signup,
  forgotpassword : forgotpassword

})
export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Intro: Intro
} ,

{
  initialRouteName:'Intro'
}));