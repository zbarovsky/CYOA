import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import {traverse} from '../../Logic'
import Lose from './Lose'
import Win from './Win'

// Page that will serve as bulk of App. Will show current narrative + 4 options, then once chosen and next clicked, refresh and go again until either win or lose

export type Props = {
    id: number,
    nodes: object,
    redo: boolean
}

/* 
TODO:
Create block for Story
Create flow for showing multiple options
Create Button + functionality that goes to next section only if option is chosen (takes current choice and refreshes page based on number chosen)
Create Button for one do over

*/


const Adventure: React.FC<Props> = ({id, nodes, redo}) => {

    function next(id:number) {
        traverse(id)
    }

    function goBack(nodes) {

        if(redo) {
            traverse(nodes[0])
        }
        redo = false
    }

    return (
        <View>
            <Button onPress={() => next(id)} title='Next' accessibilityLabel='Press Button after choice is made to go to the next part of the story' />
            <Button onPress={() => goBack(nodes)} title='Back' accessibilityLabel='Button that allows to go back for one do over choice' disabled={redo} />
        </View>
    )
}

export default Adventure