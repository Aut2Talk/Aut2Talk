import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

export default class PlayVideoScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: `${navigation.state.params.text} ${navigation.state.params.emoji}`,
    });

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style = {styles.container}>
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
        </View>
      );
    }

}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
  },

  backgroundVideo: {
    flex:1,
    //aspectRatio:0.5625,//1.778,
    height:'100%',
    backgroundColor: '#E9E9EF',
    //backgroundColor: '#ffffff',
  },
});
