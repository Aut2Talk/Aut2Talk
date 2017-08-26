import React, { Component } from 'react';
import {Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import Camera from 'react-native-camera';

export default class RecordVideoScreen extends Component {
    static navigationOption = {
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
          console.log('DATA:' + data) 
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
        <Text style={styles.capture} onPress={this.toggleCamera.bind(this)} >
          {this.state.useFrontCamera ? 'back camera': 'front camera'}
        </Text>
            <Text 
              style={styles.capture}
              onPress={this.state.isRecording? this.stop.bind(this) : this.takePicture.bind(this)}
              >
                {this.state.isRecording ? 'stop' : 'start'}
              </Text>
          </Camera>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});