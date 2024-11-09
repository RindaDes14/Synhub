import { useNavigate } from 'react-router-dom';
import { Form, Button, Card } from "react-bootstrap";
import DefaultLayout from '../../../components/Dashboard/DefaultLayout';

const EditFacilityPage = () => {
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <h3>Edit Facility</h3>
            <Card className="p-3 border">
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Label>Keterangan</Form.Label>
                        <Form.Control type="text" as="textarea" rows={3} placeholder="Masukkan Keterangan" />
                    </Form.Group>
                    <Button className='btn-info text-white btn-sm mt-3 me-2' type="submit">
                        Save
                    </Button>
                    <Button className="btn-warning text-white btn-sm mt-3" onClick={() => navigate("/admin/facility")} >
                        Close
                    </Button>
                </Form>
            </Card>
        </DefaultLayout>
    )
}

export default EditFacilityPage