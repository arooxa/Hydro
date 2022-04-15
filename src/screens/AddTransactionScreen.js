import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Header from "../components/Header";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const AddTransactionScreen = ({ navigation }) => {
  const [transaction, setTransaction] = useState({
    category: "defcategory",
    title: "deftitle",
    price: 0,
    date: "defdate",
  });
  /* const [category, setCategory] = useState('defaultcategory')
    const [title, setTitle] = useState('defaulttitle')
    const [price, setPrice] = useState('defaultprice')
    const [date, setDate] = useState('defaultdate') */

  const addTransaction = async () => {
    //SETTING ALL TRANSACTIONS TO LIST
    const currentListOfTransactions = await AsyncStorage.getItem(
      "Transactions"
    );
    if (currentListOfTransactions === null) {
      const listOfTransactions = [transaction];
      const stringVersion = JSON.stringify(listOfTransactions);
      await AsyncStorage.setItem("Transactions", stringVersion);
    } else {
      const currentListArray = JSON.parse(currentListOfTransactions);
      const newVersionOfArray = currentListArray;
      newVersionOfArray.push(transaction);
      const stringVersion = JSON.stringify(newVersionOfArray);
      await AsyncStorage.setItem("Transactions", stringVersion);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.screenContainer} behavior="height">
      <Header
        leftOnPress={() => navigation.goBack()}
        leftIconName="chevron-left"
        title="Add Transaction"
        rightIconName={null}
        rightOnPress={null}
      />
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.titleText}>Category</Text>
          <Text style={styles.descriptionText}>
            Trackable Categories: Shopping, Utilities, Bills, Entertainment,
            Saving, Transportation
          </Text>

          <TextInput
            style={styles.inputBox}
            onChangeText={(category) =>
              setTransaction({ ...transaction, category })
            }
          />
          <Text style={styles.titleText}>Title</Text>
          <Text style={styles.descriptionText}>
            ex. Groceries, Data Plan, Uber
          </Text>

          <TextInput
            style={styles.inputBox}
            onChangeText={(title) => setTransaction({ ...transaction, title })}
          />
          <Text style={styles.titleText}>Price</Text>
          <Text style={styles.descriptionText}>ex. 40, 36.42, 00.42</Text>

          <TextInput
            style={styles.inputBox}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(price) => setTransaction({ ...transaction, price })}
          />
          <Text style={styles.titleText}>Date</Text>
          <Text style={styles.descriptionText}>ex. 05/31/2021</Text>

          <TextInput
            style={styles.inputBox}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(date) => setTransaction({ ...transaction, date })}
          />
          <TouchableOpacity
            onPress={async () => {
              await addTransaction();
              navigation.push("RecentTransactions");
            }}
          >
            <View style={styles.transactionButtonContainer}>
              <Text style={styles.seeMoreText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    color: "#010101",
    justifyContent: "flex-end",
    alignItems: "center",
    fontFamily: "Gill Sans",
    marginTop: 20,
    marginLeft: 15,
  },
  descriptionText: {
    fontSize: 15,
    color: "#949494",
    justifyContent: "flex-end",
    alignItems: "center",
    fontFamily: "Gill Sans",
    marginTop: 5,
    marginLeft: 15,
  },
  inputBox: {
    borderColor: "black",
    marginTop: 10,
    marginLeft: 15,
    borderWidth: 1,
    height: 40,
    width: screenWidth * 0.8,
  },
  screenContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#9ED8E1",
    height: screenHeight,
  },
  cardContainer: {
    height: screenHeight * 0.72,
    width: screenWidth * 0.9,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flexDirection: "column",
    marginTop: 20,
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
    marginTop: 40,
  },
});

export default AddTransactionScreen;
