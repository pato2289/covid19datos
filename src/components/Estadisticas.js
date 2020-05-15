import React from 'react';
import DayJS from 'react-dayjs';

import { Container, Row, Col } from 'react-bootstrap';

import useCovidInfo from '../hooks/useCovidInfo';

const Estadisticas = () => {

    const { info } = useCovidInfo()
    const { Country, Confirmed, Active, Deaths, Recovered, Date } = info

    console.log(info)

    return (
        <> 
            <Container className="mt-2 borde3d statsBackground">
                <Row className="justify-content-md-center">
                    <Col className="" md={6}>
                        <h1 className="text-center statsTitle">{Country} Covid-19</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} className="text-center black borde3d">
                        <h3>Confirmados</h3>
                        <h1>{Confirmed}</h1>
                    </Col>
                    <Col xs={12} md={3} className="text-center yellow borde3d">
                        <h3>Activos</h3>
                        <h1>{Active}</h1>
                    </Col>
                    <Col xs={12} md={3} className="text-center green borde3d">
                        <h3>Recuperados</h3>
                        <h1>{Recovered}</h1>
                    </Col>
                    <Col xs={12} md={3} className="text-center red borde3d">
                        <h3>Muertes</h3>
                        <h1>{Deaths}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p className="p-0 mt-3">
                            Ultima actualizacion: 
                                <DayJS subtract={ { days: 1 } } format="DD-MM-YYYY">{Date}</DayJS>  
                            a las 23:59hs
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
     );
}
 
export default Estadisticas;