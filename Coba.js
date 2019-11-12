import React,{Component} from 'react';
import {Platform,StyleSheet,Text,View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import GopayFeature from './src/components/molecules/GopayFeature';
import MainFeature from './src/components/molecules/MainFeature';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';

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
                    <SearchFeature imgSearch={require('./src/assets/icon/search.png')} imgPromo={require('./src/assets/icon/promo.png')} />

                    {/* Gopay */}
                    <View style={{marginHorizontal:17,marginTop:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#2c5fb8',borderTopLeftRadius:4,borderTopRightRadius:4,padding:14}}>
                            <Image source={require('./src/assets/icon/gopay.png')} style={{}} />
                            <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>Rp.50.000</Text>
                        </View>
                        <View style={{flexDirection:'row',paddingVertical:20,backgroundColor:'#2f65bd',borderBottomLeftRadius:4,borderBottomRightRadius:4}}>
                            <GopayFeature title="Pay" img={require('./src/assets/icon/pay.png')} />
                            <GopayFeature title="Nearby" img={require('./src/assets/icon/nearby.png')} />
                            <GopayFeature title="Top Up" img={require('./src/assets/icon/topup.png')} />
                            <GopayFeature title="More" img={require('./src/assets/icon/more.png')} />
                            
                        </View>
                    </View>
                    
                    {/* Main Feature */}
                    <View style={{flexDirection:'row',flexWrap:'wrap',marginVertical:18}}>
                        <View style={{justifyContent:'space-between',flexDirection:'row',width:"100%",flexWrap:'wrap'}}>
                            
                            <MainFeature title="GO-RIDE" img={require('./src/assets/icon/go-ride.png')} />
                            <MainFeature title="GO-CAR" img={require('./src/assets/icon/go-car.png')} />
                            <MainFeature title="GO-BLUEBIRD" img={require('./src/assets/icon/go-bluebird.png')} />
                            <MainFeature title="GO-SEND" img={require('./src/assets/icon/go-send.png')} />
                            <MainFeature title="GO-DEALS" img={require('./src/assets/icon/go-deals.png')} />
                            <MainFeature title="GO-PULSA" img={require('./src/assets/icon/go-pulsa.png')} />
                            <MainFeature title="GO-FOOD" img={require('./src/assets/icon/go-food.png')} />
                            <MainFeature title="MORE" img={require('./src/assets/icon/go-more.png')} />
                            
                        </View>
                    </View>
                
                    {/* separator */}
                    <View style={{height:17,backgroundColor:'#f2f2f4'}}></View>
                    
                    {/* News */}
                    <GoNews />

                    {/* Internal information */}
                    <GoInfo />

                    {/* Gofood banner section */}
                    <GoBanner />

                    {/* Nearby Go-Food */}
                    <ScrollableProducts />

                </ScrollView>
                
                {/* Navigasi bawah */}
                <View style={{height:54,flexDirection:'row',}}>
                    <View style={styles.box} >
                        <Image source={require('./src/assets/icon/home-active.png')} style={{width:26,height:26}} />
                        <Text style={[styles.textBox,styles.colorText]}>Home</Text>
                    </View>
                    <View style={styles.box} >
                        <Image source={require('./src/assets/icon/order.png')} style={{width:26,height:26}} />
                        <Text style={[styles.textBox]}>Orders</Text>
                    </View>
                    <View style={styles.box} >
                        <Image source={require('./src/assets/icon/help.png')} style={{width:26,height:26}} />
                        <Text style={[styles.textBox]}>Help</Text>
                    </View>
                    <View style={styles.box} >
                        <Image source={require('./src/assets/icon/inbox.png')} style={{width:26,height:26}} />
                        <Text style={[styles.textBox]}>Inbox</Text>
                    </View>
                    <View style={styles.box} >
                        <Image source={require('./src/assets/icon/account.png')} style={{width:26,height:26}} />
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

