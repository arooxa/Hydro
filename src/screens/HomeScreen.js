import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import MiniTotalBudget from "../components/MiniTotalBudget";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <Header
        leftOnPress={null}
        leftIconName={null}
        title="hydro"
        rightIconName="cog"
        rightOnPress={() => navigation.push("Settings")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MiniTotalBudget />

        <View style={styles.cardContainerTransactions}>
          <Text style={styles.cardHeaderText}>Recent Transactions</Text>
          <Text style={styles.cardDescriptionText}>
            We'll help you organize your transactions so you can keep better
            tabs on your spending.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.push("RecentTransactions")}
          >
            <View style={styles.transactionButtonContainer}>
              <Text style={styles.seeMoreText}>See All</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainerBills}>
          <Text style={styles.cardHeaderText}>Upcoming Bills</Text>
          <Text style={styles.cardDescriptionText}>
            We'll keep up with due dates so you don't have to.
          </Text>
          <TouchableOpacity onPress={() => navigation.push("TopTab")}>
            <View style={styles.transactionButtonContainer}>
              <Text style={styles.seeMoreText}>Go to Bills</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: 70 }}></View>
      </ScrollView>
    </View>
  );
};

{
  /* <TouchableOpacity onPress={() => navigation.push("Budgets")}>
            <View style={styles.transactionButtonContainer}>
              <Text style={styles.seeMoreText}>See Budget</Text>
            </View>
          </TouchableOpacity> */
}

const styles = StyleSheet.create({
  cardHeaderText: {
    fontSize: 20,
    color: "black",
    justifyContent: "flex-end",
    alignItems: "center",
    fontFamily: "Gill Sans",
    marginTop: 15,
    marginLeft: 15,
  },
  cardDescriptionText: {
    fontSize: 15,
    color: "#949494",
    justifyContent: "flex-end",
    alignItems: "center",
    fontFamily: "Gill Sans",
    marginTop: 5,
    marginLeft: 15,
    marginRight: 30,
  },
  seeMoreText: {
    fontSize: 20,
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    fontFamily: "Gill Sans",
  },
  transactionButtonContainer: {
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    alignContent: "flex-start",
    backgroundColor: "#99CBD2",
    height: 45,
    width: screenWidth * 0.8,
    borderRadius: 20,
  },
  screenContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#9ED8E1",
    height: screenHeight,
    paddingBottom: 20,
  },
  cardContainerTransactions: {
    height: screenHeight * 0.4,
    width: screenWidth * 0.9,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flexDirection: "column",
    marginTop: 20,
  },
  cardContainerBills: {
    height: screenHeight * 0.2,
    width: screenWidth * 0.9,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
