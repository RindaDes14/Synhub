import NavbarComponent from "../../components/Customer/NavbarComponent";

import { Container, Row, Col, Card } from "react-bootstrap";

import { Link, useParams } from "react-router-dom";

const SuccessPage = () => {

    const { kodePesanan } = useParams()
    return (
        <>
            <NavbarComponent isLoggedIn={true} />
            <div id="sukses">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="bg-kode-reservasi mt-5">
                                <Row>
                                    <Col lg={4}>
                                        <img src="../src/assets/img-sukses.png" alt="" width="80%" />
                                    </Col>
                                    <Col lg={8}>
                                        <h1>Horee!! Pesanan Telah Berhasil!</h1>
                                        <p>Silahkan Ambil Screenshot Kode Reservasi dibawah ini untuk ditunjukkan ke resepsionis :</p>
                                        <Card>
                                            <Card.Body className="bg-warning">
                                            <h5>{kodePesanan}</h5>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-3 d-flex align-items-center">
                        <Col lg={4}>
                            <Link to="/order" className="btn btn-teal w-100">Cek Pesanan</Link>
                        </Col>
                        <Col lg={4}>
                            <Link to="/home" className="back-home" >Kembali ke Beranda</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SuccessPage