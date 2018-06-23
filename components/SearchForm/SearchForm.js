import React, { Component } from "react";
import { AppRegistry, TextInput, Button, View } from "react-native";
import { connect } from "react-redux";
import { url } from "./config";
import { fetchOfficialData } from "./SearchFormActions";
// export class SearchForm extends Component {
//     render() {
//         let input;
//         return (
//             <View>
//                 <TextInput
//                     placeholder="Please enter your address"
//                     onChangeText={text => {
//                         input = text;
//                     }}
//                 />
//                 <Button title="Search" onPress={() => console.log(input)} />
//             </View>
//         );
//     }
// }
const SearchForm = ({ dispatch }) => {
    let input = "";
    return (
        <View>
            <TextInput
                placeholder="Please enter your address"
                value={input}
                onChangeText={text => {
                    input = text;
                }}
            />
            <Button
                title="Search"
                onPress={() => {
                    if (!input.trim()) {
                        return;
                    }
                    fetchOfficialData(dispatch, url + input);
                }}
            />
        </View>
    );
};

export default connect()(SearchForm);
