import NavbarComponent from "../../components/Customer/NavbarComponent";
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import KontakComponent from "../../components/Customer/KontakComponent";
import FooterComponent from "../../components/Customer/FooterComponent";

const CospacePage = () => {
  // handle jumlah orang
  const [jumlah, setJumlah] = useState(2);
  const handleJumlahChange = (event) => {
    setJumlah(parseInt(event.target.value));
  };

  // handle waktu mulai dan selesai
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
    setEndTime('');  // reset endTime saat waktu mulai berubah
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const availableEndTimes = times.filter(time => time > startTime);

  // handle metode pembayaran
  const [paymentMethod, setPaymentMethod] = useState('');
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // menghitung total waktu dan biaya
  const calculateDuration = () => {
    if (!startTime || !endTime) return 0;
    const startHour = parseInt(startTime.split(':')[0]);
    const endHour = parseInt(endTime.split(':')[0]);
    return endHour - startHour;
  };

  const duration = calculateDuration();
  const totalCost = duration * 15000;

  return (
    <>
      <NavbarComponent isLoggedIn={true} />
      <div id="banner">
        <Container>
          <Row>
            <Col lg={8}>
              <h1>Ruang Coworking <br /> Tingkatkan Produktivitas.</h1>
            </Col>
            <Col lg={4}>
              <p className="banner-teks">Pilih tempat duduk yang terbuka, dan mulai bekerja Tingkatkan produktivitas kerja anda.</p>
            </Col>
          </Row>
          <Row className="banner-image mt-5">
            <Col>
              <img src="../src/assets/img-cospace.png" alt="Ruang Meeting" />
            </Col>
          </Row>
        </Container>
      </div>

      <div id="fasilitas" className="mt-5">
        <Container>
          <Row>
            <Col className="d-lg-flex align-items-center">
              <h3 className="me-5">Fasilitas</h3>
              <Button variant="outline-dark me-3">Free Drink</Button>
              <Button variant="outline-dark me-3">Wifi</Button>
              <Button variant="outline-dark me-3">Single Space</Button>
              <Button variant="outline-dark me-3">Fleksibel</Button>
              <Button variant="outline-dark me-3">Tersedia 25 Kursi</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="form-pesan" className="mt-5">
        <Container>
          <Row>
            <Col>
              <h1>Pesan Kursi Coworking Space</h1>
              <p>Cari tempat duduk yang terbuka dan mulai bekerja.</p>
            </Col>
          </Row>

          <form action="/payment">
            <div className="info-pemesan">
              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Nama Pemesan</Form.Label>
                    <Form.Control type="text" name="nama-pemesan" placeholder="Masukkan Nama Lengkap" required />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Nomor Telpon</Form.Label>
                    <Form.Control type="text" name="telpon" placeholder="cth. 08123456789" required />
                  </Form.Group>
                </Col>
              </Row>
            </div>


            <div className="info-cospace mt-5">
              <h5 className="title">Informasi Coworking Space</h5>
              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Pilih Tanggal</Form.Label>
                    <Form.Control type="date" name="tanggal" required />
                  </Form.Group>
                </Col>
                <Col lg={2}>
                  <Form.Group>
                    <Form.Label>Waktu Mulai</Form.Label>
                    <Form.Select aria-label="waktu-mulai" onChange={handleStartTimeChange} required>
                      <option>--</option>
                      {times.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={2}>
                  <Form.Group>
                    <Form.Label>Sampai</Form.Label>
                    <Form.Select aria-label="sampai" disabled={!startTime} onChange={handleEndTimeChange} required>
                      <option>--</option>
                      {availableEndTimes.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </Form.Select>
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
                    <Form.Select aria-label="pembayaran" onChange={handlePaymentMethodChange} required>
                      <option>Pilih Metode Bayar</option>
                      <option value="Cash">Cash</option>
                      <option value="Transfer Bank">Transfer Bank</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col lg={4}>
                  <label htmlFor="ringkasan">Ringkasan Pembayaran</label>
                  <p>Metode bayar yang dipilih: <b>{paymentMethod}</b></p>
                  <p>Total Waktu: <b>{duration}</b> Jam <b>(IDR {totalCost.toLocaleString()})</b></p>
                </Col>
              </Row>

            </div>
            <button className="btn btn-teal w-50 mt-3" type="submit">Reservasi</button>
          </form>
        </Container>
      </div>

      <KontakComponent />
      <FooterComponent />
    </>
  );
};

export default CospacePage;