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
// import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const RecentTransactionsScreen = ({ navigation, props }) => {
  const [transactionList, setTransactionList] = useState([]);
  const [transactionPrices, setTransactionPrices] = useState({
    total: 0,
    shopping: 0,
    utilities: 0,
    bills: 0,
    entertainment: 0,
    transportation: 0,
    saving: 0,
    other: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  //currentTransaction - variable representing array from other screen to set in transaction state

  // const getTransaction = setTransaction(currentTransaction);

  const getListOfTransactions = async () => {
    const listOfTransactions = await AsyncStorage.getItem("Transactions");
    if (listOfTransactions !== null) {
      const listToArray = JSON.parse(listOfTransactions);
      listToArray.reverse();
      setTransactionList(listToArray);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const updatePriceTotals = () => {
    console.log("IM UPDATING PRICES");
    for (let i = 0; i < transactionList.length; i++) {
      let currentCategory = transactionList[i].category;
      let currentPrice = transactionList[i].price;
      let newPrice = transactionPrices.total + currentPrice;
      console.log(newPrice);
      setTransactionPrices({ total: newPrice });
      //issue is right here, newPrice  is still equal to none because of the issue
      console.log(transactionPrices.total);
    }
    console.log("IM OUTSIDE");
  };

  useEffect(async () => {
    getListOfTransactions();
    updatePriceTotals();
  }, []);

  if (isLoading === true) {
    return <Text>its loading</Text>;
  } else {
    return (
      <View style={styles.screenContainer}>
        <Header
          leftOnPress={null}
          leftIconName={null}
          title="Recent Transactions"
          rightIconName="plus"
          rightOnPress={() => navigation.push("AddTransaction")}
        />
        <View style={styles.cardContainer1}>
          <FlatList
            keyExtractor={(item) => item}
            data={transactionList}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 15,
                    marginTop: 15,
                    paddingBottom: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: "#707070",
                  }}
                >
                  <View style={styles.iconBackground}>
                    <MaterialCommunityIcons
                      name="cart"
                      color="#7D7D7D"
                      size={25}
                      style={styles.iconStyle}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        flex: 0.5,
                        justifyContent: "center",
                      }}
                    >
                      <Text style={styles.titleText}>{item.title}</Text>
                      <Text style={styles.categoryText}>{item.category}</Text>
                    </View>

                    <View
                      style={{
                        flex: 0.5,
                        justifyContent: "center",
                        marginRight: 15,
                      }}
                    >
                      <Text style={styles.priceText}>{"$" + item.price}</Text>
                      <Text style={styles.dateText}>{item.date}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
};

export default RecentTransactionsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#9ED8E1",
    height: screenHeight,
  },
  cardContainer1: {
    height: screenHeight * 0.8,
    width: screenWidth * 0.9,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flexDirection: "column",
    marginTop: 20,
  },
  titleText: {
    fontSize: 15,
    color: "#010101",
    alignSelf: "flex-start",
    fontFamily: "Gill Sans",
    marginTop: 5,
    marginLeft: 15,
  },
  categoryText: {
    fontSize: 15,
    color: "#949494",
    alignSelf: "flex-start",
    fontFamily: "Gill Sans",
    marginTop: 5,
    marginLeft: 15,
  },
  priceText: {
    fontSize: 15,
    color: "#010101",
    fontFamily: "Gill Sans",
    alignSelf: "flex-end",
    marginTop: 5,
  },
  dateText: {
    fontSize: 15,
    color: "#949494",
    alignSelf: "flex-end",
    fontFamily: "Gill Sans",
    marginTop: 5,
  },
  iconBackground: {
    backgroundColor: "#E6E2E2",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  iconStyle: {
    alignSelf: "center",
  },
});
