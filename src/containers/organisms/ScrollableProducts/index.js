import React,{Component} from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProducts extends Component{
    render(){
        return(
        <View>
            <View style={{marginLeft:16}}>
                <View style={{width:60, height:15}} >
                    <Image source={require('../../../assets/logo/go-food.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:16,paddingHorizontal:16}}>
                <Text style={{fontSize:17,fontWeight:'bold',color:'#1c1c1c'}}>Nearby Restaurant</Text>
                <Text style={{fontSize:17,fontWeight:'bold',color:'#61a756'}}>See All</Text>
            </View>
            <ScrollView horizontal={true} style={{flexDirection:'row',paddingHorizontal:16}}>
                {/* restaurant 1 */}
                <ScrollableItem img={require('../../../assets/dummy/go-food-kfc.jpg')} title="Sederhana Minang" />
                
                {/* restaurant 2 */}
                <ScrollableItem img={require('../../../assets/dummy/go-food-banka.jpg')} title="Go Food Banka" />
                {/* restaurant 3 */}
                <ScrollableItem img={require('../../../assets/dummy/go-food-orins.jpg')} title="Go food orins" />
                
                {/* restaurant 4 */}
                <ScrollableItem img={require('../../../assets/dummy/go-food-gm.jpg')} title="Go Food GM" />
                
                {/* restaurant  5*/}
                <ScrollableItem img={require('../../../assets/dummy/go-food-pak-boss.jpg')} title="Go Food Pak Boss" />

            </ScrollView>
            <View style={{borderBottomColor:'#e8e9ed',borderBottomWidth:1,marginTop:16,marginHorizontal:16}}></View>
        </View>
        );
    }
}

export default ScrollableProducts;