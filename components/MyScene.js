import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyScene extends Component {
  render() {
    return (
      <View>
        <Text style={styles.errorTextStyle}>
        New MiFIDII.com
        We are delighted to inform you that we have re-vamped our www.MiFIDII.com  website in order to:

        - Pivot to solutions and services
        - Host of a new ‘Non EU’ section (we will add to its contents)
        - Elevate its lead generating capabilities (more contact us forms etc)
        - Improved showcasing our social media content
        - Improved its internal search engine meta tagging and framework

        We hope that you will find it to be easier to use, navigate and ENCOURAGE you to share awareness of its existence with your colleagues, contacts and social media networks – aka help us spread the word to find out more visit: www.MiFIDII.com


        </Text>
      </View>
    );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'black',
  },
};

export default MyScene;
