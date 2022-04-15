import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommonActions, NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  headerBackButton,
} from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./src/screens/HomeScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import GoalsScreen from "./src/screens/GoalsScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import RecentTransactionsScreen from "./src/screens/RecentTransactionsScreen";
import AddTransactionScreen from "./src/screens/AddTransactionScreen";
import BudgetsScreen from "./src/screens/BudgetsScreen";
import TopTabNavigator from "./src/components/TopTabNavigator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  HeaderColor: {
    color: "blue",
    fontSize: 50,
  },
});

//STACK NAVIGATOR STARTS HERE

const HomeStack = createStackNavigator();

function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <HomeStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <HomeStack.Screen
        name="RecentTransactions"
        component={RecentTransactionsScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <HomeStack.Screen
        name="AddTransaction"
        component={AddTransactionScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <HomeStack.Screen
        name="Budgets"
        component={BudgetsScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <HomeStack.Screen
        name="TopTab"
        component={TopTabNavigator}
        options={{
          gestureEnabled: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

const CategoriesStack = createStackNavigator();

function CategoriesStackScreen({ navigation }) {
  return (
    <CategoriesStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#9ED8E1",
        },
        headerShown: false,
      }}
    >
      <CategoriesStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <CategoriesStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </CategoriesStack.Navigator>
  );
}

const GoalsStack = createStackNavigator();

function GoalsStackScreen({ navigation }) {
  return (
    <GoalsStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#9ED8E1",
        },
        headerShown: false,
      }}
    >
      <GoalsStack.Screen
        name="Goals"
        component={GoalsScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <GoalsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </GoalsStack.Navigator>
  );
}

const CalendarStack = createStackNavigator();

function CalendarStackScreen({ navigation }) {
  return (
    <CalendarStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#9ED8E1",
        },
        headerShown: false,
      }}
    >
      <CalendarStack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <CalendarStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </CalendarStack.Navigator>
  );
}

//BOTTOM TAB NAVIGATOR STARTS HERE
const Tabs = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Home2"
        inactiveColor="#A1A1A1"
        activeColor="#000000"
        barStyle={{ backgroundColor: "#FFFFFF" }}
      >
        <Tabs.Screen
          name="Home2"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="Categories2"
          component={CategoriesStackScreen}
          options={{
            tabBarLabel: "Categories",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="border-all"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Goals2"
          component={GoalsStackScreen}
          options={{
            tabBarLabel: "Goals",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="format-list-checks"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Calendar2"
          component={CalendarStackScreen}
          options={{
            tabBarLabel: "Calendar",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="calendar-month-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
