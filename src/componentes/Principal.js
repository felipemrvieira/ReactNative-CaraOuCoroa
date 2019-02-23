import React, {Component} from 'react';
import {StyleSheet, Image, View, TouchableOpacity, } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png')
const btnJogar = require('../imgs/botao_jogar.png')
const btnSobreJogo = require('../imgs/sobre_jogo.png')
const btnOutrosJogos = require('../imgs/outros_jogos.png')


export default class Principal extends Component {
  
  render() {
    const goToAbout = () => {
      Actions.sobrejogo()
    }
    const goToOthers = () => {
      Actions.outrosjogos()
    }
    const goToResult = () => {
      Actions.resultado()
    }

    return (
      <View style={styles.tela}>
        <View style={styles.principal}>
          <Image source={logo} />
          <TouchableOpacity onPress = {goToResult}>
            <Image source={btnJogar} />
          </TouchableOpacity>
        </View>
        <View style={styles.rodape}>
          <TouchableOpacity onPress = {goToAbout}>
            <Image source={btnSobreJogo} />
          </TouchableOpacity>
          
          <TouchableOpacity onPress = {goToOthers}>
            <Image source={btnOutrosJogos} />
          </TouchableOpacity>

        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#61BD8C',
    padding: 26,
  },
  principal: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },

});
