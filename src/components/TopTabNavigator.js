import React from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BillsScreen from "../screens/BillsScreen";
import SubscriptionsScreen from "../screens/SubscriptionsScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import Header from "../components/Header";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({ navigation }) => {
  return (
    <NavigationContainer independent={TabRouter}>
      <Header
        leftOnPress={() => navigation.goBack()}
        leftIconName="chevron-left"
        title="Bills"
        rightIconName="cog"
        rightOnPress={() => navigation.push("Settings")}
      />
      <Tab.Navigator
        initialRouteName="Bills"
        tabBarOptions={{
          activeTintColor: "#FFFFFF",
          tabStyle: { backgroundColor: "#99CBD2" },
          pressOpacity: "30",
        }}
      >
        <Tab.Screen
          name="Bills"
          component={BillsScreen}
          options={{
            tabBarLabel: "Bills",
          }}
        />
        <Tab.Screen
          name="Payments"
          component={PaymentsScreen}
          options={{
            tabBarLabel: "Payments",
          }}
        />
        <Tab.Screen
          name="Subscriptions"
          component={SubscriptionsScreen}
          options={{
            tabBarLabel: "Subscriptions",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default TopTabNavigator;
