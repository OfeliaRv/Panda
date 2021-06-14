import date_icon from '../assets/img/date-icon.svg'

const NewsItem = props => {
    return (
        <a href={"/news/" + props.news.id} className="news-item" key={props.news.id} onClick={() => props.handleNews((props.news.id))}>
            <div className="news-img">
                <img className="news-image" src={`../img/${props.news.photo}`} alt="news" />
            </div>
            <div className="news-info">
                <h6>{props.news.title}</h6>
                <div style={{ display: 'flex' }}>
                    <img src={date_icon} alt="date icon" />
                    <p>{props.news.date}</p>
                </div>
            </div>
        </a>
    );
}

export default NewsItem;