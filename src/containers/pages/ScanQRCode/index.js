import React from 'react';
import {View,Text} from 'react-native';

const IconWithText = (props) =>{
   return (
    <View>
        <View style={{width:60,height:60,backgroundColor:'green',borderRadius:60}}></View>
        <Text style={{maxWidth:70,alignSelf:'center',marginTop:10}}>{props.title}</Text>
    </View>
   );
}

const IconAction = () => {
    return (
        <View style={{width:35,height:35,backgroundColor:'grey',borderRadius:35}}>
        </View>
    )
}

const ScanQRCode = (props) => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'grey'}}>
                <View style={{flexDirection:'row',paddingHorizontal:16,marginTop:16,justifyContent:'space-between'}}>
                    <IconAction />
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:80}}>
                        <IconAction />
                        <IconAction />
                    </View>
                </View>
            </View>
            <View style={{height:200,backgroundColor:'red',paddingHorizontal:16}}>
                <View style={{alignItems:'center',marginBottom:18,marginTop:8}}>
                    <View style={{width:40,height:3,backgroundColor:'#e0e0e0',marginVertical:1}}></View>
                    <View style={{width:40,height:3,backgroundColor:'#e0e0e0',marginVertical:1}}></View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:24,fontWeight:'bold',color:'black'}}>ScanQRCode Page</Text>
                    <Text style={{fontSize:14,color:'#61a756',fontWeight:'bold'}}>Shortcut</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'flex-start',marginTop:14,width:'100%'}}>
                    <View style={{flexDirection:'row',alignItems:'flex-start',width:160,justifyContent:'space-between',paddingRight:12}}>
                        <IconWithText title="Phone Number" />
                        <IconWithText title="Gopay Code" />
                    </View>
                    <View style={{width:1,height:60,backgroundColor:'grey'}}></View>
                    <View style={{flex:1,paddingLeft:12}}>
                        <Text>Your recent gopay receivers will show here. no admin fees!</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ScanQRCode;