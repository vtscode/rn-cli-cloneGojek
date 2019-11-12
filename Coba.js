import React,{Component} from 'react';
import {StyleSheet,Text,View,Image,ScrollView} from 'react-native';
import GopayFeature from './src/components/molecules/GopayFeature';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';
import NavBar from './src/containers/organisms/NavBar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';

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
                    <HomeMainFeature />
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
                <NavBar />
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
    }

})

