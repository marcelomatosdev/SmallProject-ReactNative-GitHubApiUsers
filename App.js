import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});

export default function App() {
   return (
      <View style={styles.container}>
         <Text>Agora a parada ficou seria!</Text>
         <Text>Abaixo3</Text>
      </View>
   );
}
