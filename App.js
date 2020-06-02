import { createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"
import IndexScreen from "./src/screens/IndexScreen";
import reducer from "./src/reducer/MainReducer";
import React from 'react'
import {Provider} from 'react-redux'
import {Text,View} from 'react-native'
import {createStore} from 'redux'

import ShowScreen from "./src/screens/ShowScreen";
import EditScreen from "./src/screens/EditScreen";


const navigator = createStackNavigator({
IndexScreen: IndexScreen,
ShowScreen: ShowScreen,
EditScreen: EditScreen
},{
  initialRouteParams: "IndexScreen",
  defaultNavigationOptions:{
    title: "Home"
  }
})

const store = createStore(reducer)
const App = createAppContainer(navigator)
export default () =>{

  return <Provider store ={store}><App/></Provider>

            
          
}
