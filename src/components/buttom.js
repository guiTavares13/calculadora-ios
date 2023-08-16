import { StyleSheet, Dimensions, Text, SafeAreaView, TouchableOpacity, View } from "react-native";


export default function buttom(simbol) {
  

    return(

        <SafeAreaView styles={styles.container}>
            <View styles={styles.buttom}>
                <Text>1</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    buttom: {
        width: Dimensions.get('window').width*0.2,
        height: Dimensions.get('window').height*0.2,

        borderRadius: 20,
        backgroundColor: 'gray'
    }
})