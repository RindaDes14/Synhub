import logo from "../assets/logo.png"
import { useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Api from "../api"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import toast from "react-hot-toast"
import Cookies from "js-cookie"

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState({});
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        await Api.post('/login', formData)
            .then((res) => {
                Cookies.set('token', res.data.token);
                Cookies.set('name', res.data.name);
                Cookies.set('role', res.data.role);
                Cookies.set('phone', res.data.phone);

                toast.success('Login Berhasil, terima kasih !😎', {
                    duration: 3000,
                    position: "top-center"
                })
                if (res.data.role == 'customer') {
                    navigate('/');
                }
                if (res.data.role == 'admin') {
                    navigate('/admin/dashboard');
                }
            })
            .catch((error) => {
                if (error.response.status == 401) {
                    toast.error(error.response.data.message, {
                        duration: 3000,
                        position: "top-center"
                    })
                } else {
                    setValidation(error.response.data);
                }
            })
    }
    return (
        <>
            <div id="login">
                <Container className="d-flex justify-content-center">
                    <Row>
                        <Col>
                            <div className="wrapper">
                                <div className="top text-center">
                                    <img src={logo} alt="" className="mt-5 mb-5" />
                                    <h1>Login</h1>
                                    <p>Masuk untuk mulai reservasi ruangan.</p>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Masukkan Email"
                                    />
                                    {
                                        validation.email && (
                                            <p class="text-danger" role="alert">
                                                <FontAwesomeIcon icon={faTriangleExclamation} /> {validation.email}
                                            </p>
                                        )
                                    }

                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Masukkan Password"
                                    />
                                    {
                                        validation.password && (
                                            <p class="text-danger" role="alert">
                                                <FontAwesomeIcon icon={faTriangleExclamation} /> {validation.password}
                                            </p>
                                        )
                                    }

                                    <button className="btn btn-teal w-100 mt-5" type="submit">Masuk</button>
                                </form>

                                <p className="mt-5 text-center">Belum punya akun? <Link to="/register">Daftar</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LoginPage