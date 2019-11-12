import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

const MainFeature = props =>{
    return(
        <View style={styles.wrapper}>
            <View style={styles.imgstyle}>
                <Image source={props.img} />
            </View>
            <Text style={styles.textstyle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        width:'25%',
        alignItems:'center',
        marginBottom:20
    },
    imgstyle:{
        width:58,
        height:58,
        borderWidth:1,
        borderColor:'#EFEFEF',
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },
    textstyle:{
        fontSize:11,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:6
    }
})

export default MainFeature;