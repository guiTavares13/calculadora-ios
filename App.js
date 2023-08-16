import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, setState } from 'react-native';

import Buttom from './src/components/buttom';

export default function App() {

  // const [valor0, setValor0] = setState(0);
  // const [valor1, setValor1] = setState(1);
  // const [valor2, setValor2] = setState(2);
  // const [valor3, setvalor3] = setState(3);
  // const [valor4, setValor4] = setState(4);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputArea}>
        {/* area do input */}
        <TextInput>
          <Text style={styles.textInput}>Hello</Text>
        </TextInput>
      </View>
      <View style={styles.inputTypeArea}>
        <View style={styles.lineButtoms}>
          <Buttom {..."AC"}></Buttom>
          <Buttom {..."+-"}></Buttom>
          <Buttom {..."%="}></Buttom>
          <Buttom {..."/="}></Buttom> 
        </View>
        <View style={styles.lineButtoms}>
          <Buttom {..."7"}></Buttom>
          <Buttom {..."8"}></Buttom>
          <Buttom {..."9"}></Buttom>
          <Buttom {..."x"}></Buttom> 
        </View>
        <View style={styles.lineButtoms}>
          <Buttom {..."4"}></Buttom>
          <Buttom {..."5"}></Buttom>
          <Buttom {..."6"}></Buttom>
          <Buttom {..."-"}></Buttom> 
        </View>
        <View style={styles.lineButtoms}>
          <Buttom {..."1"}></Buttom>
          <Buttom {..."2"}></Buttom>
          <Buttom {..."3"}></Buttom>
          <Buttom {..."+"}></Buttom> 
        </View>
        <View style={styles.lineButtoms}>
          <TouchableOpacity style={styles.buttomZero}>
              <Text style={styles.textButtom}>0</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttomZero: {
    width: 140,
    height: 70,
    borderColor: 'black',
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20
  },
  lineButtoms: {
    flexDirection: 'row',
    margin: 5,
  },
  textInput: {
    color: '#fff',
    paddingVertical: 50
  },
  inputTypeArea: {
    flex: 0.75
  },
  inputArea: {
      flex: 0.25
  },
  buttom: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 10
  },
  textButtom:{
    color: '#fff'
  }
});
