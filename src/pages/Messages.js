import Table from 'react-bootstrap/Table'
import read from '../assets/img/read.svg'
import delete_icon from '../assets/img/delete.svg'
import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchMessages, deleteMessage } from '../actions/MessageAction'

const Messages = ({ fetchMessages, messagesData }) => {
    useEffect(() => {
        fetchMessages();
    }, []);

    const my_dispatch = useDispatch();
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState({});

    const showMessage = message => {
        setShowPopup(true);
        setPopupData(message);
    }

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
                {messagesData.loading ? (
                    <h2>Loading</h2>
                ) : messagesData.error ? (
                    <h2>{messagesData.error}</h2>
                ) : messagesData.messages.length === 0 ? (
                    <h2>No data to display</h2>
                ) : (
                    <tbody>
                        {messagesData && messagesData.messages && messagesData.messages.map(message =>
                            <tr key={message.id}>
                                <td>{messagesData.messages.indexOf(message) + 1}</td>
                                <td>{message.fullName}</td>
                                <td>{message.email}</td>
                                <td>{message.messageText}</td>
                                <td>{message.date}</td>
                                <td className="actions">
                                    <img src={read} alt="read" title="Read message" onClick={() => showMessage(message)} />
                                    <img src={delete_icon} alt="delete" title="Delete message" onClick={() => my_dispatch(deleteMessage(message.id))} />
                                </td>
                            </tr>
                        )}

                        {showPopup && <div className="popup-card">
                            <div className="popup-card-inner">
                                <div className="popup-header">
                                    <div>
                                        <h1>From {popupData.fullName}</h1>
                                        <h6>{popupData.email}</h6>
                                    </div>
                                    <div className="popup-buttons">
                                        <img src={delete_icon} alt="delete" title="Delete message" onClick={() => my_dispatch(deleteMessage(popupData.id))} />
                                        <div className="close-popup" onClick={() => setShowPopup(false)}>X</div>
                                    </div>
                                </div>
                                <div className="message-container">
                                    <p className="message-text">{popupData.messageText}</p>
                                </div>
                            </div>
                        </div>}
                    </tbody>
                )}
            </Table>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        messagesData: state.messages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMessages: () => dispatch(fetchMessages())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Messages)