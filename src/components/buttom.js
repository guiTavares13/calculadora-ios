import { useState } from "react";
import { StyleSheet, Dimensions, Text, TouchableHighlight } from "react-native";


export default (props) => {

    const stylesButtons = [styles.button];

    if(props.buttomOperations) {
        stylesButtons.push(styles.buttomOperations);
    }

    if(props.buttonTop) {
        stylesButtons.push(styles.buttonTop)
    }

    if(props.buttonDouble) {
        stylesButtons.push(styles.buttonDouble)
    }
    
    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButtons}>{props.label}</Text>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width / 4 - 15,
        height: Dimensions.get('window').height / 4 - 80,
        fontSize: 35,
        padding: 15,
        borderRadius: 50,
        backgroundColor: '#333',
        textAlign: 'center',
        marginLeft: 15,
        marginTop: 15
    },
    buttomOperations: {
        backgroundColor: "#e67e00"
    },
    buttonTop: {
        backgroundColor: '#b3b3b3',
        color: '#000',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width/4) * 2 - 15
    }
})