import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import Header from '../components/Header';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <Header leftOnPress={() => navigation.goBack()} leftIconName = "chevron-left" title="settings" rightIconName={null} rightOnPress={null}/>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    flex: 1,
    color: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  screenContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#9ED8E1',
    height: screenHeight
  },
});

export default SettingsScreen;
