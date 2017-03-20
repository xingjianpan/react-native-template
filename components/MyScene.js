import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyScene extends Component {
  render() {
    return (
      <View>
        <Text style={styles.errorTextStyle}> Hello world from MyScene</Text>
      </View>
    );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default MyScene;
