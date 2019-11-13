import React,{Component} from 'react';
import Router from './src/config/router';

class Coba extends Component{
    render(){
        let pic = {
            uri: 'http://via.placeholder.com/26'
        };
        return (
           <Router /> 
        );
    }
}

export default Coba;