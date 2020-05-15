import React from 'react'

import Navigation from './Navigation';
import Estadisticas from './Estadisticas';
import Noticias from './Noticias';
import Bottom from './Bottom';

const Inicio = () => {

    return (
        <> 
            <Navigation />
            <Estadisticas />
            <Noticias />
            <Bottom />
        </>
     );
}
 
export default Inicio;