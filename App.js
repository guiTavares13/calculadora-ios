import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Buttom from './src/components/buttom';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Programa para somar dois valores</Text>

    //   <Text>Valor 1: </Text>
    //   <TextInput></TextInput>
    //   <Text>Valor 2: </Text>
    //   <TextInput></TextInput>

    //   <TouchableOpacity style={styles.buttom}>
    //     <Text>Clique aqui para somar</Text>
    //   </TouchableOpacity>

    //   <Text>Resultado: </Text>
    //   <StatusBar style="auto" />
    // </View>
    
    <Buttom></Buttom>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttom: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 10
  }
});
