import left_item_home from '../assets/img/left-item-home.svg'
import left_item_products from '../assets/img/left-item-products.svg'
import left_item_customers from '../assets/img/left-item-customers.svg'
import left_item_news from '../assets/img/left-item-news.svg'
import left_item_reviews from '../assets/img/left-item-reviews.svg'
import left_item_contacts from '../assets/img/left-item-contact.svg'
import { Route } from 'react-router'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { loadNews, showPage, loadProducts, loadWidgets, setHomepage, loadReviews } from '../actions/showDataActions'

const MainSection = ({ children, newsData, productsData, customersData, reviewsData }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            newsSlideNext();
        }, 5000);
        return () => clearTimeout(timer);
    });

    const [carouselCounter, setCarouselCounter] = useState(0);
    const [objectCounter, setObjectCounter] = useState(0);

    // get homepages
    const homepages = useSelector(state => state.home.homepage);
    // active homepage
    const clickedHome = useSelector(state => state.home.activeHomepage);


    // get all news 
    const news = newsData.news;

    // calculate the number of news pages (needed dots)
    const news_pages = Math.ceil(news.length / 4);

    // show current page (little grey dot)
    const activePage = useSelector(state => state.showData.showPage);


    // get all products
    const products = productsData.products;
    // calculate the number of product pages (needed dots)
    const product_pages = Math.ceil(products.length / 6);


    // get add widgets
    const widgets = customersData.customers;
    // calculate the number of widget pages (needed dots)
    const widget_pages = Math.ceil(widgets.length / 3);

    const n_widgets = Math.trunc(widgets.length / 3);  // number of pages with 3 widgets (=> last page has none, 1 or 2 widget)


    // get all reviews
    const reviews = reviewsData.reviews;
    // calculate the number of widget pages (needed dots)
    const review_pages = Math.ceil(reviews.length / 3);

    // news slider on next button click
    function newsSlideNext() {
        dispatch(loadNews(carouselCounter + 1));
        setCarouselCounter(carouselCounter + 1);

        if (activePage < news_pages) {
            dispatch(showPage(activePage + 1));
        }
        else {
            dispatch(showPage(1));
        }
    }

    function newsSlidePrevious() {
        if (carouselCounter > 0) {
            dispatch(loadNews(carouselCounter - 1));
            setCarouselCounter(carouselCounter - 1);
            dispatch(showPage(activePage - 1));
        }
    }

    // products slider on next button click
    const productsSlidePrevious = () => {
        if (activePage > 0) {
            dispatch(loadProducts(-6, products.length));
            dispatch(showPage(activePage - 1));
        }
    }

    const productsSlideNext = () => {
        if (activePage < product_pages - 1) {
            dispatch(loadProducts(6, products.length));
            dispatch(showPage(activePage + 1));
        }
        else {
            dispatch(loadProducts(0, products.length));
            dispatch(showPage(0));
        }
    }

    // widgets slider on arrow buttons click
    const widgetsSlidePrevious = () => {
        if (activePage > 0) {
            if (activePage == widget_pages) { // if it is the last page
                dispatch(loadWidgets(widgets.length % 3, widgets.length)); // then subtract remaining widgets first, and then the full 3-widget pages
                setObjectCounter(0);
            } else {
                dispatch(loadWidgets(-3, widgets.length));
                dispatch(showPage(activePage - 1));
            }
        }
        console.log(activePage);
    }

    const widgetsSlideNext = () => {
        if (activePage < widget_pages - 1) {
            if (objectCounter < n_widgets) {
                dispatch(loadWidgets(3, widgets.length));
                setObjectCounter(objectCounter + 1);
            } else {
                dispatch(loadWidgets(widgets.length % 3, widgets.length));
                setObjectCounter(0);
            }
            dispatch(showPage(activePage + 1));
        }
        else {
            dispatch(loadWidgets(0, widgets.length));
            dispatch(showPage(0));
            setObjectCounter(0);
        }

        // console.log(objectCounter);
    }

    // review pages on next button click
    const reviewsSlidePrevious = () => {  // fix this
        if (activePage < review_pages - 1) {
            dispatch(loadReviews(3, reviews.length));
            dispatch(showPage(activePage + 1));
        }
        else {
            dispatch(loadReviews(0, reviews.length));
            dispatch(showPage(0));
        }
    }

    const reviewsSlideNext = () => {
        if (activePage < review_pages - 1) {
            dispatch(loadReviews(3, reviews.length));
            dispatch(showPage(activePage + 1));
        }
        else {
            dispatch(loadReviews(0, reviews.length));
            dispatch(showPage(0));
        }
    }

    return (
        <section className="main-section">
            <div id={'left' + clickedHome} className="left-items">
                <Route exact path="/">
                    <img src={left_item_home} alt="Home" />
                </Route>
                <Route path="/products">
                    <img src={left_item_products} alt="Products" />
                </Route>
                <Route path="/customers">
                    <img src={left_item_customers} alt="Customers" />
                </Route>
                <Route path="/reviews">
                    <img src={left_item_reviews} alt="Reviews" />
                </Route>
                <Route path="/forum">
                    <img src={left_item_reviews} alt="Reviews" />
                </Route>
                <Route path="/starttopic">
                    <img src={left_item_reviews} alt="Reviews" />
                </Route>
                <Route path="/news">
                    <img src={left_item_news} alt="News" />
                </Route>
                <Route path="/contacts">
                    <img src={left_item_contacts} alt="Contact" />
                </Route>
            </div>
            <div id={'center' + clickedHome} className="center-content">
                {children}
            </div>
            <div id={'right' + clickedHome} className="right-items">
                {<Route exact path="/">
                    <div className="selector-buttons-group">
                        {homepages.map(homeData =>
                            <div className={"selector-button-container " + (homeData.id === clickedHome ? "button-clicked" : "")} onClick={() => dispatch(setHomepage(homeData.id))} key={homeData.id}>
                                <div className="button-stroke">
                                    <div className="button">
                                        <div className="button-dot"></div>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </Route>}
                {clickedHome == 0 && <Route exact path="/">
                    <div className="arrow-buttons">
                        <div id="previous" className="arrow-button white-button square-button" onClick={newsSlidePrevious}>
                            <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                            </svg>
                        </div>
                        <div className="arrow-button white-button square-button" onClick={newsSlideNext}>
                            <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                            </svg>
                        </div>
                    </div>
                </Route>}
                {/* {clickedHome == 1 && <Route exact path="/">
                    <div className="arrow-buttons">
                        <div id="previous" className="arrow-button white-button square-button" onClick={widgetsSlidePrevious}>
                            <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                            </svg>
                        </div>
                        <div className="arrow-button white-button square-button" onClick={widgetsSlideNext}>
                            <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                            </svg>
                        </div>
                    </div>
                </Route>} */}
                <Route path="/news">
                    <div className="arrow-buttons">
                        <div id="previous" className="arrow-button white-button square-button" onClick={newsSlidePrevious}>
                            <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                            </svg>
                        </div>
                        <div className="arrow-button white-button square-button" onClick={newsSlideNext}>
                            <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                            </svg>
                        </div>
                    </div>
                </Route>
                <Route exact path="/products">
                    <div className="arrow-buttons">
                        <div id="previous" className="arrow-button white-button square-button" onClick={productsSlidePrevious}>
                            <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                            </svg>
                        </div>
                        <div className="arrow-button white-button square-button" onClick={productsSlideNext}>
                            <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                            </svg>
                        </div>
                    </div>
                </Route>
                <Route exact path="/reviews">
                    <div className="arrow-buttons">
                        <div id="previous" className="arrow-button white-button square-button" onClick={reviewsSlidePrevious}>
                            <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                            </svg>
                        </div>
                        <div className="arrow-button white-button square-button" onClick={reviewsSlideNext}>
                            <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.09766 23.7395L10.8436 14.0444L1.09766 4.34921L4.0925 1.35438L16.7825 14.0444L4.0925 26.7344L1.09766 23.7395Z" fill="#8A92A5" />
                            </svg>
                        </div>
                    </div>
                </Route>
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        customersData: state.customers,
        productsData: state.products,
        reviewsData: state.reviews,
        newsData: state.news
    }
}

export default connect(
    mapStateToProps
)(MainSection)

