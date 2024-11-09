import { useNavigate } from 'react-router-dom';
import { Form, Button, Card } from "react-bootstrap";
import DefaultLayout from '../../../components/Dashboard/DefaultLayout';

const EditBankPage = () => {
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <h3>Edit Bank</h3>
            <Card className="p-3 border">
                <Form>
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" placeholder="Image" />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Nama Bank</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Nama Bank" />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>No. Rekening</Form.Label>
                        <Form.Control type="number" placeholder="Masukkan No. Rekening" />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Pemilik Bank</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Pemilik" />
                    </Form.Group>
                    <Button className='btn-info text-white btn-sm mt-3 me-2' type="submit">
                        Save
                    </Button>
                    <Button className="btn-warning text-white btn-sm mt-3" onClick={() => navigate("/admin/bank")} >
                        Close
                    </Button>
                </Form>
            </Card>
        </DefaultLayout>
    )
}

export default EditBankPage