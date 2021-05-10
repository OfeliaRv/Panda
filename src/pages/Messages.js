import Table from 'react-bootstrap/Table'
import read from '../assets/img/read.svg'
import delete_icon from '../assets/img/delete.svg'

const Messages = () => {
    return (
        <div className="dashboard" id="messages">
            <div className="dashboard-header">
                <h1>PANDA Messages list</h1>
            </div>
            <Table bordered responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Message text</th>
                        <th>Date</th>
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
                            <img src={read} alt="read" title="Read message" />
                            <img src={delete_icon} alt="delete" title="Delete message" />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                        <td className="actions">
                            <img src={read} alt="read" title="Read message" />
                            <img src={delete_icon} alt="delete" title="Delete message" />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Messages;