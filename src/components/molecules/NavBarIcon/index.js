import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

const NavBarIcon = props =>{
    return (
    <View style={styles.box} >
        <Image source={props.img} style={{width:26,height:26}} />
        <Text style={[styles.textBox,props.active ? styles.colorText : '#545454']}>{props.title}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    box:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textBox:{
        color:'#545454',
        fontSize:10,
        marginTop:4,
    },
    colorText:{
        color:'#43AB4A'
    }

})

export default NavBarIcon;