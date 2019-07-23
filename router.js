import {createStackNavigator} from "react-navigation";
import Home from './component/home'
import Detail from './component/detail'

const RootStack = createStackNavigator({
    Home:{
        screen:Home
    },
    Detail:{
        screen:Detail
    }
})

export default RootStack