import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature';
import { withNavigation } from 'react-navigation';

class HomeGoPay extends Component{
    render(){
        return(
        <View style={{marginHorizontal:17,marginTop:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#2c5fb8',borderTopLeftRadius:4,borderTopRightRadius:4,padding:14}}>
                <Image source={require('../../../assets/icon/gopay.png')} style={{}} />
                <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>Rp.50.000</Text>
            </View>
            <View style={{flexDirection:'row',paddingVertical:20,backgroundColor:'#2f65bd',borderBottomLeftRadius:4,borderBottomRightRadius:4}}>
                <GopayFeature onPress={()=> this.props.navigation.navigate('ScanQRCode')} title="Pay" img={require('../../../assets/icon/pay.png')} />
                <GopayFeature onPress={()=> this.props.navigation.navigate('ScanQRCode')} title="Nearby" img={require('../../../assets/icon/nearby.png')} />
                <GopayFeature onPress={()=> this.props.navigation.navigate('ScanQRCode')} title="Top Up" img={require('../../../assets/icon/topup.png')} />
                <GopayFeature onPress={()=> this.props.navigation.navigate('ScanQRCode')} title="More" img={require('../../../assets/icon/more.png')} />
                
            </View>
        </View>
        );
    }
}

export default withNavigation(HomeGoPay);
