import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
    return (
      <footer className="mt-5">
        <Container>
          <hr className="d-lg-none d-block" />
          <Row>
            <Col lg={3}>
                <img src="../src/assets/logo.png" alt="" width="120px" />
                <p className="mt-3">&copy; 2024 Synhub. All Rights Reserved</p>
            </Col>
            <Col lg={3}>
                <h5>Ruang</h5>
                <Link to="/ruang-meeting">Ruang Meeting</Link>
                <Link to="/ruang-acara">Ruang Acara</Link>
                <Link to="/cospace">Coworking Space</Link>
            </Col>
            <Col lg={3}>
                <h5>Jam Buka</h5>
                <p>Senin - Sabtu</p>  
                <p>09 : 00 Pagi s/d 20.00 Malam</p>
            </Col>
            <Col lg={3}>
                <h5>Kontak</h5>
                <p>Jalan Inspektur Sudirman, No. 1234, Sukajadi, Palembang, Sumatera Selatan, 30123</p>
                <p>&#128222; 08123456789</p>
            </Col>
          </Row>
        </Container>
      </footer>  
    );
}

export default FooterComponent