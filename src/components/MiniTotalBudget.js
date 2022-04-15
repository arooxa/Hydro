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
import FlipCard from "react-native-flip-card";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const MiniTotalBudget = () => {
  const [tempTotalBudget, setTempTotalBudget] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const setMonthlyBudget = async () => {
    const tempBudgetCheck = await AsyncStorage.getItem(
      getCurrentMonthAndYear()
    );
    if (tempBudgetCheck === null) {
      setTotalBudget(tempTotalBudget);
      const stringVersion = tempTotalBudget + "";
      await AsyncStorage.setItem(getCurrentMonthAndYear(), stringVersion);
      setIsLoading(false);
    } else if (tempTotalBudget !== 0) {
      setTotalBudget(tempTotalBudget);
      const stringVersion = tempTotalBudget + "";
      await AsyncStorage.setItem(getCurrentMonthAndYear(), stringVersion);
      setIsLoading(false);
    } else {
      setTotalBudget(parseInt(tempBudgetCheck));
      await AsyncStorage.setItem(getCurrentMonthAndYear(), tempBudgetCheck);
      setIsLoading(false);
    }
  };

  useEffect(async () => {
    setMonthlyBudget();
  }, []);

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
  const getCurrentMonthAndYear = () => {
    let d = new Date();
    let combined = "" + d.getMonth() + "/" + d.getFullYear();
    return combined;
  };

  const getRemainingDaysInMonth = () => {
    let date = new Date();
    let time = new Date(date.getTime());
    time.setMonth(date.getMonth() + 1);
    time.setDate(0);
    let days =
      time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
    return days + "";
  };

  if (isLoading === true) {
    return <Text>its loading</Text>;
  } else {
    return (
      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd) => {
          console.log("isFlipEnd", isFlipEnd);
        }}
      >
        <View style={styles.cardContainerBudgets}>
          <Text style={styles.cardHeaderText}>{getCurrentMonth()} budget</Text>
          <Text style={styles.cardDescriptionText}>
            Looking good! You have ${totalBudget} left for the next{" "}
            {getRemainingDaysInMonth()} days.
          </Text>
        </View>

        <View style={styles.cardContainerBudgets}>
          <Text style={styles.cardHeaderText}>
            Your budget for this month is currently ${totalBudget}
          </Text>
          <Text style={styles.cardDescriptionText}>
            Use the box below if you would like to change it
          </Text>
          <TextInput
            style={styles.inputBox}
            clearTextOnFocus={true}
            placeholder="Choose a new budget"
            placeholderTextColor="#949494"
            value={tempTotalBudget}
            onChangeText={setTempTotalBudget}
            onSubmitEditing={() => setMonthlyBudget()}
          ></TextInput>
        </View>
      </FlipCard>
    );
  }
};

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
  cardContainerBudgets: {
    height: screenHeight * 0.175,
    width: screenWidth * 0.9,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flexDirection: "column",
    marginTop: 20,
  },
  inputBox: {
    borderColor: "black",
    marginTop: 10,
    marginLeft: 15,
    borderWidth: 1,
    height: 40,
    width: screenWidth * 0.8,
  },
});

export default MiniTotalBudget;
