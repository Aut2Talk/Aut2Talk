import React, { Component } from 'react';
import {Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native';

export default class EditScreen extends Component {
    static navigationOption = {
      title: 'Add',
    };

    _onPressButton (data) {
        Alert.alert('clicked button')
    }

    constructor(props) {
        super(props);
        this.state = {
          Text_1: "Please enter emotion/activity:",
          Text_2: "Please choose an image:",
          Text_3: "Please take a video:",
          title: '',
          emoji: '',
        }
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style = {styles.container}>
          <Text style = {styles.baseText}>{this.state.Text_1}</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Emotion/Activity Name"
            onChangeText={(title) => this.setState({title})}
          />
          
          <Text style = {styles.baseText}>{this.state.Text_2}</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Emoji"
            onChangeText={(emoji) => this.setState({emoji})}
          />


          <Text style = {styles.baseText}>{this.state.Text_3}</Text>
          <Button 
            onPress= {() => {navigate('RecordVideo')}}
            title = 'Record Video'
          />
          <View style={styles.button}>
            <Button
              onPress = {this._onPressButton}
              title = "Enter"
            />
          </View>

        </View>
      );
    }

}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  baseText: {
    marginTop:15,
    marginBottom:8,
    marginHorizontal:8,
    fontSize: 16,
    color: '#444',
  },

  textInput:{
    height: 45, 
    width: '100%', 

    borderTopWidth: 1,//StyleSheet.hairlineWidth, 
    borderBottomWidth: 1,//StyleSheet.hairlineWidth, 
    borderColor: '#ddd',

    paddingLeft:10,
    fontSize:16, 
    backgroundColor: '#ffffff' 
  },

  button:{
    height: 45, 
    width: '100%', 

    borderTopWidth: 1,//StyleSheet.hairlineWidth, 
    borderBottomWidth: 1,//StyleSheet.hairlineWidth, 
    borderColor: '#ddd',

    marginTop:20,
    paddingLeft:10,
    fontSize:16, 
    backgroundColor: '#ffffff' 
  },

});
