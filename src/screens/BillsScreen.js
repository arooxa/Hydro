import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
} from "react-native";
import Header from "../components/Header";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const BillsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>BILLS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#9ED8E1",
    height: screenHeight,
    paddingBottom: 20,
  },
});

export default BillsScreen;
