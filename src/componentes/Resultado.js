import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component{
    constructor(props){
        super(props);
        this.state = { resultado : ""};
    }

    componentWillMount(){
        const numAleatorio = Math.floor(Math.random() * 2);
        let caraOuCoroa = '';

        if (numAleatorio === 0) {
            caraOuCoroa = "cara";
        } else {
            caraOuCoroa = "coroa";
        }

        this.setState({ resultado: caraOuCoroa })
    }

    render() {
        if ( this.state.resultado === 'cara') {
            return (
                <View style={ styles.tela }>
                    <Image style={ styles.moeda } source={cara} />
                </View>
            );
        } else {
            return (
                <View style={ styles.tela }>
                    <Image style={ styles.moeda } source={coroa} />
                </View>
            );
        }
    }
}   

const styles = StyleSheet.create({
    tela: {
      flex: 1,
      backgroundColor: '#61BD8C',
      padding: 26,
      justifyContent: 'center',
      alignItems: 'center',
    },
    moeda: {
      
    },
  
  });