import { Container, Row, Col, Button } from "react-bootstrap";

const KontakComponent = () => {
    return (
        <>
            <div id="kontak" className="mt-5">
                <Container>
                    <div className="bg-kontak">
                        <Row>
                            <Col>
                                <h1>Butuh Ruangan Khusus? <br /> Jangan Ragu Hubungi Kami</h1>
                                <Button variant="outline-light" className="mt-3">Hubungi Kami</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default KontakComponent