import { DataContext } from '../DataContext'
import { useContext, useEffect } from 'react'
import MainSection from '../components/MainSection'
import user_photo from '../assets/img/user-photo.png'
import user from '../assets/img/user.png'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ForumPage from './ForumPage'

const Forum = () => {
    const { forumData } = useContext(DataContext);
    const [forumItems] = forumData;

    useEffect(() => {
        document.title = "Panda Navigation - Forum"
    }, [])

    return (
        <div id="forum">
            <MainSection>
                <Router>
                    <div className="forum-container">
                        <div className="forum">
                            <Route exact path="/forum">
                                {forumItems.map(forumItem =>
                                    <a href={`/forum/${forumItem.id}`} key={forumItem.id}>
                                        <div className="forum-item">
                                            <div className="forum-item-rating">
                                                <div className="rating-components">
                                                    <svg className="forum-upvote" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.0004 7.99V19C13.0004 19.55 12.5504 20 12.0004 20C11.4504 20 11.0004 19.55 11.0004 19V7.99H9.21041C8.76041 7.99 8.54041 7.45 8.86041 7.14L11.6504 4.36C11.8504 4.17 12.1604 4.17 12.3604 4.36L15.1504 7.14C15.4704 7.45 15.2404 7.99 14.8004 7.99H13.0004Z" fill="black" />
                                                    </svg>
                                                    <p>21</p>
                                                    <svg className="forum-downvote" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.0004 16.01V5C13.0004 4.45 12.5504 4 12.0004 4C11.4504 4 11.0004 4.45 11.0004 5V16.01H9.21041C8.76041 16.01 8.54041 16.55 8.86041 16.86L11.6504 19.64C11.8504 19.83 12.1604 19.83 12.3604 19.64L15.1504 16.86C15.4704 16.55 15.2404 16.01 14.8004 16.01H13.0004Z" fill="black" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="forum-item-data">
                                                <h1>Lorem ipsum?</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <div className="user-info">
                                                    <img src={user_photo} alt="user" />
                                                    <h6>Posted by Name Surname</h6>
                                                </div>

                                                <div className="forum-item-tools">
                                                    <div className="forum-item-buttons">
                                                        <div className="round-button white-button">
                                                            <svg className="bookmark" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.29134 3.125H17.708C18.8538 3.125 19.7913 4.0625 19.7913 5.20833V21.875L12.4997 18.75L5.20801 21.875V5.20833C5.20801 4.0625 6.14551 3.125 7.29134 3.125ZM12.4997 16.4792L17.708 18.75V6.25C17.708 5.67708 17.2393 5.20833 16.6663 5.20833H8.33301C7.76009 5.20833 7.29134 5.67708 7.29134 6.25V18.75L12.4997 16.4792Z" fill="#6D7587" />
                                                                <path className="bookmark-fill" fillRule="evenodd" clipRule="evenodd" d="M6.32715 20.0929V4.49414H18.3271V20.4941L11.9908 17.6081L6.32715 20.0929Z" fill="none" />
                                                            </svg>
                                                        </div>
                                                        <div className="add-comment-button white-button">
                                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 1.75H17.5C18.4625 1.75 19.25 2.5375 19.25 3.5V14C19.25 14.9625 18.4625 15.75 17.5 15.75H5.25L1.75 19.25V3.5C1.75 2.5375 2.5375 1.75 3.5 1.75ZM5.25 14H17.5V3.5H3.5V15.75L5.25 14Z" fill="#6D7587" />
                                                            </svg>
                                                            <p>Add new response</p>
                                                        </div>
                                                    </div>
                                                    <div className="forum-item-buttons">
                                                        <div className="forum-item-btn">
                                                            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.4999 0.0410156C19.2963 0.0410156 24.6177 7.21626 24.8411 7.52178C25.0529 7.81133 25.0529 8.20474 24.8411 8.49453C24.6177 8.79976 19.2963 15.975 12.4999 15.975C5.70342 15.975 0.381738 8.7998 0.158643 8.49429C-0.0528809 8.20444 -0.0528809 7.81133 0.158643 7.52148C0.381738 7.21626 5.70342 0.0410156 12.4999 0.0410156ZM1.87402 8.00747C3.15757 9.56436 7.49355 14.3267 12.4999 14.3267C17.5169 14.3267 21.8438 9.5668 23.1257 8.00859C21.8416 6.45088 17.5059 1.68936 12.4999 1.68936C7.48281 1.68936 3.15591 6.44922 1.87402 8.00747Z" fill="#6D7587" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.55469 8.00757C7.55469 5.28091 9.7731 3.0625 12.4998 3.0625C15.2264 3.0625 17.4448 5.28091 17.4448 8.00757C17.4448 10.7342 15.2264 12.9526 12.4998 12.9526C9.7731 12.9526 7.55469 10.7342 7.55469 8.00757ZM9.20308 8.00757C9.20308 9.82539 10.6819 11.3042 12.4998 11.3042C14.3176 11.3042 15.7964 9.82539 15.7964 8.00757C15.7964 6.18975 14.3176 4.71089 12.4998 4.71089C10.6819 4.71089 9.20308 6.18975 9.20308 8.00757Z" fill="#6D7587" />
                                                            </svg>
                                                            <p>12</p>
                                                        </div>
                                                        <div className="forum-item-btn" style={{ borderLeft: '1px solid #8B919F' }}>
                                                            <svg className="comment" width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 1.75H17.5C18.4625 1.75 19.25 2.5375 19.25 3.5V14C19.25 14.9625 18.4625 15.75 17.5 15.75H5.25L1.75 19.25V3.5C1.75 2.5375 2.5375 1.75 3.5 1.75ZM5.25 14H17.5V3.5H3.5V15.75L5.25 14Z" fill="#6D7587" />
                                                            </svg>
                                                            <p>5</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )}
                            </Route>
                            <Route exact path="/forum/:id">
                                <ForumPage />
                            </Route>
                        </div>
                        <div className="forum-stats">
                            <div className="start-topic-button-holder">
                                <button className="start-topic-button grey-button">Start a new topic</button>
                            </div>
                            {/* <h1>Top Users</h1>
                            <div className="top-users-list">
                                <div className="top-user">
                                    <img src={user} alt="user" />
                                    <p>Name Surname</p>
                                    <h6>10,5</h6>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0004 7.99V19C13.0004 19.55 12.5504 20 12.0004 20C11.4504 20 11.0004 19.55 11.0004 19V7.99H9.21041C8.76041 7.99 8.54041 7.45 8.86041 7.14L11.6504 4.36C11.8504 4.17 12.1604 4.17 12.3604 4.36L15.1504 7.14C15.4704 7.45 15.2404 7.99 14.8004 7.99H13.0004Z" fill="#32B72E" />
                                    </svg>
                                </div>
                                <div className="top-user">
                                    <img src={user} alt="user" />
                                    <p>Name Surname</p>
                                    <h6>10,5</h6>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0004 7.99V19C13.0004 19.55 12.5504 20 12.0004 20C11.4504 20 11.0004 19.55 11.0004 19V7.99H9.21041C8.76041 7.99 8.54041 7.45 8.86041 7.14L11.6504 4.36C11.8504 4.17 12.1604 4.17 12.3604 4.36L15.1504 7.14C15.4704 7.45 15.2404 7.99 14.8004 7.99H13.0004Z" fill="#32B72E" />
                                    </svg>
                                </div>
                                <div className="top-user">
                                    <img src={user} alt="user" />
                                    <p>Name Surname</p>
                                    <h6>9,3</h6>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0004 16.01V5C13.0004 4.45 12.5504 4 12.0004 4C11.4504 4 11.0004 4.45 11.0004 5V16.01H9.21041C8.76041 16.01 8.54041 16.55 8.86041 16.86L11.6504 19.64C11.8504 19.83 12.1604 19.83 12.3604 19.64L15.1504 16.86C15.4704 16.55 15.2404 16.01 14.8004 16.01H13.0004Z" fill="#E55D5D" />
                                    </svg>
                                </div>
                                <div className="top-user">
                                    <img src={user} alt="user" />
                                    <p>Name Surname</p>
                                    <h6>10,5</h6>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0004 7.99V19C13.0004 19.55 12.5504 20 12.0004 20C11.4504 20 11.0004 19.55 11.0004 19V7.99H9.21041C8.76041 7.99 8.54041 7.45 8.86041 7.14L11.6504 4.36C11.8504 4.17 12.1604 4.17 12.3604 4.36L15.1504 7.14C15.4704 7.45 15.2404 7.99 14.8004 7.99H13.0004Z" fill="#32B72E" />
                                    </svg>
                                </div>
                                <div className="top-user">
                                    <img src={user} alt="user" />
                                    <p>Name Surname</p>
                                    <h6>10,5</h6>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0004 7.99V19C13.0004 19.55 12.5504 20 12.0004 20C11.4504 20 11.0004 19.55 11.0004 19V7.99H9.21041C8.76041 7.99 8.54041 7.45 8.86041 7.14L11.6504 4.36C11.8504 4.17 12.1604 4.17 12.3604 4.36L15.1504 7.14C15.4704 7.45 15.2404 7.99 14.8004 7.99H13.0004Z" fill="#32B72E" />
                                    </svg>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </Router>
            </MainSection>
        </div>
    );
}

export default Forum;