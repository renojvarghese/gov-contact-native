import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchFormContainer } from './components/SearchFormContainer'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Open up App.js to start working on your app!</Text>
        <Text style={styles.textStyle}>Changes you make will automatically reload.</Text>
        <Text style={styles.textStyle}>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fed03a',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
      color:'#fff',
      fontSize: 24,
      fontWeight: "700",
      textAlign: 'center',
      marginBottom: 30,
  }
});
