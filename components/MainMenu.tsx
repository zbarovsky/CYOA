import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Story from './Gameplay/Story'


/* 
TODO:
Title
Description
Start Button -> Story
*/

const MainMenu = () => {

    return (
        <View>
            <Text>Diseases of Civilizations</Text>
            <Text>Skate ipsum dolor sit amet, hanger casper slide noseblunt slide Memory Screen cab flip fast plant speed wobbles. Drop in fakie out slam pop shove-it 1080 Kevin Staab boned out. Judo air shoveit full pipe 1080 powerslide Gator Mark Anthony mini ramp. Kingpin goofy footed fast plant no comply front foot impossible lipslide.</Text>
            {/* TODO: create function for button press */}
            <Button onPress={() => Alert.alert('start button pressed')} title='start' accessibilityLabel='Start button'/>
        </View>
    )
}
export default MainMenu