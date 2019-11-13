import { View,Text,Button } from 'react-native';
import React from 'react';
import NavBar from '../../organisms/NavBar';

const Orders = (props) => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <Text>Orders Page</Text>
                <Button title="go to detail" onPress={() => props.navigation.navigate('OrderDetail')} />
            </View>
            <NavBar/>
        </View>
    );
}

export default Orders;