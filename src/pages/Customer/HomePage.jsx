import NavbarComponent from "../../components/Customer/NavbarComponent";
import KontakComponent from "../../components/Customer/KontakComponent";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FooterComponent from "../../components/Customer/FooterComponent";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../api";

const HomePage = () => {
    //=========================inisialisasi
    const [produk, setProduk] = useState([]);

    const [banner_1, setBanner_1] = useState({});
    const [banner_2, setBanner_2] = useState({});
    const [banner_3, setBanner_3] = useState({});
    const [banner_4, setBanner_4] = useState({});
    //===========================================

    const getDataBanner = async () => {
        await Api.get('/customer/banner')
            .then((res) => {
                // console.log(res.data);
                setBanner_1(res.data.find(item => item.posisi == '1'));
                setBanner_2(res.data.find(item => item.posisi == '2'));
                setBanner_3(res.data.find(item => item.posisi == '3'));
                setBanner_4(res.data.find(item => item.posisi == '4'));
            })
    }

    const getDataProduk = async () => {
        await Api.get('/customer/produk')
            .then((res) => {
                console.log(res.data);
                setProduk(res.data);
            })
    }

    useEffect(() => {
        getDataBanner();
        getDataProduk();
    }, []);

    return (
        <>
            <NavbarComponent isLoggedIn={true} />
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
                            <img src={banner_1.foto} alt={banner_1.judul} />
                        </Col>
                        <Col lg={7} d>
                            <Row>
                                <Col d>
                                    <img src={banner_2.foto} alt={banner_2.judul} />
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col lg={6} d>
                                    <img src={banner_3.foto} alt={banner_3.judul} />
                                </Col>
                                <Col lg={6} d>
                                    <img src={banner_4.foto} alt={banner_4.judul} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="banner-image mt-3 d-lg-none d-block align-items-center">
                        <Col>
                            <img src={banner_1.foto} alt={banner_1.judul} />
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
                                                            <p className="text-end">{item.harga} / {item.satuan}</p>
                                                        </Col>
                                                    </Row>
                                                    <Card.Text>
                                                        {item.deskripsi}
                                                    </Card.Text>
                                                    {
                                                        item.fasilitas.slice(0, 2).map((item) => (
                                                            <Button variant="outline-dark mt-1">{item.keterangan}</Button>
                                                        ))
                                                    }
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                )) :
                                <h5>Tidak Ada Data</h5>
                        }

                    </Row>
                </Container>
            </div>

            <KontakComponent />
            <FooterComponent />
        </>
    );
}

export default HomePage