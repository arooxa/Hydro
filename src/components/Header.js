import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Header = ({navigation, leftIconName, leftOnPress, title, rightIconName, rightOnPress}) => {
    let rightName = ""+rightIconName
    let leftName = ""+leftIconName
    return (
        <View style={Styles.HeaderStyle}>
            <TouchableOpacity style={Styles.leftComponent} 
                onPress={() => leftOnPress()}
            >
                {leftIconName ? <MaterialCommunityIcons name={leftName} color='white' size={26} /> : null}
            </TouchableOpacity >
            <Text style={Styles.textStyle}>
                {title}
            </Text>
            <TouchableOpacity style={Styles.rightComponent}
                onPress={() => rightOnPress()}
            >
                {rightIconName ? <MaterialCommunityIcons name={rightName} color='white' size={26} /> : null}
            </TouchableOpacity>
        </View>

    );
}

const Styles = new StyleSheet.create({

    HeaderStyle: {
        height: screenHeight * .12,
        width: screenWidth,
        paddingTop: screenHeight * 0.035,
        alignItems: 'center',
        backgroundColor: '#99CBD2',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10
    },
    rightComponent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: screenWidth * 0.05,
        marginTop: 10
    },
    leftComponent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: screenWidth * 0.05,
        marginTop: 10,
    },

});

export default Header;