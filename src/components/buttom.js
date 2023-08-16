import { useState } from "react";
import { StyleSheet, Dimensions, Text, SafeAreaView, TouchableOpacity, View } from "react-native";


export default function buttom(props) {
    
    const [ valor1, setValor1 ] = useState();

    charButtom = props[0]
    console.log(charButtom)
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => {}}style={styles.buttom}>
                <Text style={styles.textButtom}>{charButtom}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: "center",
    },
    buttom: {
        width: 80,
        height: 80,
        borderColor: 'black',
        borderRadius: 50,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 5
    },
    textButtom: {
        color: '#fff'
    }
})