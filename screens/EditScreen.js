import React, { Component } from 'react';
import {Text, StyleSheet, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import Video from 'react-native-video';

export default class EditScreen extends Component {
    static navigationOption = {
      title: 'Add',
    };

    constructor(props) {
        super(props);
        this.state = {
          Text_1: "Please enter emotion/activity:",
          Text_2: "Please choose an emoji to describe it:",
          title: '',
          emoji: '',
        }
    }

    render() {
      const { navigate } = this.props.navigation;
      const { params } = this.props.navigation.state;
      console.log('Godness');
      console.log(params);
      return (
        <View style = {styles.container}>
          <Video
            source={{uri: params.videoPath}}   // Can be a URL or a local file.
            // Store reference
            rate={1.0}
            resizeMode="contain"                       // 0 is paused, 1 is normal.
            volume={1.0}                            // 0 is muted, 1 is normal.
            muted={false}                           // Mutes the audio entirely.
            paused={false}                          // Pauses playback entirely.
            repeat={true}                           // Repeat forever.
            playInBackground={false}                // Audio continues to play when app entering background.
            style={styles.backgroundVideo}
          />
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

          <View style={styles.button}>
            <Button
              onPress={() => navigate('Home')}
              title = "Confirm"
            />
          </View>

        </View>
      );
    }

}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column',
  },

  backgroundVideo: {
    flex:1,
    width:'100%',
    backgroundColor: '#E9E9EF',
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
    backgroundColor: '#ffffff' 
  },
});
