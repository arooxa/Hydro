import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Header from "../components/Header";

const CalendarScreen = ({ navigation }) => {
  return (
    <View>
      <Header
        leftOnPress={null}
        leftIconName={null}
        title="calendar"
        rightIconName="cog"
        rightOnPress={() => navigation.push("Settings")}
      />
      <Text style={styles.text}>CalendarScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CalendarScreen;
