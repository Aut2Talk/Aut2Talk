import React, {
  Component,
} from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  Alert,
} from 'react-native'
 
import SudokuGrid from 'react-native-smart-sudoku-grid'
import { StackNavigator} from 'react-navigation';


import image_cash from './img/BlueIcon.png'

const dataList = [
  {
    icon: image_cash,
    title: 'cash',
  },
  {
    icon: image_cash,
    title: 'credit',
  },
  {
    icon: image_cash,
    title: 'cash',
  },
  {
    icon: image_cash,
    title: 'credit',
  },
]
 
const columnCount = 3
 
export default class HomeScreen extends Component {

    static navigationOptions = {
      title: 'Aut2Talk',
    };
 
    render () {
        const { navigate } = this.props.navigation;
        
        return (
          <View style={mainUIStyles.wholeScreen}>

            <ScrollView style={mainUIStyles.scrollView} showsVerticalScrollIndicator={false}>
                <SudokuGrid
                    containerStyle={{}}
                    columnCount={columnCount}
                    dataSource={dataList}
                    renderCell={this._renderGridCell}
                />
            </ScrollView>

            <Image style={toolbarStyles.toolbar} source={require('./img/Toolbar.png')}>
              <TouchableHighlight onPress={() => navigate('Edit')} style = {toolbarStyles.toolbarButton} underlayColor="white">
                <Image style = {toolbarStyles.toolbarButtonImage} source={require('./img/Edit.png')} /> 
              </TouchableHighlight>
              
              <TouchableHighlight onPress={() => navigate('Edit')} style = {toolbarStyles.toolbarButton} underlayColor="white">
                <Image style = {toolbarStyles.toolbarButtonImage} source={require('./img/Add.png')} /> 
              </TouchableHighlight>

              <TouchableHighlight onPress={() => navigate('Edit')} style = {toolbarStyles.toolbarButton} underlayColor="white">
                <Image style = {toolbarStyles.toolbarButtonImage} source={require('./img/Delete.png')} />  
              </TouchableHighlight> 
             </Image>

          </View>
        )
    }
 
    _renderGridCell = (data, index, list) => {
        return (
            <TouchableHighlight style={gridStyles.button} underlayColor={'#eee'} onPress={ this._onPressCell.bind(this, data) } >
                <View style={gridStyles.buttonView}>
                  <Image style = {gridStyles.buttonImage} source={data.icon} /> 
                  <Text style = {gridStyles.buttonText} >{data.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }
 
    _onPressCell (data) {
        Alert.alert('clicked ' + data.title)
    }

    _onPressAdd() {
        navigate('Edit')
    }
 
}



const mainUIStyles = StyleSheet.create({
  wholeScreen: {
   flex: 1,
   flexDirection:'column',
   //marginTop: 20,
   //backgroundColor: '#FFFFFF',
  },

  scrollView: {
   flex: 1,
   flexDirection:'column',
   //backgroundColor: '#AAAAAA',
  },
})

const gridStyles = StyleSheet.create({
  button: {
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: '15%',
    marginTop: '10%',
    marginBottom: '5%',
    // backgroundColor: '#444444',
  },

  buttonView: {
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: '#000000',
  },

  buttonImage:{
    flex: 1,
    width: '100%',
    aspectRatio: 1,
    resizeMode : 'contain',
    // backgroundColor: 'blue',
  },

  buttonText:{
    color: '#2196F3',
    fontSize: 16,
    margin: 5,
    // backgroundColor: 'yellow',
  }
})


const toolbarStyles = StyleSheet.create({
  toolbar:{
   flex: 0.082,
   width: '100%',
   resizeMode : 'stretch',

   flexDirection:'row',
   justifyContent: 'space-around',
   alignItems: 'center',
  },

  toolbarButton: {
    flex: 1,
    height: '100%',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#444444',
  },

  toolbarButtonImage:{
    height: '60%',
    aspectRatio: 1,
    resizeMode : 'contain',
    //backgroundColor: 'blue',
  },

})