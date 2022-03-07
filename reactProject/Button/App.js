import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Button = () => (
<TouchableHighlight style={styles.button}>
<Text>Hello World</Text>
</TouchableHighlight>
)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Practica 2 Hugo Cortijo Navascues</Text>
      <StatusBar style="auto" />
	<Button/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#005473',
  }
});
