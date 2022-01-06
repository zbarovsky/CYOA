import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

interface Props {

}

/* 
TODO:
Create multiple you lose endings
create way to show specific ending
create play again + MM buttons and add functionality to them
*/

const Lose: React.FC<Props> = () => {
    return (
        <View>
            <Text>Game Over</Text>
            <Button onPress={() => Alert.alert('Play again button pressed')} title='Play Again' accessibilityLabel='Button to Play Game Again'/>
            <Button onPress={() => Alert.alert('MM button pressed')} title='Main Menu' accessibilityLabel='Button to return to main menu' />
        </View>
    )
}
export default Lose