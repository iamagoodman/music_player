import React,{Component} from 'react'
import { View,Text,Button } from 'react-native'
export default class Home extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>home page</Text>
                <Button title="Go detail page" onPress={()=>this.props.navigation.push('detail')}></Button>
                <Button title="Go back" onPress={()=>this.props.navigation.goBack()}></Button>
            </View>
        )
    }
}