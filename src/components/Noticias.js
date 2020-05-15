import React from 'react'
import useCovidNews from '../hooks/useCovidNews';

import { Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, CardFooter, Button } from 'reactstrap';
import DayJS from 'react-dayjs';

const Noticias = () => {

    const { news } = useCovidNews();

    console.log(news)

    return (
        <>
            <Container>
                <Row>
                    {news.map(noticia => (
                        <Col xs={12} md={4} className="text-center d-flex bodyNoticias">
                            <Card className="borde3d">
                                <CardImg 
                                    top width="100%" 
                                    height="200px"
                                    src={noticia.urlToImage} 
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>
                                        <h5>
                                            {noticia.title.substr(0,60)+'...'}
                                        </h5>
                                    </CardTitle>
                                    <CardSubtitle>
                                        <p>
                                            {noticia.source.name}
                                        </p>
                                    </CardSubtitle>
                                </CardBody>
                                <CardFooter>
                                    <p>
                                            Fecha publicacion: <DayJS format="DD-MM-YYYY">{noticia.publishedAt}</DayJS>
                                    </p>
                                        
                                    <Button
                                        className="bg-info botonNoticias"
                                        href={noticia.url}
                                        target="_blank"
                                    >
                                        Noticia Completa
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Noticias;