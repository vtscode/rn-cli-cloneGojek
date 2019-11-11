import React,{Component} from 'react';
import {Platform,StyleSheet,Text,View,Image,TextInput} from 'react-native';

const instruction = Platform.select({
    ios:'Press Cmd R to reload\n' + 'Cmd+D or shake for dev menu',
    android:'Double R on your keyboard to reload \n'+
    'shake or press Cmd+m menu button for dev menu'
});
// type Props={};
export default class Coba extends Component{
    render(){
        let pic = {
            uri: 'http://via.placeholder.com/26'
        };
        return (
            <View style={styles.container}>
                <View style={{flex:1,backgroundColor:'pink'}}>
                    <View>
                        <View>
                            <TextInput value="what do you want to eat?" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius:25}} />
                        </View>
                    </View>

                    <View>
                        <View></View>
                    </View>
                </View>
                <View style={{height:54,flexDirection:'row',}}>
                    <View style={styles.box} >
                        <Image source={pic} style={{width:26,height:26}} />
                        <Text style={[styles.textBox]}>Home</Text>
                    </View>
                    <View style={styles.box} >
                        <Image source={pic} style={{width:26,height:26}} />
                        <Text style={[styles.textBox]}>Orders</Text>
                    </View>
                    <View style={styles.box} >
                        <Image source={pic} style={{width:26,height:26}} />
                        <Text style={[styles.textBox]}>Help</Text>
                    </View>
                    <View style={styles.box} >
                        <Image source={pic} style={{width:26,height:26}} />
                        <Text style={[styles.textBox]}>Inbox</Text>
                    </View>
                    <View style={styles.box} >
                        <Image source={pic} style={{width:26,height:26}} />
                        <Text style={[styles.textBox]}>Account</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    box:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textBox:{
        color:'#545454',
        fontSize:10,
        marginTop:4
    },
    colorText:{
        color:'#43AB4A'
    }

})

