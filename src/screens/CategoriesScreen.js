import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Header from "../components/Header";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View>
      <Header
        leftOnPress={null}
        leftIconName={null}
        title="categories"
        rightIconName="cog"
        rightOnPress={() => navigation.push("Settings")}
      />
      <Text style={styles.text}>CategoriesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CategoriesScreen;
