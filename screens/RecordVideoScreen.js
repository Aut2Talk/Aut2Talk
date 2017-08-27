import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,

} from 'react-native';
import Camera from 'react-native-camera';

export default class RecordVideoScreen extends Component {

  static navigationOptions = {
      title: 'Record Video',
  };

  constructor(props) {
        super(props);
        this.state = {
          isRecording: false,
          useFrontCamera: false,
        }
  }

  takePicture() {
      this.setState({isRecording : true, });
      console.log('picture taken');
      const options = {};
      //options.location = ...
      this.camera.capture({ metadata: options })
        .then((data) =>
        { 
          //console.log('DATA:');
          //console.log(data.path); 
          const { navigate } = this.props.navigation;
          navigate('Edit', {videoPath : data.path} );
        }
      )
        .catch(err => console.error(err));
  }

  stop() {
      this.setState({isRecording : false, });
      this.camera.stopCapture();
  }

  toggleCamera() {
      this.setState( {
        useFrontCamera: !this.state.useFrontCamera,
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureMode={Camera.constants.CaptureMode.video}
          type={this.state.useFrontCamera ? 
                Camera.constants.Type.front : Camera.constants.Type.back}
        >

          <Image 
                style = {camBarStyles.barImage} 
                source={require('./img/CamBarBottom.png')} 
          >
            <View style = {{flex:1}}>
            </View>

            <View style = {{flex:1,flexDirection:'row', justifyContent:'center'}}>
              <TouchableHighlight 
                style={camBarStyles.record} 
                onPress={this.state.isRecording? this.stop.bind(this) : this.takePicture.bind(this)}
                
              >
                <Image 
                  style = {camBarStyles.toggleImage} 
                  source={this.state.isRecording ? require('./img/Recording.png'):require('./img/ToRecord.png')} 
                /> 
              </TouchableHighlight>
            </View>

            <View style = {{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
              <TouchableHighlight 
                style={this.state.isRecording? camBarStyles.toggleOff:camBarStyles.toggle}
                onPress={this.toggleCamera.bind(this)} 
              >
                <Image 
                  style = {camBarStyles.recordImage} 
                  source={require('./img/ToggleCamera.png')} 
                /> 
              </TouchableHighlight>
            </View>

          </Image>

        </Camera>
      </View>
    );
  }

}

const camBarStyles = StyleSheet.create({
  barImage:{
    width:'100%',
    height:'15%',
    resizeMode:'stretch',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  record:{
    height: '80%',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  recordImage: {
    height: '100%',
    aspectRatio: 1,
    resizeMode : 'contain',
  },

  toggleOff:{
    display:'none',
  },
  
  toggle:{
    height: '40%',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight:'20%',
  },

  toggleImage: {
    height: '100%',
    aspectRatio: 1,
    resizeMode : 'contain',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});