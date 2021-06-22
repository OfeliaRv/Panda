import { useEffect, useState } from 'react'
import MainSection from '../components/MainSection'
import user_photo from '../assets/img/user-photo.png'
import { fetchTopics, incrementViews } from '../actions/forumAction'
import { connect, useDispatch } from 'react-redux'
import authService from '../components/api-authorization/AuthorizeService'

const Forum = ({ forumData, fetchTopics }) => {
    const dispatch = useDispatch();

    // current user
    const [user, setUser] = useState({});

    useEffect(() => {
        // get all topics
        fetchTopics();

        // get current user
        authService.getUser().then(user => { setUser(user) });

        // set title
        document.title = "Panda Navigation - Forum"
    }, []);

    // sort by number views (show most popular first)
    var topics = forumData.topics.sort((a, b) => (a.nRead > b.nRead) ? 1 : -1).reverse();

    return forumData.loading_topic ? (
        <div className="loader-container">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    ) : forumData.error ? (
        <h2>{forumData.error_topic}</h2>
    ) : (
        <div id="forum">
            <MainSection>
                <div className="forum-container">
                    <div className="forum">
                        {forumData.topics.length === 0 && <h2>No data to display</h2>}
                        {forumData && forumData.topics && topics.map(forumItem =>
                            <a onClick={() => dispatch(incrementViews(forumItem.id, forumItem.nRead + 1))} href={`/forum/${forumItem.id}`} key={forumItem.id}>
                                <div className="forum-item">
                                    <div className="forum-item-data">
                                        <div className="forum-head">
                                            <h5>{forumItem.topicName}</h5>
                                            <div id="forum-buttons-top" className="forum-item-buttons">
                                                <div className="round-button white-button">
                                                    <svg className="bookmark" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.29134 3.125H17.708C18.8538 3.125 19.7913 4.0625 19.7913 5.20833V21.875L12.4997 18.75L5.20801 21.875V5.20833C5.20801 4.0625 6.14551 3.125 7.29134 3.125ZM12.4997 16.4792L17.708 18.75V6.25C17.708 5.67708 17.2393 5.20833 16.6663 5.20833H8.33301C7.76009 5.20833 7.29134 5.67708 7.29134 6.25V18.75L12.4997 16.4792Z" fill="#6D7587" />
                                                        <path className="bookmark-fill" fillRule="evenodd" clipRule="evenodd" d="M6.32715 20.0929V4.49414H18.3271V20.4941L11.9908 17.6081L6.32715 20.0929Z" fill="none" />
                                                    </svg>
                                                </div>
                                                {user && <div className="add-comment-button white-button">
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.5 1.75H17.5C18.4625 1.75 19.25 2.5375 19.25 3.5V14C19.25 14.9625 18.4625 15.75 17.5 15.75H5.25L1.75 19.25V3.5C1.75 2.5375 2.5375 1.75 3.5 1.75ZM5.25 14H17.5V3.5H3.5V15.75L5.25 14Z" fill="#6D7587" />
                                                    </svg>
                                                    <p>Add new response</p>
                                                </div>}
                                            </div>
                                        </div>
                                        <p>{forumItem.topicText}</p>
                                        <div className="user-info">
                                            <img src={user_photo} alt="user" />
                                            <h6>Posted by {forumItem.authorFullName}</h6>
                                        </div>
                                        <div className="forum-item-tools">
                                            {user && <div id="forum-buttons-bottom" className="forum-item-buttons">
                                                <div className="add-response-button white-button">
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.5 1.75H17.5C18.4625 1.75 19.25 2.5375 19.25 3.5V14C19.25 14.9625 18.4625 15.75 17.5 15.75H5.25L1.75 19.25V3.5C1.75 2.5375 2.5375 1.75 3.5 1.75ZM5.25 14H17.5V3.5H3.5V15.75L5.25 14Z" fill="#6D7587" />
                                                    </svg>
                                                    <p>Add new response</p>
                                                </div>
                                            </div>}
                                            <div className="forum-item-buttons">
                                                <div className="forum-item-btn">
                                                    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.4999 0.0410156C19.2963 0.0410156 24.6177 7.21626 24.8411 7.52178C25.0529 7.81133 25.0529 8.20474 24.8411 8.49453C24.6177 8.79976 19.2963 15.975 12.4999 15.975C5.70342 15.975 0.381738 8.7998 0.158643 8.49429C-0.0528809 8.20444 -0.0528809 7.81133 0.158643 7.52148C0.381738 7.21626 5.70342 0.0410156 12.4999 0.0410156ZM1.87402 8.00747C3.15757 9.56436 7.49355 14.3267 12.4999 14.3267C17.5169 14.3267 21.8438 9.5668 23.1257 8.00859C21.8416 6.45088 17.5059 1.68936 12.4999 1.68936C7.48281 1.68936 3.15591 6.44922 1.87402 8.00747Z" fill="#6D7587" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.55469 8.00757C7.55469 5.28091 9.7731 3.0625 12.4998 3.0625C15.2264 3.0625 17.4448 5.28091 17.4448 8.00757C17.4448 10.7342 15.2264 12.9526 12.4998 12.9526C9.7731 12.9526 7.55469 10.7342 7.55469 8.00757ZM9.20308 8.00757C9.20308 9.82539 10.6819 11.3042 12.4998 11.3042C14.3176 11.3042 15.7964 9.82539 15.7964 8.00757C15.7964 6.18975 14.3176 4.71089 12.4998 4.71089C10.6819 4.71089 9.20308 6.18975 9.20308 8.00757Z" fill="#6D7587" />
                                                    </svg>
                                                    <p>{forumItem.nRead}</p>
                                                </div>
                                                <div className="forum-item-btn" style={{ borderLeft: '1px solid #8B919F' }}>
                                                    <svg className="comment" width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.5 1.75H17.5C18.4625 1.75 19.25 2.5375 19.25 3.5V14C19.25 14.9625 18.4625 15.75 17.5 15.75H5.25L1.75 19.25V3.5C1.75 2.5375 2.5375 1.75 3.5 1.75ZM5.25 14H17.5V3.5H3.5V15.75L5.25 14Z" fill="#6D7587" />
                                                    </svg>
                                                    <p>{forumItem.responses == null && 0} {forumItem.responses && forumItem.responses.length}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )}
                    </div>
                    {user && <div className="forum-stats">
                        <div className="start-topic-button-holder">
                            <a href="/starttopic" className="start-topic-button grey-button">Start a new topic</a>
                        </div>
                    </div>}
                </div>
            </MainSection>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        forumData: state.forum // access data in forum reducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTopics: () => dispatch(fetchTopics()) // access function to fetch all topics
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Forum)