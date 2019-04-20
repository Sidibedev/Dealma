import React from 'react';
import { Platform  , Text} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/ProfilScreen';
import DetailAnnonce from '../screens/DetailAnnonce';
import AllAnnonce from '../screens/AllAnnonce';
import UpdateAnnonce from '../screens/UpdateAnnonce';
import AnnonceByCategorie from '../screens/AnnonceByCategorie';
import NewAnnonce from '../screens/NewAnnonce';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  DetailAnnonce : DetailAnnonce,
  AllAnnonce:AllAnnonce,
  AnnonceByCategorie:AnnonceByCategorie
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarLabel :({ focused }) =>(
    <Text style={{fontSize:10 , textAlign:'center', color:focused ? "#e51413" : "#ccc" , marginBottom:5 , fontFamily:'montserrat' }}>
    Home
    </Text>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

const AnnonceStack = createStackNavigator({
  AllAnnonce : AllAnnonce
})

AnnonceStack.navigationOptions = {
  tabBarLabel :({ focused }) =>(
    <Text style={{fontSize:10 , textAlign:'center', color:focused ? "#e51413" : "#ccc" , marginBottom:5 , fontFamily:'montserrat' }}>
    Annonces
    </Text>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-keypad' : 'md-keypad'}
    />
  ),
}



const ProfilStack = createStackNavigator({
  Settings: SettingsScreen,
  UpdateAnnonce : UpdateAnnonce,
  NewAnnonce:NewAnnonce
});

ProfilStack.navigationOptions = {
 
  tabBarLabel :({ focused }) =>(
    <Text style={{fontSize:10 , textAlign:'center', color:focused ? "#e51413" : "#ccc" , marginBottom:5 , fontFamily:'montserrat' }}>
    Profil
    </Text>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AnnonceStack,
  ProfilStack,
});
