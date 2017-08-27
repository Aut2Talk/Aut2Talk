import { StyleSheet, Text, View, Button, Alert, AsyncStorage, TextInput } from 'react-native';

DEBUG_MESSAGE = "\nIf you see this message in production, please contact the development team.";

export default class Backend {
    static userData =[];

    static Aut2TalkError = (message) => {
        Alert.alert(message);
    }
    
    /**
    * This Function takes a string input, and returns the emoji if appropriate.
    * @param {*The string that the user inputs. We will only grab the first unicode character of the string.} userString
    */
    static emojiStringToEncodedEmoji = (emojiString) => {
        if (typeof(emojiString) !== "string") {
            throw Backend.Aut2TalkError("Sorry! Please input a string of one character!");
        } else if (emojiString.length === 0) {
            throw Backend.Aut2TalkError("Sorry! Please enter a single character or emoji! You entered nothing!");
        } else if (emojiString.length > 2) {
            throw Backend.Aut2TalkError("Sorry! Please enter a single character or emoji! You entered too many characters.");
        } else if (emojiString.length === 2) {
            // This is either an emoji (2 characters), or 2 ascii characters. Let us determine.
            if (emojiString.charCodeAt(0) === emojiString.codePointAt(0)) {
            // If the first character is the same as
            // This means that there are two characters
            throw Backend.Aut2TalkError("Sorry! Please enter a single character or emoji! You entered 2 characters.");
            }
        }
        return emojiString.codePointAt(0).toString();
    }

    /**
    * This converts a number representing an encoded emoji into a string!
    * @param {*This is a number, that encodes for the emoji or character that will be shown.} encodedEmoji
    */

    static encodedEmojiToEmojiString = (encodedEmoji) => {
        if (typeof(encodedEmoji) === "undefined") {
            throw Backend.Aut2TalkError("Sorry! Please ensure that a variable is passed to the function!" + Backend.DEBUG_MESSAGE);
        }
        if (typeof(encodedEmoji) !== "number") {
            throw Backend.Aut2TalkError("Sorry! Please ensure that the encodedEmoji is stored as a number." + Backend.DEBUG_MESSAGE);
        }
        if (encodedEmoji < 0 || encodedEmoji > 0x10FFFF) {
            throw Backend.Aut2TalkError("Sorry! Please ensure that the encodedEmoji is between 0 and 0x10FFF0." + Backend.DEBUG_MESSAGE);
        }
        return String.fromCodePoint(encodedEmoji);
    }


    static appendData = (emoji, videoPath, text) => {
        Backend.userData.push({
            emoji: emoji,
            videoPath: videoPath,
            text: text
        })
        Backend.save();
    }


    /**
    * This saves the values stored in the data
    */
    static save = async () => {
        console.log('save');
        const dataStructure = Backend.userData;
        const dataInJSON = JSON.stringify(dataStructure);
    
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
    static load = async () => {
        try {
            console.log('load');
            const dataInJSON = await AsyncStorage.getItem('@saveData');
            if (dataInJSON !== null){
            const dataStructure = JSON.parse(dataInJSON);
            // Update the data
            Backend.userData = dataStructure
            return dataStructure
            }
            return null;
        } catch (error) {

            console.log(error);
            //Alert.alert(Backend.DEBUG_MESSAGE);
            Alert.alert("Cannot Load Data");
        }
        return null;
    }

    static delete = (index) => {
        Backend.userData.splice(index, 1);
        Backend.save();
    }
}