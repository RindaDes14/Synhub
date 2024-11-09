import { useNavigate } from 'react-router-dom';
import { Form, Button, Card } from "react-bootstrap";
import DefaultLayout from '../../../components/Dashboard/DefaultLayout';

const EditBannerPage = () => {
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <h3>Edit Banner</h3>
            <Card className="p-3 border">
                <Form className='mt-3'>
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" placeholder="Image" />
                    </Form.Group>
                    <Form.Group className='mt-3 mb-3'>
                        <Form.Label>Keterangan</Form.Label>
                        <Form.Control type="text" as="textarea" rows={3} placeholder="Masukkan Keterangan" />
                    </Form.Group>
                    <Button type="submit" className="btn-info text-white btn-sm me-2">
                        Save
                    </Button>
                    <Button className="btn-warning text-white btn-sm" onClick={() => navigate("/admin/banner")}>
                        Close
                    </Button>
                </Form>
            </Card>
        </DefaultLayout>
    )
}

export default EditBannerPage