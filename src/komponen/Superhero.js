import { Container,Row,Col } from "react-bootstrap";
import Antman from '.././assets/images/superhero/antman.jpg'
import Avanger from '.././assets/images/superhero/avenger.jpg'
import Batman from '.././assets/images/superhero/batman.jpg'
import Robinhood from '../assets/images/superhero/robinhood.jpg'
import Spiderman from '../assets/images/superhero/spiderman-cover.jpg'
import Superman from '../assets/images/superhero/superman.jpg'
import Card from './Cardfilm';

import './style.css';

const Superhero = () => {
    return (
        <div id="superhero" className="superhero">
            <Container className="py-3 text-center">
                <h1 className="text-light">SuperHero</h1>
                <Row>
                    <Col><Card gambar={Antman} judul="Antman" /></Col>
                    <Col><Card gambar={Avanger} judul="Avanger" /></Col>
                    <Col><Card gambar={Batman} judul="Batman" /></Col>
                </Row>
                <Row>
                    <Col><Card gambar={Robinhood} judul="Robinhood" /></Col>
                    <Col><Card gambar={Spiderman} judul="Spiderman" /></Col>
                    <Col><Card gambar={Superman} judul="Superman" /></Col>
                </Row>
                </Container>
        </div>
    )
}

export default Superhero;