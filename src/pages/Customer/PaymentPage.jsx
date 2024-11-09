import NavbarComponent from "../../components/Customer/NavbarComponent";

import { Container, Row, Col, Form } from "react-bootstrap"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Api from "../../api";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const PaymentPage = () => {
    const [pesanan, setPesanan] = useState({});
    const [image, setImage] = useState('');
    const [sourceImage, setSourceImage] = useState('')
    const [validation, setValidation] = useState({});

    const token = Cookies.get('token');
    const { kodePesanan } = useParams();

    const navigate = useNavigate();

    const getDetailDataPesanan = async () => {
        await Api.get(`/customer/pesanan/${kodePesanan}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            // console.log(res.data)
            setPesanan(res.data);
        }).catch((err) => {
            console.log(err.response.data)

        })
    }

    const handleFileImage = (e) => {
        const imageData = e.target.files[0];

        if (!imageData.type.match('image.*')) {
            setImage('');
            toast.error("Maaf, Format Belum Sesuai. Hanya mendukung file image !", {
                duration: 3000,
                position: "top-center"
            });

            return;
        }

        //ini adalah useState untuk variable image yang akan digunakan untuk form data
        setImage(e.target.files[0]);

        //ini adalah useState untuk variable sourceImage yang akan dgunakan untuk src menampilkan file image
        setSourceImage(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('foto', image);
        formData.append('kode_pesanan', kodePesanan);

        await Api.post('/customer/upload-bukti-pesanan', formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            // console.log(res.data);
            if (res.status == 202) {
                toast.success(res.data.message, {
                    duration: 3000,
                    position: "top-center"
                })
                navigate(`/success/${kodePesanan}`);
            }
        }).catch((err) => {
            // console.log(err.response.data);
            setValidation(err.response.data)
        })
    }

    useEffect(() => {
        getDetailDataPesanan();
    }, []);

    return (
        <>
            <NavbarComponent isLoggedIn={true} />
            <div id="payment">
                <Container>
                    <Row>
                        <Col>
                            <h1>Pembayaran</h1>
                        </Col>
                    </Row>

                    <div className="form-bayar">
                        <Row>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>Kode Pesanan</Form.Label>
                                    <Form.Control type="text" name="nama-pemesan" value={pesanan.kode_pesanan} disabled />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>Tanggal Pesan</Form.Label>
                                    <Form.Control type="text" name="tanggalPemesanan" value={pesanan.created_at} disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>Ruangan</Form.Label>
                                    <Form.Control type="text" name="ruangan" value={pesanan.produk?.judul_pendek} disabled />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>Total Waktu</Form.Label>
                                    <Form.Control type="text" name="waktu" value={pesanan.durasi + " " + pesanan.produk?.satuan} disabled />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={4}>
                                <Form.Group>
                                    <Form.Label>Metode Pembayaran</Form.Label>
                                    <Form.Control type="text" value={pesanan.bayar?.nama_pembayaran} disabled />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <label htmlFor="total-bayar">Total Bayar</label>
                                <h5>
                                    <b>IDR {pesanan.produk?.harga} x {pesanan.durasi + " " + pesanan.produk?.satuan} = IDR {pesanan.produk?.harga * pesanan.durasi}</b>
                                </h5>
                            </Col>
                        </Row>

                        <form onSubmit={handleSubmit}>
                            <Row className="mt-5">
                                <Col lg={8}>
                                    {
                                        image ? (<img src={sourceImage} width={200} />) : (<></>)
                                    }
                                    <Form.Group>
                                        <Form.Label>Upload Bukti Bayar</Form.Label>
                                        <Form.Control type="file" onChange={handleFileImage} />
                                        {
                                            validation.foto && (
                                                <p className="text-danger">
                                                    <FontAwesomeIcon icon={faTriangleExclamation} />
                                                    {validation.foto}
                                                </p>
                                            )
                                        }
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={8}>
                                    <button className="btn btn-teal w-100 mt-5" type="submit">Konfirmasi</button>
                                </Col>
                            </Row>

                        </form>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default PaymentPage