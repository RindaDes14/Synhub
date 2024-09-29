import { Container, Row, Col, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

const RegisterPage = () => {
  return (
    <>
      <div id="register">
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <div className="wrapper">
                <div className="top text-center">
                  <img src={logo} alt="" className="mt-5 mb-5" />
                  <h1>Daftar Akun</h1>
                  <p>Buat akun untuk eksplorasi ruangan.</p>
                </div>
              </div>

              <form action="/login">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" name="nama-lengkap" placeholder="cth. Ahmad Fulan" />
                <Form.Label>Nomor Telepon</Form.Label>
                <Form.Control type="text" name="telepon" placeholder="cth. 08123456789" />

                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="cth. ahmad@email.com" />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Masukkan Pasword" />

                <button className="btn btn-teal w-100 mt-4" type="submit">Buat Akun</button>
              </form>

              <p className="mt-5 text-center">Sudah punya akun? <Link to="/login">Masuk</Link></p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default RegisterPage