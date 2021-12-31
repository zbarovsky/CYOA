import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Adventure from './Adventure';

interface Props {

}

/* 
TODO:
Give background to story
Create Continue button function that leads to beginning of Game
*/


const Story: React.FC<Props> = () => {
    return (
        <View>
            <Text>Skate ipsum dolor sit amet, pivot betty Rodney Mullen blunt hang-up nose slide masonite. Pressure flip tail coffin 720 pogo rock and roll. Love Bowl Christ air yeah stalefish front foot impossible 720 kickflip. Wax hand rail roll-in bearings gap freestyle Neal Hendrix. 720 pressure flip disaster 900 speed wobbles street. 540 180 nose slide bruised heel feeble 50-50. Ollie hole 50-50 rad trucks Kevin Harris ollie. Slam half-cab nose slide risers nosepicker hand rail. Brooklyn Banks pivot casper slide bone air varial manual darkslide. Bluntslide bail 270 fastplant Dustin Dollin acid drop slam. Handplant rails shinner coping risers hip. Wade Speyer shinner durometer slap maxwell concave wheels rail slide. Drop in Kevin Harris boneless nosegrind face plant axle.</Text>
            <Button onPress={() => Alert.alert('continue button pressed')} title='Continue' accessibilityLabel='Continue button to start game'/>
        </View>
    )
}
export default Story