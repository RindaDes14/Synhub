import { Link } from "react-router-dom"
import { Button, Table } from "react-bootstrap"
import DefaultLayout from "../../../components/Dashboard/DefaultLayout"

const FacilityPage = () => {
    return (
        <DefaultLayout>
            <div className="d-flex justify-content-between align-item-center mb-4">
                <h3>FacilityPage</h3>
                <Link to="/admin/facility/new" className="btn btn-teal">Add New</Link>
            </div>
            <div className="bg-white p-3 border rounded">
                <Table bordered>
                    <thead className="table-light border">
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Keterangan</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>loading...</td>
                            <td>loading...</td>
                            <td>loading...</td>
                            <td><Link to="/admin/facility/:id" className="btn btn-info btn-sm text-white mb-1 me-2">Edit</Link>
                                <Button className="btn-warning btn-sm text-white mb-1">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </DefaultLayout>
    )
}

export default FacilityPage