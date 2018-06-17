import React, { Component } from 'react';

export class SearchForm extends Component {
  render() {
    return (
        <View >
         <TextInput
             placeholder="Please enter your address"
             />
         <Button
           title="Search"
         />
       </View>
    );
  }
}
