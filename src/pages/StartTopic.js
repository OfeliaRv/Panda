import MainSection from '../components/MainSection'

const StartTopic = () => {
    return (
        <div id="forum-topic">
            <MainSection>
                <div className="forum-container">
                    <form className="forum">
                        <h1>Start New Topic</h1>
                        <div className="forum-item">
                            <div className="forum-item-data">
                                <div className="forum-head">
                                    <input className="form-input" type="text" placeholder="Topic Title: What is your question?" required />
                                </div>
                                <textarea className="form-input" cols="30" rows="10" placeholder="Specify your question and give wider information" required />
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