import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AsyncStorage } from 'react-native';

export default class App extends React.Component {
  render() {
    //this.load();
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Button
          onPress={this.save}
          title="Save"
          color="#841584"
          accessibilityLabel="Save"
        />

        <Button
          onPress={this.load}
          title="Load"
          color="#841584"
          accessibilityLabel="Load"
        />


      </View>
    );
  }

  userData = [
    {
      emoji: "\u0123\u1233",
      videoPath: "",
      text: ""
    }
  ]

  DEBUG_MESSAGE = "\nIf you see this message in production, please contact the development team.";

  /**
   * This Function takes a string input, and returns the emoji if appropriate.
   * @param {*The string that the user inputs. We will only grab the first unicode character of the string.} userString
   */
  emojiStringToEncodedEmoji = (emojiString) => {
    if (typeof(emojiString) !== "string") {
      throw Aut2TalkError("Sorry! Please input a string of one character!");
    } else if (emojiString.length === 0) {
      throw Aut2TalkError("Sorry! Please enter a single character or emoji! You entered nothing!");
    } else if (emojiString.length > 2) {
      throw Aut2TalkError("Sorry! Please enter a single character or emoji! You entered too many characters.");
    } else if (emojiString.length === 2) {
      // This is either an emoji (2 characters), or 2 ascii characters. Let us determine.
      if (emojiString.charCodeAt(0) === emojiString.codePointAt(0)) {
        // If the first character is the same as
        // This means that there are two characters
        throw Aut2TalkError("Sorry! Please enter a single character or emoji! You entered 2 characters.");
      }
    }
    return emojiString.codePointAt(0);
  }

  /**
   * This converts a number representing an encoded emoji into a string!
   * @param {*This is a number, that encodes for the emoji or character that will be shown.} encodedEmoji
   */
  encodedEmojiToEmojiString = (encodedEmoji) => {
    if (typeof(encodedEmoji) !== "number") {
      throw Aut2TalkError("Sorry! Please ensure that the encodedEmoji is stored as a number." + this.DEBUG_MESSAGE);
    }
    if (encodedEmoji < 0 || encodedEmoji > 0x10FFFF) {
      throw Aut2TalkError("Sorry! Please ensure that the encodedEmoji is between 0 and 0x10FFF0." + this.DEBUG_MESSAGE);
    }
    return String.fromCodePoint(encodedEmoji);
  }

  appendData = (emoji, videoPath, text) => {
    this.userData.push({
      emoji: emoji,
      videoPath: videoPath,
      text: text
    })
    this.save();
  }

  /**
   * This saves the values stored in the data
   */
  save = async () => {
    const dataStructure = this.userData;
    const dataInJSON = JSON.stringify(dataStructure);
    Alert.alert(dataInJSON);
    try {
      await AsyncStorage.setItem('@saveData', dataInJSON);
    } catch (error) {
      console.log(error);
      Alert.alert("Cannot Save Data");
    }
    return true;
  }

  /**
   * This loads the data
   */
  load = async () => {
    try {
      const dataInJSON = await AsyncStorage.getItem('@saveData');
      if (dataInJSON !== null){
        const dataStructure = JSON.parse(dataInJSON);
        // Update the data
        this.userData = dataStructure
        return dataStructure
      }
      return null;
    } catch (error) {

      console.log(error);
      //Alert.alert(this.DEBUG_MESSAGE);
      Alert.alert("Cannot Load Data");
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
