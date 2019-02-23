import React from 'react'
import { Router, Scene } from 'react-native-router-flux';

import Principal from './componentes/Principal';
import SobreJogo from './componentes/SobreJogo';
import OutrosJogos from './componentes/OutrosJogos';
import Resultado from './componentes/Resultado';

const Routes = () => (
    <Router navigationBarStyle={{  backgroundColor: '#61BD8C'}} >
        <Scene key = "root">
            <Scene key="principal" component={Principal} initial = {true} hideNavBar={true} />
            <Scene key="sobrejogo" component={SobreJogo} />
            <Scene key="outrosjogos" component={OutrosJogos} />
            <Scene key="resultado" component={Resultado} />
       </Scene>
    </Router>
)
export default Routes
        
