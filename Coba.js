import React,{Component} from 'react';
import {Platform,StyleSheet,Text,View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';

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
                <ScrollView style={{flex:1,backgroundColor:'white'}}>
            
                    {/* Search Bar */}
                    <View style={{marginHorizontal:17,flexDirection:'row'}}>
                        <View style={{position:'relative',flex:1}}>
                            <TextInput placeholder="what do you want to eat?" style={{borderWidth:1,borderColor:'#E8E8E8',borderRadius:25,height:40,fontSize:13,paddingLeft:45,paddingRight:20,backgroundColor:'white',marginRight:18}} />
                            <Image source={require('./icon/search.png')} style={{position:'absolute',top:7,left:12}} />
                        </View>
                        <View style={{width:35,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('./icon/promo.png')} style={{}} />
                        </View>
                    </View>

                    {/* Gopay */}
                    <View style={{marginHorizontal:17,marginTop:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#2c5fb8',borderTopLeftRadius:4,borderTopRightRadius:4,padding:14}}>
                            <Image source={require('./icon/gopay.png')} style={{}} />
                            <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>Rp.50.000</Text>
                        </View>
                        <View style={{flexDirection:'row',paddingVertical:20,backgroundColor:'#2f65bd',borderBottomLeftRadius:4,borderBottomRightRadius:4}}>
                            <View style={{flex:1,alignItems:'center'}}>
                                <Image source={require('./icon/pay.png')} />
                                <Text style={{fontSize:13,fontWeight:'bold',color:'white',marginTop:15}}>Pay</Text>
                            </View>
                            <View style={{flex:1,alignItems:'center'}}>
                                <Image source={require('./icon/nearby.png')} />
                                <Text style={{fontSize:13,fontWeight:'bold',color:'white',marginTop:15}}>Nearby</Text>
                            </View>
                            <View style={{flex:1,alignItems:'center'}}>
                                <Image source={require('./icon/topup.png')} />
                                <Text style={{fontSize:13,fontWeight:'bold',color:'white',marginTop:15}}>Top Up</Text>
                            </View>
                            <View style={{flex:1,alignItems:'center'}}>
                                <Image source={require('./icon/more.png')} />
                                <Text style={{fontSize:13,fontWeight:'bold',color:'white',marginTop:15}}>More</Text>
                            </View>
                        </View>
                    </View>
                    
                    {/* Main Feature */}
                    <View style={{flexDirection:'row',flexWrap:'wrap',marginVertical:18}}>
                        <View style={{justifyContent:'space-between',flexDirection:'row',width:"100%",marginBottom:20}}>
                            <View style={{width:'25%',alignItems:'center'}}>
                                <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('./icon/go-ride.png')} />
                                </View>
                                <Text style={{fontSize:11,fontWeight:'bold',alignSelf:'center',marginTop:6}}>GO-RIDE</Text>
                            </View>
                            <View style={{width:'25%',alignItems:'center'}}>
                                <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('./icon/go-car.png')} />
                                </View>
                                <Text style={{fontSize:11,fontWeight:'bold',alignSelf:'center',marginTop:6}}>GO-CAR</Text>
                            </View>
                            <View style={{width:'25%',alignItems:'center'}}>
                                <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('./icon/go-bluebird.png')} />
                                </View>
                                <Text style={{fontSize:11,fontWeight:'bold',alignSelf:'center',marginTop:6}}>GO-BLUEBIRD</Text>
                            </View>
                            <View style={{width:'25%',alignItems:'center'}}>
                                <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('./icon/go-send.png')} />
                                </View>
                                <Text style={{fontSize:11,fontWeight:'bold',alignSelf:'center',marginTop:6}}>GO-SEND</Text>
                            </View>
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row',width:"100%",marginBottom:20}}>    
                            <View style={{width:'25%',alignItems:'center'}}>
                                <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('./icon/go-deals.png')} />
                                </View>
                                <Text style={{fontSize:11,fontWeight:'bold',alignSelf:'center',marginTop:6}}>GO-DEALS</Text>
                            </View>
                            <View style={{width:'25%',alignItems:'center'}}>
                                <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('./icon/go-pulsa.png')} />
                                </View>
                                <Text style={{fontSize:11,fontWeight:'bold',alignSelf:'center',marginTop:6}}>GO-PULSA</Text>
                            </View>
                            <View style={{width:'25%',alignItems:'center'}}>
                                <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('./icon/go-food.png')} />
                                </View>
                                <Text style={{fontSize:11,fontWeight:'bold',alignSelf:'center',marginTop:6}}>GO-FOOD</Text>
                            </View>
                            <View style={{width:'25%',alignItems:'center'}}>
                                <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
                                    <Image source={require('./icon/go-more.png')} />
                                </View>
                                <Text style={{fontSize:11,fontWeight:'bold',alignSelf:'center',marginTop:6}}>MORE</Text>
                            </View>
                        </View>
                    </View>
                
                    {/* separator */}
                    <View style={{height:17,backgroundColor:'#f2f2f4'}}></View>
                    
                    {/* News */}
                    <View style={{paddingTop:17,paddingHorizontal:17}}>
                        <View style={{position:'relative'}}>
                            <Image source={require('./dummy/sepak-bola.jpg')} style={{width:'100%', height:170,borderRadius:7}} />
                            
                            <View style={{width:'100%',height:'100%',position:'absolute',top:0,left:0,backgroundColor:'black',opacity:0.15,borderRadius:7}}></View>
                            <View style={{width:60, height:15,position:'absolute',top:16,left:16}} >
                                <Image source={require('./logo/white.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>
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

                    {/* Internal information */}
                    <View style={{padding:17,paddingBottom:0}}>
                        <View style={{width:60, height:15,marginLeft:-4}} >
                            <Image source={require('./logo/gojek.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>
                        </View>
                        <Text style={{fontSize:17,fontWeight:'bold',color:'#1c1c1c',marginTop:15,marginBottom:20}}>Complete your profile</Text>
                        <View style={{flexDirection:'row',marginBottom:16}}>
                            <View>
                                <Image source={require('./dummy/facebook-connect.png')} style={{}} />
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


                    {/* Gofood banner section */}
                    <View style={{padding:16}}>
                        <View style={{position:'relative'}}>
                            <Image source={require('./dummy/food-banner.jpg')} style={{width:'100%', height:170,borderRadius:7}} />
                            <View style={{width:'100%',height:'100%',position:'absolute',top:0,left:0,backgroundColor:'black',opacity:0.15,borderRadius:7}}></View>
                            <View style={{width:60, height:15,position:'absolute',top:16,left:16}} >
                                <Image source={require('./logo/white.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>
                            </View>
                            <View style={{position:'absolute',bottom:0,left:0,width:'100%',flexDirection:'row',alignItems:'center',paddingHorizontal:16,paddingBottom:16}}>
                                <View>
                                    <Text style={{fontSize:18,fontWeight:'bold',color:'white',marginBottom:8}}>Free Go-Food Voucher</Text>
                                    <Text style={{fontSize:12,fontWeight:'400',color:'white'}}>Quick, before they run out !</Text>
                                </View>
                                <View style={{flex:1,paddingLeft:12}}>
                                <TouchableOpacity style={{backgroundColor:'#61a756',paddingHorizontal:12,paddingVertical:11,alignSelf:'flex-end',borderRadius:4}}>
                                    <Text style={{fontSize:10,fontWeight:'bold',color:'white'}}>GET VOUCHER</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{borderBottomColor:'#e8e9ed',borderBottomWidth:1,marginTop:16}}>
                        </View>
                    </View>

                    {/* Nearby Go-Food */}
                    <View>
                        <View style={{width:60, height:15,marginLeft:-4}} >
                            <Image source={require('./logo/go-food.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text>Nearby Restaurant</Text>
                        <Text>See All</Text>
                    </View>

                </ScrollView>
                

                {/* Navigasi bawah */}
                <View style={{height:54,flexDirection:'row',}}>
                    <View style={styles.box} >
                        <Image source={require('./icon/home-active.png')} style={{width:26,height:26}} />
                        <Text style={[styles.textBox,styles.colorText]}>Home</Text>
                    </View>
                    <View style={styles.box} >
                        <Image source={require('./icon/order.png')} style={{width:26,height:26}} />
                        <Text style={[styles.textBox]}>Orders</Text>
                    </View>
                    <View style={styles.box} >
                        <Image source={require('./icon/help.png')} style={{width:26,height:26}} />
                        <Text style={[styles.textBox]}>Help</Text>
                    </View>
                    <View style={styles.box} >
                        <Image source={require('./icon/inbox.png')} style={{width:26,height:26}} />
                        <Text style={[styles.textBox]}>Inbox</Text>
                    </View>
                    <View style={styles.box} >
                        <Image source={require('./icon/account.png')} style={{width:26,height:26}} />
                        <Text style={[styles.textBox]}>Account</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        marginTop:50,
        marginBottom:10
    },
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

