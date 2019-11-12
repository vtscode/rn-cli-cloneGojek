import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';

const GoNews = props => {
    return (
    <View style={{paddingTop:17,paddingHorizontal:17}}>
        <View style={{position:'relative'}}>
            <Image source={require('../../../assets/dummy/sepak-bola.jpg')} style={{width:'100%', height:170,borderRadius:7}} />
            
            <View style={{width:'100%',height:'100%',position:'absolute',top:0,left:0,backgroundColor:'black',opacity:0.15,borderRadius:7}}></View>
            <View style={{width:60, height:15,position:'absolute',top:16,left:16}} >
                <Image source={require('../../../assets/logo/white.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>
            </View> 
        </View>
        <View style={{paddingTop:16,paddingBottom:20,borderBottomColor:'#e8e9ed',borderBottomWidth:1}}>
            <Text style={{fontSize:16,fontWeight:'bold',color:'#1c1c1c'}}>GO-NEWS</Text>
            <Text style={{fontSize:14,fontWeight:'normal',color:'#7a7a7a',marginBottom:11}}>Text lainnya utk dummy text,</Text>
            <TouchableOpacity style={{backgroundColor:'#61a756',paddingHorizontal:12,paddingVertical:11,alignSelf:'flex-end',borderRadius:4}}>
                <Text style={{fontSize:13,fontWeight:'bold',color:'white'}}>READ</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}

export default GoNews;
