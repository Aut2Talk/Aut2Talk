import React, { Component } from 'react';
import {Text, StyleSheet, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import Video from 'react-native-video';
import Backend from './DataModification';

export default class EditScreen extends Component {
    static navigationOption = {
      title: 'Add',
    };

    constructor(props) {
        super(props);
        this.state = {
          text: '',
          emoji: ''
        };
    }

    render() {
      const { navigate } = this.props.navigation;
      const { params } = this.props.navigation.state;

      return (
        <View style = {styles.container}>
          <Text style = {styles.baseText}>Please enter emotion/activity:</Text>
          <ScrollView 
            scrollEnabled={false}
            contentContainerStyle={styles.main}
          >
            <TextInput
              style={styles.textInput}
              placeholder="Emotion/Activity Name"
              onChangeText={(title) => {
                this.setState({text: title});
                }}
            />
          </ScrollView>
          <Text style = {styles.baseText}>Please choose an emoji to describe it:</Text>

          <ScrollView 
            scrollEnabled={false}
            contentContainerStyle={styles.main}
          >
            <TextInput
              style={styles.textInput}
              placeholder="Emoji"
              onChangeText={(emoji) => this.setState({emoji})}
            />
          </ScrollView>
          
          <Video
            source={{uri: params.videoPath}}   // Can be a URL or a local file.
            // Store reference
            rate={1.0}
            resizeMode="cover"                       
            volume={1.0}                            // 0 is muted, 1 is normal.
            muted={false}                           // Mutes the audio entirely.
            paused={false}                          // Pauses playback entirely.
            repeat={true}                           // Repeat forever.
            playInBackground={false}                // Audio continues to play when app entering background.
            style={styles.backgroundVideo}
          />

          <View style={styles.button}>
            <Button
              onPress={
                () => {
                   console.log(this.state);
                   Backend.appendData(this.state.emoji,params.videoPath,this.state.text);
                   
                   navigate('Home'); 
                   
                   } }
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
    marginTop:5,
  },


  baseText: {
    marginTop:12,
    marginBottom:6,
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

    marginVertical:5,
    paddingLeft:10,
    backgroundColor: '#ffffff' 
  },
});
