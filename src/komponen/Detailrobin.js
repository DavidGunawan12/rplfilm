import { Container, Row ,Col } from "react-bootstrap";

const Detailrobin = () => {
        return (
            <Container fluid className="bg-dark py-5">
                <Container>
                    <Row className="mt-5">
                        <Col className="bg-light p-3 rounded">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/zwPn9ZnbCo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        <Col className="text-light">
                        Dune bercerita tentang marga Atreides, suatu bangsawan yang berkuasa di planet lautan Caladan. Cerita berawal dari Duke Leto (Oscar Isaac) yang mengajak anaknya Paul (Timothee Chalamet) untuk memimpin koloni mereka di planet padang pasir berbahaya, Arrakis.
                        <hr />
                        Sutradara: Denis Villeneuve
                        <hr />
                        Box office: 401,8 juta USD
                        <hr />
                        Didistribusikan oleh: Warner Bros. Pictures
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-light">
                            <h3 className="mt-5">SINOPSIS</h3>
                            <hr />
                            Sinopsis Dune kali ini menceritakan tentang perjalanan Duke Atreides (Oscar Isaac) menjelajahi gurun bernama Dune untuk mendapat sumber spice (rempah-rempah).
                                    Kekuatan spice yang luar biasa bisa membantu manusia berumur panjang, sangat cerdas, bahkan mampu menjelajahi luar angkasa dengan kecepatan cahaya.
                                    Namun, mengingat Dune adalah tempat yang berbahaya, Duke membawa serta orang-orang kepercayaannya untuk menyelesaikan misi tersebut.
                                    Nah, sinopsis Dune berikut ini akan membongkar keseruan akting Oscar Isaac, Timothee Chalamet, dan Rebecca Ferguson di film ini.
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
}

export default Detailrobin;