import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from "react-native-scrollable-tab-view";
import Icon from 'react-native-vector-icons/Ionicons';

class MyAnotherScene extends Component {
  render() {
    return (
      <ScrollableTabView
      style={styles.container}
      renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
      tabBarPosition='overlayTop'
    >
      <ScrollView tabLabel='iOS'>
        <Icon name='logo-apple' color='black' size={300} style={styles.icon} />
        <Icon name='ios-phone-portrait' color='black' size={300} style={styles.icon} />
        <Icon name='logo-apple' color='#DBDDDE' size={300} style={styles.icon} />
        <Icon name='ios-phone-portrait' color='#DBDDDE' size={300} style={styles.icon} />
      </ScrollView>
      <ScrollView tabLabel='Android'>
        <Icon name='logo-android' color='#A4C639' size={300} style={styles.icon} />
        <Icon name='logo-android' color='black' size={300} style={styles.icon} />
        <Icon name='logo-android' color='brown' size={300} style={styles.icon} />
      </ScrollView>
    </ScrollableTabView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 5,
    flex: 1,
    marginTop: 64,
  },
  button: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  errorTextStyle: {
    fontSize: 15,
    alignSelf: "center",
    color: "black",
  },
});
export default MyAnotherScene;
