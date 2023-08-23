import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, setState } from 'react-native';

import Buttom from './src/components/buttom';
import Calculator from './src/components/calculator';

export default function App() {

  return (
    <>
      <StatusBar backgroundColor='#000'/>
      <SafeAreaView style={styles.container}>
        <Calculator/>
      </SafeAreaView>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
