import React from 'react';
import {View,TouchableOpacity,Text,Image} from 'react-native';


const GoInfo = props =>{
    return(
    <View style={{padding:17,paddingBottom:0}}>
        <View style={{width:60, height:15,marginLeft:-4}} >
            <Image source={require('../../../assets/logo/gojek.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>
        </View>
        <Text style={{fontSize:17,fontWeight:'bold',color:'#1c1c1c',marginTop:15,marginBottom:20}}>Complete your profile</Text>
        <View style={{flexDirection:'row',marginBottom:16}}>
            <View>
                <Image source={require('../../../assets/dummy/facebook-connect.png')} style={{}} />
            </View>
            <View style={{marginLeft:16,flex:1}}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'#4a4a4a'}}>Connect to Facebbok</Text>
                <Text style={{fontSize:15,fontWeight:'normal',color:'#4a4a4a',width:'70%'}}>Log in faster without verification code</Text>

            </View>
        </View>
        <TouchableOpacity style={{backgroundColor:'#61a756',paddingHorizontal:12,paddingVertical:11,alignSelf:'flex-end',borderRadius:4}}>
            <Text style={{fontSize:10,fontWeight:'bold',color:'white'}}>CONNECT</Text>
        </TouchableOpacity>
        <View style={{borderBottomColor:'#e8e9ed',borderBottomWidth:1,marginTop:16}}></View>
    </View>
    );
}

export default GoInfo;