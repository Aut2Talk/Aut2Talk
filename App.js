import React from 'react';
import { StackNavigator } from 'react-navigation';

import EditScreen from './screens/EditScreen'
import HomeScreen from './screens/HomeScreen'

const App = StackNavigator({
  Home:{screen:HomeScreen},
  Edit:{screen:EditScreen},
});

export default App;