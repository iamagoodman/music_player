import React,{Component} from 'react'
import {Image} from 'ract-native'
export default class ImageBanana extends Component {
    render(){
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic.uri} style={{width:200,height:120}}/>
        );
    }
}