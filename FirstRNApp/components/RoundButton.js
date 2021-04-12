import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


const RoundButton = (props) =>{
    let btn_class = props.color == 'red' ? styles.buttonTeamR : styles.buttonTeamB;
    return(
        <TouchableOpacity
          style={ [styles.button, btn_class] }
          onPress={ () => props.handle_press(props.color) }
          >
              <Text style={ [styles.buttonText, btn_class]}>
               { props.button_text }
              </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        padding: 20,
        height: 100,
        width: 100,
        marginTop: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        borderWidth: 3,
        borderRadius: 100
      },
    
      buttonText: {
        fontSize: 36,
        textAlign: 'center',
        color: '#ffffff'
      },
    
      buttonTeamR:{
        color: '#E63946',
        borderColor: '#E63946'
      },
    
      buttonTeamB:{
        color: '#0e49b5',
        borderColor: '#0e49b5'
      }
});
export default RoundButton;