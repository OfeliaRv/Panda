import left_item_home from '../assets/img/left-item-home.svg'
import left_item_products from '../assets/img/left-item-products.svg'
import left_item_customers from '../assets/img/left-item-customers.svg'
import left_item_news from '../assets/img/left-item-news.svg'
import { useContext } from 'react'
import { DataContext } from '../DataContext'
import { Route } from 'react-router'

const MainSection = ({ children }) => {
    const { homePageData, clickedItem, newsData, firstSlide, lastSlide, clickedSlide } = useContext(DataContext);
    const [home, setHome] = homePageData;
    const [clicked, setClicked] = clickedItem;
    const [firstS, setfirstS] = firstSlide;
    const [lastS, setlastS] = lastSlide;
    const [clickedS, setClickedS] = clickedSlide;
    const [news] = newsData;
    const dots_num = Math.ceil(news.length / 5);

    const handleClick = (id) => {
        let newId = id;
        setClicked(id);
        let visible = 0;
        for (let i = 0; i < home.length; i++) {
            home[i].clicked = false;
            if (i === newId) {
                visible = i;
            }
        }
        home[visible].clicked = true;
        setHome(home);
    }

    const newsSlidesHandler = () => {
        if (clickedS < dots_num - 1) {
            setfirstS(firstS + 4);
            setlastS(lastS + 4);
            setClickedS(clickedS + 1);
        }
        else {
            setfirstS(0);
            setlastS(5);
            setClickedS(0);
        }
    }

    return (
        <section className="main-section">
            <div id={'left' + clicked} className="left-items">
                <Route exact path="/">
                    <img src={left_item_home} alt="Home" />
                </Route>
                <Route path="/products">
                    <img src={left_item_products} alt="Products" />
                </Route>
                <Route path="/customers">
                    <img src={left_item_customers} alt="Customers" />
                </Route>
                <Route path="/news">
                    <img src={left_item_news} alt="News" />
                </Route>
            </div>
            <div id={'center' + clicked} className="center-content">
                {children}
            </div>
            <div id={'right' + clicked} className="right-items">
                <div className="selector-buttons-group">
                    {home.map(homeData =>
                        <div className={"selector-button-container " + (homeData.id === clicked ? "button-clicked" : "")} onClick={() => handleClick(homeData.id)} key={homeData.id}>
                            <div className="button-stroke">
                                <div className="button">
                                    <div className="button-dot"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Route path="/news">
                    <div className="next-button white-button" onClick={newsSlidesHandler}>
                        <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                        </svg>
                    </div>
                </Route>
                {clicked == 0 && <Route exact path="/">
                    <div className="next-button white-button" onClick={newsSlidesHandler}>
                        <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                        </svg>
                    </div>
                </Route>}
                {clicked == 1 && <Route exact path="/">
                    <div className="next-button white-button">
                        <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                        </svg>
                    </div>
                </Route>}
            </div>
        </section>
    );
}

export default MainSection;
