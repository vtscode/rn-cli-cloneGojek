import React from 'react';
import {View,Text,Image} from 'react-native';


const ScrollableItem = props => {
    return (
    <View style={{marginRight:16}}>
        <View style={{width:150,height:150}}>
            <Image source={props.img} style={{width:undefined,height:undefined,resizeMode:'cover',flex:1,borderRadius:10}}/>
        </View>
        <Text style={{fontSize:17,fontWeight:'bold',color:'#1c1c1c',marginTop:16}}>{props.title}</Text>
    </View>
    );
}

export default ScrollableItem;