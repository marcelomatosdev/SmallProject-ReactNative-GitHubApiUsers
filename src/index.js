// import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#123456',
      alignItems: 'center',
      justifyContent: 'center',
   },
});

console.tron.warn('Hello World5');

export default function App() {
   return (
      <View style={styles.container}>
         <Text>Agora a parada ficou seria!</Text>
         <Text>Abaixo8</Text>
      </View>
   );
}
