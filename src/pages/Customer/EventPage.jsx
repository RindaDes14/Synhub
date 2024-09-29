import NavbarComponent from "../../components/Customer/NavbarComponent";
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import KontakComponent from "../../components/Customer/KontakComponent";
import FooterComponent from "../../components/Customer/FooterComponent";

const EventPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [durationDays, setDurationDays] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    calculateDuration(e.target.value, endDate);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    calculateDuration(startDate, e.target.value);
  };

  const calculateDuration = (start, end) => {
    if (start && end) {
      const startDateObj = new Date(start);
      const endDateObj = new Date(end);

      // Pastikan tanggal valid
      if (startDateObj instanceof Date && !isNaN(startDateObj) && endDateObj instanceof Date && !isNaN(endDateObj)) {
        let daysDifference = Math.ceil((endDateObj.getTime() - startDateObj.getTime()) / (1000 * 3600 * 24)) + 1;

        // Jika tanggal mulai dan selesai sama, setel hari menjadi 1
        if (daysDifference === 0) {
          daysDifference = 1;
        }

        setDurationDays(daysDifference);

        // Hitung total biaya berdasarkan hari saja
        const cost = daysDifference * 150000; // biaya per hari
        setTotalCost(cost);
      } else {
        setDurationDays(0);
        setTotalCost(0);
      }
    } else {
      setDurationDays(0);
      setTotalCost(0);
    }
  };

  const [jumlah, setJumlah] = useState(10);
  const handleJumlahChange = (event) => {
    setJumlah(parseInt(event.target.value));
  };

  const [paymentMethod, setPaymentMethod] = useState('');
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <>
      <NavbarComponent isLoggedIn={true} />
      <div id="banner">
        <Container>
          <Row>
            <Col lg={8}>
              <h1>Ruang Untuk berbagai <br /> jenis Acara</h1>
            </Col>
            <Col lg={4}>
              <p className="banner-teks">Ruang Acara kami dirancang dengan baik untuk mendukung Acara Anda.</p>
            </Col>
          </Row>
          <Row className="banner-image mt-5">
            <Col>
              <img src="../src/assets/img-racara.png" alt="Ruang Acara" />
            </Col>
          </Row>
        </Container>
      </div>

      <div id="fasilitas" className="mt-5">
        <Container>
          <Row>
            <Col className="d-lg-flex align-items-center">
              <h3 className="me-5">Fasilitas</h3>
              <Button variant="outline-dark me-3">Hingga 150 Kursi</Button>
              <Button variant="outline-dark me-3">Free Drink</Button>
              <Button variant="outline-dark me-3">Proyektor</Button>
              <Button variant="outline-dark me-3">Dedicated Internet</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="form-pesan" className="mt-5">
        <Container>
          <Row>
            <Col>
              <h1>Pesan Ruang Acara</h1>
              <p>Beritahu kami kebutuhan ruang Acara Anda.</p>
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
              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Nama Perusahaan/Industri</Form.Label>
                    <Form.Control type="text" name="nama-perusahaan" placeholder="cth. PT. ABC" required />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Jumlah Orang</Form.Label>
                    <Form.Control type="number" name="jumlah-orang" min={10} value={jumlah} onChange={handleJumlahChange} required />
                  </Form.Group>
                </Col>
              </Row>
            </div>

            <div className="info-acara mt-5">
              <h5 className="title">Informasi Acara</h5>
              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Tanggal Mulai</Form.Label>
                    <Form.Control type="date" name="tanggalMulai" onChange={handleStartDateChange} required />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Tanggal Selesai</Form.Label>
                    <Form.Control type="date" name="tanggalSelesai" onChange={handleEndDateChange} required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={8}>
                  <Form.Group>
                    <Form.Label>Penjelasan Singkat Tentang Acara</Form.Label>
                    <Form.Control as="textarea" name="deskripsi" rows={3} />
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
                  <p>Total Waktu: <b>{durationDays}</b> Hari, <b>(IDR {totalCost.toLocaleString()})</b></p>
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

export default EventPage;