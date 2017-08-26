import React, { Component } from 'react';
import {Text, StyleSheet, View, TextInput, Button } from 'react-native';

export default class EditScreen extends Component {
    static navigationOption = {
      title: 'Add',
    };

    constructor(props) {
        super(props);
        this.state = {
          Text_1: "Please Enter Emotion/Activity:",
          Text_2: "Please Choose Image:",
          Text_3: "Please take video:",
          text: '',
          emoji: '',
        }
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style = {styles.container}>
          <Text style = {styles.baseText}>
            <Text>{this.state.Text_1}</Text>
          </Text>

          <TextInput
            style={{height: 80, width: 640, fontSize:40, backgroundColor: '#ffffff' }}
            placeholder="Type here!"
            onChangeText={(text) => this.setState({text})}
          />
          
          <Text style = {styles.baseText}>
            <Text>{this.state.Text_2}</Text>
          </Text>

          <TextInput
            style={{height: 80, width: 640, fontSize:40, backgroundColor: '#ffffff' }}
            placeholder="Choose Emoji!"
            onChangeText={(text_1) => this.setState({text_1})}
          />


          <Text style = {styles.baseText}>
            <Text>{this.state.Text_3}</Text>
          </Text>

          <Button
            onPress = {this.onPressLearnMore}
            title = "Enter"
            color = "#ffffff"
          />

          <Button
            onPress = {this.onPressLearnMore}
            title = "Cancel"
            color = "#ffffff"
          />
        </View>
      );
    }

}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 30,
    backgroundColor: '#AAAAAA',
  },

  baseText: {
    color: '#0000ff',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
