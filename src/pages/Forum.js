import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { changeTopicStatus, deleteTopic, fetchTopics } from '../actions/ForumTopicAction'
import approve from '../assets/img/approve.svg'
import deny from '../assets/img/deny.svg'
import enabled from '../assets/img/enabled.svg'
import disabled from '../assets/img/disabled.svg'

const Forum = ({ fetchTopics, forumData }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchTopics();
    }, []);

    // sort by date (show latest first)
    var topics = forumData.topics.sort((a, b) => (a.date > b.date) ? 1 : -1).reverse();

    return (
        <div className="dashboard" id="forum">
            <div className="dashboard-header">
                <h1>PANDA Forum list</h1>
            </div>
            <Table bordered responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Topic</th>
                        <th>Topic Author</th>
                        <th>Topic Text</th>
                        <th>Number of views</th>
                        <th>Date posted</th>
                        <th>Status</th>
                        <th>Responses</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {forumData.loading_topic ? (
                    <h2>Loading</h2>
                ) : forumData.error_topic ? (
                    <h2>{forumData.error}</h2>
                ) : forumData.topics && forumData.topics.length === 0 ? (
                    <h2>No data to display</h2>
                ) : (
                    <tbody>
                        {forumData && forumData.topics && topics.map(forum =>
                            <tr key={forum.id}>
                                <td>{forumData.topics.indexOf(forum) + 1}</td>
                                <td>{forum.topicName}</td>
                                <td>{forum.authorFullName}</td>
                                <td>{forum.topicText}</td>
                                <td>{forum.nRead}</td>
                                <td>{forum.date}</td>
                                <td>{forum.status}</td>
                                <td>{forum.responses == null && 0}{forum.responses && forum.responses.length}<br /><Link to={`/forum-topics/${forum.id}/responses`}>See responses</Link></td>
                                {forum.status == "Pending" && <td className="actions"> <img src={approve} onClick={() => dispatch(changeTopicStatus(forum.id, "Approved"))} alt="approve" title="Approve request" />
                                    <img src={deny} onClick={() => dispatch(deleteTopic(forum.id))} alt="deny" title="Deny request" /> </td>}
                                {forum.status == "Approved" && <td className="actions"> <img src={enabled} onClick={() => dispatch(changeTopicStatus(forum.id, "Disabled"))} alt="enabled" title="Disable topic" /></td>}
                                {forum.status == "Disabled" && <td className="actions"> <img src={disabled} onClick={() => dispatch(changeTopicStatus(forum.id, "Approved"))} alt="disabled" title="Enable topic" /></td>}
                            </tr>
                        )}
                    </tbody>
                )}
            </Table>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        forumData: state.forum
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTopics: () => dispatch(fetchTopics())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Forum)