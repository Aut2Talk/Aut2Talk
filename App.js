import React from 'react';
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
        <Text style={styles.title}>{this.state.name}</Text>
        <Text>Video goes here</Text>
        <Button 
          onPress={this.backButtonPressed}
          title='Back'
          style={styles.backButton}
        />
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
  }
});
