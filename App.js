import { createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"
import Home from "./src/screens/IndexScreen";

const navigator = createStackNavigator({
Home: Home
},{
  initialRouteParams: "SearchScreen",
  defaultNavigationOptions:{
    title: "Home"
  }
})