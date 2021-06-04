import Table from 'react-bootstrap/Table'
import approve from '../assets/img/approve.svg'
import deny from '../assets/img/deny.svg'

const AuthRequests = () => {
    return (
        <div className="dashboard" id="requests">
            <div className="dashboard-header">
                <h1>PANDA Registration Requests list</h1>
            </div>
            <Table bordered responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Company Name</th>
                        <th>Position</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td className="actions">
                            <img src={approve} alt="approve" title="Approve request" />
                            <img src={deny} alt="deny" title="Deny request" />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td className="actions">
                            <img src={approve} alt="approve" title="Approve request" />
                            <img src={deny} alt="deny" title="Deny request" />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default AuthRequests;