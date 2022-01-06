import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";


interface Props {

}

/* 
Todo: 
Create win scenario + ending
create functionatlity for buttons to play again + go to MM
*/


const Win: React.FC<Props> = () => {
    return (
        <View>
            <Text>Yay you win!</Text>
            <Button onPress={() => Alert.alert('Play again button pressed')} title='Play Again' accessibilityLabel='Button to Play Game Again'/>
            <Button onPress={() => Alert.alert('MM button pressed')} title='Main Menu' accessibilityLabel='Button to return to main menu' />
        </View>
    )
}
export default Win