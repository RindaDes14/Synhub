//import components
import FooterComponent from "../../components/Customer/FooterComponent";
import KontakComponent from "../../components/Customer/KontakComponent";
import NavbarComponent from "../../components/Customer/NavbarComponent";

//import component react-bootstrap
import { Container, Row, Col, Button, Card } from "react-bootstrap"

const LandingPage = () => {
  return (
    <>
      <NavbarComponent isLoggedIn={false} />
      <div id="banner">
        <Container>
          <Row>
            <Col lg={8}>
              <h1>Elegansi dan Produktifitas <br /> dalam satu Ruangan</h1>
            </Col>
            <Col lg={4}>
              <p className="banner-teks">Ruang tumbuh untuk bisnis meningkatkan kreatifitas dan kenyamaan saat bekerja</p>
            </Col>
          </Row>

          <Row className="banner-image mt-5">
            <Col lg={5}>
              <img src="../../src/assets/img-hero1.png" alt="" />
            </Col>
            <Col lg={7}>
              <Row>
                <Col>
                  <img src="../../src/assets/img-hero2.png" alt="" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg={6}>
                  <img src="../../src/assets/img-hero3.png" alt="" />
                </Col>
                <Col lg={6}>
                  <img src="../../src/assets/img-hero4.png" alt="" />
                </Col>
              </Row>
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
            <Col lg={4}>
              <Card>
                <Card.Img variant="top" src="../../src/assets/img-rmeeting.png" />
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title>Ruang Meeting</Card.Title>
                    </Col>
                    <Col>
                      <Card.Title className="text-end">IDR 80K / Jam</Card.Title>
                    </Col>
                  </Row>
                  <Card.Text>
                    Ruang meeting ideal untuk bisnis dan usaha yang
                    ingin melakukan pertemuan atau mencari inspirasi bersama.
                  </Card.Text>
                  <Button variant="outline-dark">4-10 Kursi</Button>
                  <Button variant="outline-dark">Free Drink</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Img variant="top" src="../../src/assets/img-racara.png" />
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title>Ruang Acara</Card.Title>
                    </Col>
                    <Col>
                      <Card.Title className="text-end">IDR 150K / Hari</Card.Title>
                    </Col>
                  </Row>
                  <Card.Text>
                    Ruang acara untuk Workshop, seminar, dan acara lainnya.
                    Dilengkapi dengan peralatan pendukung acara.
                  </Card.Text>
                  <Button variant="outline-dark">30-150 Kursi</Button>
                  <Button variant="outline-dark">Event Tools</Button>
                  <Button variant="outline-dark">Sound System</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Img variant="top" src="../../src/assets/img-cospace.png" />
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title>Coworking Space</Card.Title>
                    </Col>
                    <Col>
                      <Card.Title className="text-end">IDR 15K / Jam</Card.Title>
                    </Col>
                  </Row>
                  <Card.Text>
                    Pilihan terbaik untuk anda yang ingin mencari inspirasi dan bekerja dengan nyaman.
                  </Card.Text>
                  <Button variant="outline-dark">Per-1 Orang</Button>
                  <Button variant="outline-dark">Free Drink</Button>
                  <Button variant="outline-dark">Free Wifi</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <KontakComponent />
      <FooterComponent />
    </>
  );
}

export default LandingPage