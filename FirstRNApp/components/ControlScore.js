import React from 'react';
import { View, Text, StyleSheet}  from 'react-native';

import RoundButton from './RoundButton';

const ControlScore = (props) =>{
    let rev = props.reverse ? 'row-reverse' : 'row';
    return(
        <View style={ {flexDirection: rev, width: '50%', justifyContent: 'space-around', alignItems:'center'} }>
            <View style={ {flexDirection: 'column'} }>
                <RoundButton button_text='+' handle_press={ props.add_point } color={ props.team } />

                <RoundButton button_text='-' handle_press={ props.substract_point } color={ props.team } />
            </View>
            

            <Text style={styles.scoreText}>
                { props.points }
            </Text>

      </View>
    );
}


const styles = StyleSheet.create({
    scoreText:{
        color: '#F1FAEE',
        fontSize: 40,
    }
})

export default ControlScore;