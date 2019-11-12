import React from 'react';
import {View,TextInput,Image} from 'react-native';

const SearchFeature = props =>{
    return (
        <View style={{marginHorizontal:17,flexDirection:'row'}}>
            <View style={{position:'relative',flex:1}}>
                <TextInput placeholder="what do you want to eat?" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius:25,height:40,fontSize:13,paddingLeft:45,paddingRight:20,backgroundColor:'white',marginRight:18}} />
                <Image source={props.imgSearch} style={{position:'absolute',top:7,left:12}} />
            </View>
            <View style={{width:35,alignItems:'center',justifyContent:'center'}}>
                <Image source={props.imgPromo} />
            </View>
        </View>
    );
}

export default SearchFeature;