import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Lose from './Lose'
import Win from './Win'

// Page that will serve as bulk of App. Will show current narrative + 4 options, then once chosen and next clicked, refresh and go again until either win or lose

interface Props {

}

/* 
TODO:
Create block for Story
Create flow for showing multiple options
Create Button + functionality that goes to next section only if option is chosen (takes current choice and refreshes page based on number chosen)
Create Button for one do over

*/


const Adventure: React.FC<Props> = () => {
    return (
        <View>

            <Button onPress={() => Alert.alert('next button pressed')} title='Next' accessibilityLabel='Press Button after choice is made to go to the next part of the story'/>
            <Button onPress={() => Alert.alert('do over button pressed, disable it')} title='Back' accessibilityLabel='Button that allows to go back for one do over choice'/>
        </View>
    )
}

export default Adventure