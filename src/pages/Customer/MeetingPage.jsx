import { useState } from "react"
import NavbarComponent from "../../components/Customer/NavbarComponent"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import KontakComponent from "../../components/Customer/KontakComponent";
import FooterComponent from "../../components/Customer/FooterComponent";

const MeetingPage = () => {
  //handle jumlah orang
  const [jumlah, setJumlah] = useState(2);
  const handleJumlahChange = (event) => {
    setJumlah(parseInt(event.target.value));
  }

  return (
    <>
      <NavbarComponent isLoggedIn={true} />
      <div id="banner">
        <Container>
          <Row>
            <Col lg={8}>
              <h1>Ruang Meeting untuk <br /> segala kebutuhan Anda</h1>
            </Col>
            <Col lg={4}>
              <p className="banner-teks">Ruang meeting kami dirancang dengan baik untuk mendukung produktivitas Anda.</p>
            </Col>
          </Row>

          <Row className="banner-image mt-3">
            <Col>
              <img src="../../src/assets/img-rmeeting.png" alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      <div id="fasilitas" className="mt-5">
        <Container>
          <Row>
            <Col>
              <h3>Fasilitas</h3>
              <Button variant="outline-dark me-3">4-10 Kursi</Button>
              <Button variant="outline-dark me-3">Free Drink</Button>
              <Button variant="outline-dark me-3">Proyektor</Button>
              <Button variant="outline-dark me-3">Wifi</Button>
              <Button variant="outline-dark me-3">Papan Tulis</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="form-pesan" className="mt-5">
        <Container>
          <Row>
            <Col>
              <h1>Pesan Ruang Meeting</h1>
              <p>Beritahu kami kebutuhan ruang meeting Anda.</p>
            </Col>
          </Row>

          <form action="/payment">
            <div className="info-pemesan">
              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Nama Pemesan</Form.Label>
                    <Form.Control type="text" name="nama-pemesan"
                      placeholder="cth. Ahmad Fulana" />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Nomor Telepon</Form.Label>
                    <Form.Control type="text" name="telepon"
                      placeholder="cth. 08123456789" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Nama Perusahaan</Form.Label>
                    <Form.Control type="text" name="nama-perusahaan"
                      placeholder="cth. PT. ABC" />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Jumlah Orang</Form.Label>
                    <Form.Control type="number" name="jumlah-orang" min={2} value={jumlah}
                      onChange={handleJumlahChange} max={10} />
                  </Form.Group>
                </Col>
              </Row>
            </div>

            <div id="info-meeting mt-5">
              <h5 className="tittle mt-4">Informasi Meeting</h5>
              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Pilih Tanggal</Form.Label>
                    <Form.Control type="date" name="tanggal" />
                  </Form.Group>
                </Col>
                <Col lg={2}>
                  <Form.Group>
                    <Form.Label>Waktu Mulai</Form.Label>
                    <Form.Select>
                      <option value="09.00">09.00</option>
                      <option value="10.00">10.00</option>
                      <option value="11.00">11.00</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={2}>
                  <Form.Group>
                    <Form.Label>Sampai</Form.Label>
                    <Form.Select>
                      <option value="09.00">09.00</option>
                      <option value="10.00">10.00</option>
                      <option value="11.00">11.00</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={8}>
                  <Form.Group>
                    <Form.Label>Ada kebutuhan lain?</Form.Label>
                    <Form.Control as="textarea" rows={3} name="deskripsi" />
                  </Form.Group>
                </Col>
              </Row>
            </div>

            <div className="info-pembayaran mt-5">
              <h5 className="title">Informasi Pembayaran</h5>

              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Metode Pembayaran</Form.Label>
                    <Form.Select>
                      <option value="">-- Pilih Metode --</option>
                      <option value="transfer">Transfer Bank</option>
                      <option value="tunai">Tunai</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col lg={4}>
                  <p>Metode pembayaran yang dipilih : <b>Cash</b></p>
                  <p>Total Waktu : <b>3 jam</b> (IDR 500.000)</p>
                </Col>
              </Row>
            </div>
          </form>
        </Container>
      </div>

      <KontakComponent />
      <FooterComponent />
    </>
  )
}

export default MeetingPage