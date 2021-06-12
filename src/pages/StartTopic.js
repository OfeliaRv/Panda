import MainSection from '../components/MainSection'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTopic } from '../actions/forumAction'

const StartTopic = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    useEffect(() => {
        setData(prevState => ({ ...prevState, authorFullName: "Ofelya Rahmanova" }))
    }, [])

    const onSubmit = () => {
        // setData(prevState => ({ ...prevState, authorFullName: "Ofelya Rahmanova" }))
        dispatch(addTopic(data));
    }

    return (
        <div id="forum-topic">
            <MainSection>
                <div className="forum-container">
                    <form className="forum" onSubmit={onSubmit}>
                        <h1>Start New Topic</h1>
                        <div className="forum-item">
                            <div className="forum-item-data">
                                <div className="forum-head">
                                    <input className="form-input" type="text" placeholder="Topic Title: What is your question?" onChange={e => setData(prevState => ({ ...prevState, topicName: e.target.value }))} required />
                                </div>
                                <textarea className="form-input" cols="30" rows="10" placeholder="Specify your question and give wider information" onChange={e => setData(prevState => ({ ...prevState, topicText: e.target.value }))} required />
                            </div>
                        </div>
                        <div className="start-topic-button-holder">
                            <button type="submit" className="start-topic-button grey-button">Start a new topic</button>
                        </div>
                    </form>
                </div>
            </MainSection>
        </div>
    );
}

export default StartTopic;