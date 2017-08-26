import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import Video from 'react-native-video';

export default class EditScreen extends Component {
<<<<<<< HEAD
  static navigationOption = {
    title: 'Add',
  };

  _onPressButton(data) {
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
=======
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
>>>>>>> MainFrontEnd
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Video
          source={require('../myVideo.mp4')}   // Can be a URL or a local file.
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


          <Text style = {styles.baseText}>{this.state.Text_3}</Text>
          <Button 
            onPress= {() => {navigate('RecordVideo')}}
            title = 'Record Video'
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
  container: {
    flex: 1,
  },

  baseText: {
    marginTop: 15,
    marginBottom: 8,
    marginHorizontal: 8,
    fontSize: 16,
    color: '#444',
  },

  textInput: {
    height: 45,
    width: '100%',

    borderTopWidth: 1,//StyleSheet.hairlineWidth, 
    borderBottomWidth: 1,//StyleSheet.hairlineWidth, 
    borderColor: '#ddd',

    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#ffffff'
  },

  button: {
    height: 45,
    width: '100%',

    borderTopWidth: 1,//StyleSheet.hairlineWidth, 
    borderBottomWidth: 1,//StyleSheet.hairlineWidth, 
    borderColor: '#ddd',

<<<<<<< HEAD
    marginTop: 20,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#ffffff'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
=======
    marginTop:20,
    paddingLeft:10,
    backgroundColor: '#ffffff' 
>>>>>>> MainFrontEnd
  },

});
