import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  // Image,
  // ScrollView,
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import MyDrawer from '../components/MyDrawer';
import { StatusBar } from 'expo-status-bar';
// import Header from '../components/Header'
import { Fragment } from 'react';


const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemSubheader}>{item.subheader}</Text>
      <Text style={styles.itemText}>{item.level}</Text>
      <Text style={styles.itemText}>{item.theme}</Text>
      <Text style={styles.itemText}>{item.date}</Text>
    </View>
  );
};

const Library = () => {
  return (
    <SafeAreaView>
      <SectionList
        ListHeaderComponent={
          <Fragment>
            <StatusBar style="dark" />
            <SafeAreaView style={{ flex: 1 }}>
              <View 
                style={{
                  // height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 25,
                  flex: 1,
                  overflow: "scroll",
                  // top: -20,
                }}>
                <View>        
                  <Text style={{
                    color: "black",
                    fontSize: 30,
                    fontWeight: "900",
                  }}>Library</Text>
                </View>
              </View>
            </SafeAreaView>
          </Fragment>
        }
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={false}
        sections={SECTIONS}
        renderItem={({ item, section }) => {
          return <ListItem item={item} />;
        }}
    />
    </SafeAreaView>
  );
};

const SECTIONS = [
  {
    data: [
      {
        key: '1',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '2',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '3',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '4',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '5',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '6',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '7',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '8',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '9',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '10',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '11',
        subheader: 'Colour By Number',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
      {
        key: '12',
        subheader: 'Last One, I promise :)',
        level: 'Problem A (Grade 3/4)',
        theme: 'Theme(s): Algebra',
        date: 'May 24, 2021',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // sectionHeader: {
  //   fontWeight: '800',
  //   fontSize: 18,
  //   color: 'black',
  //   marginTop: 20,
  //   marginBottom: 5,
  // },
  header: {
    margin: 100,
    padding: 100,
    color: "purple",
    fontSize: 40,
  },
  item: {
    margin: 10,
  },
  itemText: {
    marginTop: 5,
    color: 'black',
  },
  itemSubheader: {
    marginTop: 5,
    fontWeight: '800',
    color: 'black',
  },
});

export default Library;
