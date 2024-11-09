import { Link } from 'react-router-dom'
import DefaultLayout from '../../../components/Dashboard/DefaultLayout'
import { Button, Table } from 'react-bootstrap'

const UserPage = () => {
    return (
        <DefaultLayout>
            <div className='d-flex justify-content-between align-item-center mb-4'>
                <h3>UserPage</h3>
                <Link to="/admin/user/new" className="btn btn-teal">Add New</Link>
            </div>
            <div className='bg-white border rounded p-3'>
                <Table bordered>
                    <thead className='table-light border'>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>
                                <Link to="/admin/user/:id" className="btn btn-info text-white btn-sm mb-1 me-1">Edit</Link>
                                <Button className='btn-warning text-white btn-sm mb-1'>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>


        </DefaultLayout>
    )
}

export default UserPage