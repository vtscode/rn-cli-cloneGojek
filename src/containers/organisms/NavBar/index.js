import React,{Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import { withNavigation } from 'react-navigation';

class NavBar extends Component{
    render(){
        return(
        <View style={{height:54,flexDirection:'row',}}>
            <NavBarIcon onPress={this.props.navigation.navigate('Home')} img={require('../../../assets/icon/home-active.png')} title="Home" active />
            <NavBarIcon onPress={this.props.navigation.navigate('Orders')} img={require('../../../assets/icon/order.png')} title="Orders" />
            <NavBarIcon onPress={this.props.navigation.navigate('Home')} img={require('../../../assets/icon/help.png')} title="Help" />
            <NavBarIcon onPress={this.props.navigation.navigate('Home')} img={require('../../../assets/icon/inbox.png')} title="Inbox" />
            <NavBarIcon onPress={this.props.navigation.navigate('Home')} img={require('../../../assets/icon/account.png')} title="Account" />
            
        </View>
        );
    }
}

export default withNavigation(NavBar);