import * as React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
} from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import MyDrawer from '../components/MyDrawer';
// import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import Header from '../components/Header';

const SearchandFIlter = () => {
    return (
      <View style={styles.container}>
          <Header title='Search' />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
    },
    text: {
      fontSize: 20,
      color: '#808080',
      paddingLeft: 50,
      paddingRight: 50,
    },
    icon: {
      color: "#00bdda",
      paddingLeft: 50,
    },
    url: {
      paddingTop: 20,
      fontSize: 20,
      color: '#00bdda',
      paddingLeft: 50,
      paddingRight: 50,
    }
  });
  
  export default SearchandFilter;