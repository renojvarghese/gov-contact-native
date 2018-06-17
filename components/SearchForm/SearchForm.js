import React, { Component } from 'react';
import { AppRegistry, TextInput, Button, View } from 'react-native';
export class SearchForm extends Component {
  render() {
    return (
        <View >
         <TextInput
             placeholder="Please enter your address"
             />
         <Button
           title="Search"
           onPress={() => ''}
         />
       </View>
    );
  }
}
AppRegistry.registerComponent('SearchForm', () => AppRegistry);
