import React,{Component} from 'react';
import {StyleSheet,View,ScrollView} from 'react-native';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';
import NavBar from './src/containers/organisms/NavBar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';

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
                   <HomeGoPay />

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

