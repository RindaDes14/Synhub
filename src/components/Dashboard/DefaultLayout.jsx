import logo from '../../assets/logo.png';
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from 'react-router-dom';

const DefaultLayout = ({ children }) => {
    return (
        <div className='d-flex min-vh-100'>
            <aside className='bg-white p-3 border-end' style={{ width: "250px" }}>
                <Navbar.Brand className='d-flex justify-content-center mb-4' href="/admin/dashboard"><img src={logo} alt="" /></Navbar.Brand>
                <Nav className='flex-column fs-5'>
                    <Nav.Link className='text-dark' href="/admin/dashboard">Dashboard</Nav.Link>
                    <Nav.Link className='text-dark' href="/admin/bank">Bank</Nav.Link>
                    <Nav.Link className='text-dark' href="/admin/banner">Banner</Nav.Link>
                    <Nav.Link className='text-dark' href="/admin/facility">Facility</Nav.Link>
                    <Nav.Link className='text-dark' href="/admin/user">User</Nav.Link>
                </Nav>
            </aside>
            <div className='d-flex flex-column flex-grow-1'>
                <Navbar className='border-bottom bg-white p-3'>
                    <Container fluid>
                        <Navbar.Collapse className='justify-content-end'>
                            <Link to="" className="btn btn-teal">Logout</Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <main className='bg-light flex-grow-1 p-4'>
                    {children}
                </main>
                <footer className='text-center mt-auto p-3 bg-light'>
                    &copy; Syneps Academy
                </footer>
            </div>
        </div>
    )
}

export default DefaultLayout