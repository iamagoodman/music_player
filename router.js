import {createStackNavigator,createAppContainer} from "react-navigation";
import Home from './component/home'
import Detail from './component/detail'

const SignedOutNavigator  = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            title:'home'
        }
    },
    Detail:{
        screen:Detail,
        navigationOptions:{
            title:'detail'
        }
    }
})

// export default RootStack
export const RootStack = createAppContainer(SignedOutNavigator);
