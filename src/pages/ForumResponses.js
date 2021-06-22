import Table from 'react-bootstrap/Table'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { fetchResponses } from '../actions/ForumResponseAction'
// import approve from '../assets/img/approve.svg'
// import deny from '../assets/img/deny.svg'
// import enabled from '../assets/img/enabled.svg'
// import disabled from '../assets/img/disabled.svg'

const ForumResponses = ({ fetchResponses, forumData }) => {
    const { id } = useParams();

    useEffect(() => {
        fetchResponses(id);
    }, []);

    // sort by date (show latest first)
    var responses = forumData.responses.sort((a, b) => (a.date > b.date) ? 1 : -1).reverse();

    return (
        <div className="dashboard" id="forum">
            <div className="dashboard-header">
                <h1>Responses</h1>
            </div>
            <Table bordered responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Topic</th>
                        <th>Response Author</th>
                        <th>Response Text</th>
                        <th>Date posted</th>
                    </tr>
                </thead>
                {forumData.loading_responses ? (
                    <h2>Loading</h2>
                ) : forumData.error_responses ? (
                    <h2>{forumData.error}</h2>
                ) : forumData.responses && forumData.responses.length === 0 ? (
                    <h2>No data to display</h2>
                ) : (
                    <tbody>
                        {forumData && forumData.responses && responses.map(response =>
                            <tr key={response.id}>
                                <td onClick={() => console.log(forumData.responses)}>{forumData.responses.indexOf(response) + 1}</td>
                                <td>{response.forumTopic.topicName}</td>
                                <td>{response.authorFullName}</td>
                                <td>{response.replyText}</td>
                                <td>{response.date}</td>
                                {/* <td>{forum.responses == null && 0}{forum.responses && forum.responses.length}<Link to={`/forum-topics/${forum.id}/responses`}>See responses</Link></td>
                                {forum.status == "Pending" && <td className="actions"> <img src={approve} onClick={() => dispatch(changeTopicStatus(forum.id, "Approved"))} alt="approve" title="Approve request" />
                                    <img src={deny} onClick={() => dispatch(deleteTopic(forum.id))} alt="deny" title="Deny request" /> </td>}
                                {forum.status == "Approved" && <td className="actions"> <img src={enabled} onClick={() => dispatch(changeTopicStatus(forum.id, "Disabled"))} alt="enabled" title="Disable topic" /></td>}
                                {forum.status == "Disabled" && <td className="actions"> <img src={disabled} onClick={() => dispatch(changeTopicStatus(forum.id, "Approved"))} alt="disabled" title="Enable topic" /></td>} */}
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
        fetchResponses: id => dispatch(fetchResponses(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForumResponses)