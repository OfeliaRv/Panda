import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { fetchResponses, fetchTopic, addResponse } from '../actions/forumAction'
import authService from '../components/api-authorization/AuthorizeService'
import MainSection from '../components/MainSection'
import user_photo from '../assets/img/user-photo.png'

const ForumPage = ({ forumData, fetchTopic, fetchResponses }) => {
    const dispatch = useDispatch();

    // get topic id from the URL
    const { id } = useParams();

    // data to be sent to the API 
    const [data, setData] = useState({});

    // current user
    const [user, setUser] = useState({});

    // to control reply field visibility
    const [responseWindowStyle, setResponseWindowStyle] = useState(false);

    useEffect(() => {
        // get selected topic
        fetchTopic(id);
    }, [])

    useEffect(() => {
        // get responses of the selected topic
        fetchResponses(id);
    }, [])

    useEffect(() => {
        // set page title
        document.title = "Panda Navigation - Forum - Forum title"

        console.log(forumData.topic);
        // get current user
        authService.getUser()
            .then(user => { setUser(user) });
    }, [forumData.responses])

    // sort by the date (show the latest first)
    var responses = forumData.responses.sort((a, b) => (a.date > b.date) ? 1 : -1).reverse();

    // toggle response field visibility
    const responseHandler = () => {
        setResponseWindowStyle(!responseWindowStyle);
    }

    const onSubmit = e => {
        e.preventDefault();
        setData(prevState => ({ ...prevState, authorFullName: user.name }));
        dispatch(addResponse(id, data));
    }

    return (
        <div id="forum-page">
            <MainSection>
                <div className="forum">
                    {/* TOPIC */}
                    <div className="forum-item">
                        <div className="forum-item-data">
                            <div className="forum-page-heading forum-item-tools">
                                <h5>{forumData.topic.topicName}</h5>
                                {user && <div className="forum-item-buttons">
                                    <div className="add-response-button white-button">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 1.75H17.5C18.4625 1.75 19.25 2.5375 19.25 3.5V14C19.25 14.9625 18.4625 15.75 17.5 15.75H5.25L1.75 19.25V3.5C1.75 2.5375 2.5375 1.75 3.5 1.75ZM5.25 14H17.5V3.5H3.5V15.75L5.25 14Z" fill="#6D7587" />
                                        </svg>
                                        <p onClick={responseHandler}>Add new response</p>
                                    </div>
                                </div>}
                            </div>
                            <p>{forumData.topic.topicText}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #8a92a5' }}>
                                <div className="user-info">
                                    <img src={user_photo} alt="user" />
                                    <h6>Posted by {forumData.topic.authorFullName}</h6>
                                </div>
                                <div className="forum-item-tools">
                                    {/* <div className="forum-item-buttons">
                            <div className="round-button white-button">
                                <svg className="bookmark" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.29134 3.125H17.708C18.8538 3.125 19.7913 4.0625 19.7913 5.20833V21.875L12.4997 18.75L5.20801 21.875V5.20833C5.20801 4.0625 6.14551 3.125 7.29134 3.125ZM12.4997 16.4792L17.708 18.75V6.25C17.708 5.67708 17.2393 5.20833 16.6663 5.20833H8.33301C7.76009 5.20833 7.29134 5.67708 7.29134 6.25V18.75L12.4997 16.4792Z" fill="#6D7587" />
                                    <path className="bookmark-fill" fillRule="evenodd" clipRule="evenodd" d="M6.32715 20.0929V4.49414H18.3271V20.4941L11.9908 17.6081L6.32715 20.0929Z" fill="none" />
                                </svg>
                            </div>
                        </div> */}
                                    <div className="forum-item-buttons">
                                        <div className="forum-item-btn">
                                            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.4999 0.0410156C19.2963 0.0410156 24.6177 7.21626 24.8411 7.52178C25.0529 7.81133 25.0529 8.20474 24.8411 8.49453C24.6177 8.79976 19.2963 15.975 12.4999 15.975C5.70342 15.975 0.381738 8.7998 0.158643 8.49429C-0.0528809 8.20444 -0.0528809 7.81133 0.158643 7.52148C0.381738 7.21626 5.70342 0.0410156 12.4999 0.0410156ZM1.87402 8.00747C3.15757 9.56436 7.49355 14.3267 12.4999 14.3267C17.5169 14.3267 21.8438 9.5668 23.1257 8.00859C21.8416 6.45088 17.5059 1.68936 12.4999 1.68936C7.48281 1.68936 3.15591 6.44922 1.87402 8.00747Z" fill="#6D7587" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.55469 8.00757C7.55469 5.28091 9.7731 3.0625 12.4998 3.0625C15.2264 3.0625 17.4448 5.28091 17.4448 8.00757C17.4448 10.7342 15.2264 12.9526 12.4998 12.9526C9.7731 12.9526 7.55469 10.7342 7.55469 8.00757ZM9.20308 8.00757C9.20308 9.82539 10.6819 11.3042 12.4998 11.3042C14.3176 11.3042 15.7964 9.82539 15.7964 8.00757C15.7964 6.18975 14.3176 4.71089 12.4998 4.71089C10.6819 4.71089 9.20308 6.18975 9.20308 8.00757Z" fill="#6D7587" />
                                            </svg>
                                            <p>{forumData.topic.nRead}</p>
                                        </div>
                                        <div className="forum-item-btn" style={{ borderLeft: '1px solid #8B919F' }}>
                                            <svg className="comment" width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 1.75H17.5C18.4625 1.75 19.25 2.5375 19.25 3.5V14C19.25 14.9625 18.4625 15.75 17.5 15.75H5.25L1.75 19.25V3.5C1.75 2.5375 2.5375 1.75 3.5 1.75ZM5.25 14H17.5V3.5H3.5V15.75L5.25 14Z" fill="#6D7587" />
                                            </svg>
                                            <p>{forumData.responses === null && 0} {forumData.responses && forumData.responses.length}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* TOPIC */}

                    <div className="responses">
                        {/* ADD RESPONSE FIELD */}
                        {responseWindowStyle &&
                            <form className="response-item" onSubmit={onSubmit}>
                                <h5>Add your response</h5>
                                <textarea cols="30" rows="5" className="form-input response-text" onChange={e => setData(prevState => ({ ...prevState, replyText: e.target.value }))} placeholder="Enter your response" />
                                <div className="reply-buttons forum-item-tools">
                                    <div className="forum-item-buttons">
                                        <button type="submit" id="reply" className="add-response-button grey-button">Reply</button>
                                    </div>
                                </div>
                            </form>}
                        {/* ADD RESPONSE FIELD */}

                        {/* RESPONSES LIST */}
                        {forumData.loading_responses ? (
                            <h2>Loading...</h2>
                        ) : forumData.error ? (
                            <h2>{forumData.error_responses}</h2>
                        ) : forumData.responses.length === 0 ? <h2>No responses yet</h2> : (
                            forumData && forumData.responses && responses.map(response =>
                                <div className="response-item" key={response.id}>
                                    <div className="review-user-info">
                                        <div className="user-info-img">
                                            <img src={user_photo} alt="user" />
                                        </div>
                                        <div className="user-info-data">
                                            <h2>{response.authorFullName}</h2>
                                            <h6>{response.authorPosition} at {response.authorCompany}</h6>
                                        </div>
                                    </div>
                                    <div className="response-text">
                                        <p>{response.replyText}</p>
                                    </div>
                                    {/* <div className="reply-buttons forum-item-tools">
                                        <div className="forum-item-buttons">
                                            <div className="add-response-button white-button">
                                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.77776 4.44443V0L0 7.77776L7.77776 15.5555V11C13.3333 11 17.2222 12.7778 20 16.6667C18.8889 11.1111 15.5556 5.55557 7.77776 4.44443Z" fill="#6D7587" />
                                                </svg>
                                                <p>Reply</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            ))}
                        {/* RESPONSES LIST */}
                    </div>
                </div>
            </MainSection>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        // access state in reducer
        forumData: state.forum
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // access action to fetch all topics
        fetchTopic: id => dispatch(fetchTopic(id)),

        // access action to fetch all responses
        fetchResponses: id => dispatch(fetchResponses(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForumPage)