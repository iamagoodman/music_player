import React,{Component} from 'react'
import {Image} from 'react-native'
import {tools} from './../common/tools/index'
export default class ImageBanana extends Component {
    render(){
        console.log(tools)
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={{uri:pic.uri}} style={{width:200,height:120}}/>
        );
    }
}