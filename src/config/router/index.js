import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home,NewsDetail,Orders,OrderDetail,ScanQRCode} from '../../containers/pages';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        NewsDetail: {
            screen: NewsDetail
        },
        // Profile: {screen: ProfileScreen},
    },{
        headerMode:'none',
        initialRouteName:'Home'
    }
);
const OrdersStack = createStackNavigator(
    {
        Orders: {
            screen: Orders
        },
        OrderDetail:{
            screen:OrderDetail
        },
        // Profile: {screen: ProfileScreen},
    },{
        headerMode:'none',
        initialRouteName:'Orders'
    }
);
const ScanStack = createStackNavigator(
    {
        ScanQRCode: {
            screen: ScanQRCode
        },
        // Profile: {screen: ProfileScreen},
    },{
        headerMode:'none',
        initialRouteName:'ScanQRCode'
    }
);

const MainNavigator = createSwitchNavigator(
    {
        HomeStack: {
            screen: HomeStack
        },
        OrdersStack: {
            screen: OrdersStack
        },
        ScanStack: {
            screen: ScanStack
        },
    },{
        headerMode:'none',
        initialRouteName:'HomeStack'
    }
  );

const Router = createAppContainer(MainNavigator);


export default Router;