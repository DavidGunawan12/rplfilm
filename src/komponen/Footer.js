import Footer from '../assets/images/bg/haha-removebg-preview.png'
import { Container,Row,Col } from 'react-bootstrap';

const footer = () => {
    return (
        <div className='bg-dark text-muted py-5 footer'>
            <Container>
                <Row>
                    <Col className="text-center">
                        <img src={Footer} alt="Cinema 21" />
                        <p>CopyRight &copy; David Gunawan - 2022</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default footer;