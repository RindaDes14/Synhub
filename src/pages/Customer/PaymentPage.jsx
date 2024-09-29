import NavbarComponent from "../../components/Customer/NavbarComponent";

import { Container, Row, Col, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

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
            <form action="/success">
              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Nama Pemesan</Form.Label>
                    <Form.Control type="text" name="nama-pemesan" value="Ahmad Fulan" disabled />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Tanggal Pesan</Form.Label>
                    <Form.Control type="text" name="tanggalPemesanan" value="01/08/2024" disabled />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Ruangan</Form.Label>
                    <Form.Control type="text" name="ruangan" value="Ruang Meeting" disabled />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Waktu/Total Jam</Form.Label>
                    <Form.Control type="text" name="waktu" value="09.00/3 Jam" disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label htmlFor="total-bayar">Total Bayar</label>
                  <h5><b>IDR 80.000 x 3 jam : IDR 240.000</b></h5>
                </Col>
              </Row>

              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Metode Pembayaran</Form.Label>
                    <Form.Select
                      aria-label="pembayaran"
                      required
                      onChange={handlePaymentMethodChange}
                    >
                      <option value="">Pilih Metode Bayar</option>
                      <option value="Cash">Cash</option>
                      <option value="Transfer Bank">Transfer Bank</option>
                    </Form.Select>
                  </Form.Group>

                  {paymentMethod === "Transfer Bank" && (
                    <>
                      <img
                        src="../src/assets/ic-bca.png"
                        alt="Logo Bank"
                        className="mb-2 mt-3"
                        width={120}
                      />
                      <h6>
                        Nomor Rekening : <b>123456789</b>
                      </h6>
                      <h5>
                        <b>a.n Synhub Space</b>
                      </h5>
                    </>
                  )}
                </Col>
              </Row>

              {paymentMethod === "Transfer Bank" && (
                <Row>
                  <Col lg={8}>
                    <Form.Group>
                      <Form.Label>Upload Bukti Bayar</Form.Label>
                      <Form.Control type="file" name="buktiBayar" required />
                    </Form.Group>
                  </Col>
                </Row>
              )}

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