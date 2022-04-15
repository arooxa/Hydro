import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Header from "../components/Header";

const GoalsScreen = ({ navigation }) => {
  return (
    <View>
      <Header
        leftOnPress={null}
        leftIconName={null}
        title="goals"
        rightIconName="cog"
        rightOnPress={() => navigation.push("Settings")}
      />
      <Text style={styles.text}>GoalsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default GoalsScreen;
