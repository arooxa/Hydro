import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  AsyncStorage,
} from "react-native";
import Header from "../components/Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
var month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getCurrentMonth = () => {
  let d = new Date();
  return month_names[d.getMonth()];
};

const BudgetsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Header
        leftOnPress={null}
        leftIconName={null}
        title="Budgets"
        rightIconName="cog"
        rightOnPress={() => navigation.push("Settings")}
      />
      <Text>Budgets Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#9ED8E1",
    height: screenHeight,
  },
  cardContainer1: {
    height: screenHeight * 0.4,
    width: screenWidth * 0.9,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flexDirection: "column",
    marginTop: 20,
  },
});

export default BudgetsScreen;
