import React, { Component } from 'react';
import { ScrollView,View,StyleSheet } from 'react-native';
import SearchFeature from '../../../components/molecules/SearchFeature/index';
import HomeGoPay from '../../organisms/HomeGoPay/index';
import HomeMainFeature from '../../organisms/HomeMainFeature/index';
import GoNews from '../../../components/molecules/GoNews/index';
import GoInfo from '../../../components/molecules/GoInfo/index';
import GoBanner from '../../../components/molecules/GoBanner/index';
import ScrollableProducts from '../../organisms/ScrollableProducts/index';
import NavBar from '../../organisms/NavBar/index';

class Home extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView style={{flex:1,backgroundColor:'white'}}>
            
                    {/* Search Bar */}
                    <SearchFeature imgSearch={require('../../../assets/icon/search.png')} imgPromo={require('../../../assets/icon/promo.png')} />

                    {/* Gopay */}
                   <HomeGoPay />

                    {/* Main Feature */}
                    <HomeMainFeature />
                    
                    {/* separator */}
                    <View style={{height:17,backgroundColor:'#f2f2f4'}}></View>
                    
                    {/* News */}
                    <GoNews onPress={() => navigate('NewsDetail') } />

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
        )
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
export default Home;
