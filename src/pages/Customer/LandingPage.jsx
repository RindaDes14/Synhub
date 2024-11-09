import NavbarComponent from "../../components/Customer/NavbarComponent";
import KontakComponent from "../../components/Customer/KontakComponent";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FooterComponent from "../../components/Customer/FooterComponent";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../api";
import Cookies from "js-cookie";

const LandingPage = () => {
    const [produk, setProduk] = useState([]);
    const cookies = Cookies.get('token');
    
    const getDataProduk = async () => {
        await Api.get('/customer/produk')
            .then((res) => {
                setProduk(res.data);
            })
    }

    useEffect(() => {
        getDataProduk();
    }, []);

    return (
        <>
            <NavbarComponent isLoggedIn={cookies} />
            <div id="banner">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h1>Elegansi & Produktivitas <br /> dalam satu Ruangan.</h1>
                        </Col>

                        <Col lg={4}>
                            <p className="banner-teks">Ruang tumbuh untuk bisnis meningkatkan kreatifitas dan kenyamanan saat bekerja.</p>
                        </Col>
                    </Row>
                    <Row className="banner-image mt-5 d-none d-lg-flex align-items-center">
                        <Col lg={5}>
                            <img src="../src/assets/img-hero1.png" alt="" />
                        </Col>
                        <Col lg={7} >
                            <Row>
                                <Col>
                                    <img src="../src/assets/img-hero2.png" alt="" />
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col lg={6} >
                                    <img src="../src/assets/img-hero3.png" alt="" />
                                </Col>
                                <Col lg={6} >
                                    <img src="../src/assets/img-hero4.png" alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="banner-image mt-3 d-lg-none d-block align-items-center">
                        <Col>
                            <img src="../src/assets/img-hero1.png" alt="" />
                        </Col>
                    </Row>


                </Container>
            </div>

            <div id="ruangan" className="mt-5">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center">Temukan Ruangan yang <br /> cocok untuk Anda</h1>
                        </Col>
                    </Row>
                    <Row>
                        {
                            produk.length > 0 ?
                                produk.map((item) => (
                                    <Col lg={4}>
                                        <Link to={`/ruangan/${item.slug}`} className="text-decoration-none">
                                            <Card>
                                                <Card.Img variant="top" src={item.foto} />
                                                <Card.Body>
                                                    <Row>
                                                        <Col>
                                                            <Card.Title>{item.judul_pendek}</Card.Title>
                                                        </Col>
                                                        <Col>
                                                            <p className="text-end">IDR {item.harga / 1000}K / {item.satuan}</p>
                                                        </Col>
                                                    </Row>
                                                    <Card.Text>
                                                        {item.deskripsi}
                                                    </Card.Text>
                                                    {
                                                        item.fasilitas.slice(0, 2).map((isi) => (
                                                            <Button variant="outline-dark">{isi.keterangan}</Button>
                                                        ))
                                                    }
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                ))
                                : <h5>Data Tidak Ditemukan</h5>
                        }


                    </Row>
                </Container>
            </div>

            <KontakComponent />
            <FooterComponent />
        </>
    );
}

export default LandingPage