import { Container,Row,Col } from "react-bootstrap";
import Dune from '../assets/images/trending/dune.jpg'
import Infinite from '../assets/images/trending/morbius.jpg'
import Joker from '../assets/images/trending/joker.jpg'
import Everything from '../assets/images/trending/everything.jpg'
import Lightyear from '../assets/images/trending/lightyear.jpg'
import Morbius from '../assets/images/trending/infinite.jpg'
import Card from './Cardfilm';

import './style.css';


const Trending = () => {
    return (
        <div id="trending" className="trending">
            <Container className="py-3 text-center">
                <h1 className="text-light my-3">TRENDING</h1>
                <Row className="mb-3">
                    <Col>
                        <Card gambar={Infinite} judul="Morbius" />
                    </Col>
                    <Col>
                    <Card gambar={Dune} judul="Dune" />
                    </Col>
                    <Col>
                    <Card gambar={Joker} judul="Joker" />
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col><Card gambar={Everything} judul="Everything" /></Col>
                    <Col><Card gambar={Lightyear} judul="Lightyear" /></Col>
                    <Col><Card gambar={Morbius} judul="Infinite" /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending;