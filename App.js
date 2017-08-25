import React from 'react';
import Video from 'react-native-video';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'This is the name of the emotion / activity',
    }
  }

  backButtonPressed() {
    console.log("PRESSED");
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>{this.state.name}</Text>
        <Text>Video goes here</Text> */}
        <Video 
          source={require('./myVideo.mp4')}   // Can be a URL or a local file.
                                             // Store reference
                                             rate={1.0}       
                                             resizeMode="cover"                       // 0 is paused, 1 is normal.
       volume={1.0}                            // 0 is muted, 1 is normal.
       muted={false}                           // Mutes the audio entirely.
       paused={false}                          // Pauses playback entirely.
       repeat={true}                           // Repeat forever.
       playInBackground={false}                // Audio continues to play when app entering background.
       style={styles.backgroundVideo} 
       />
        {/* <Button 
          onPress={this.backButtonPressed}
          title='Back'
          style={styles.backButton}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50, 
  },
  myStyle1: {
    color: 'red',
  }, 
  title: {
    fontWeight: 'bold', 
    fontSize: 20
  },
  backButton: {
    position: 'absolute', 
    left: 0,
    bottom: 0,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
