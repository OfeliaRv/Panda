import left_item_home from '../../assets/img/left-item-home.svg'
import left_item_products from '../../assets/img/left-item-products.svg'
import arrow from '../../assets/img/arrow.svg'
import { useContext } from 'react'
import { DataContext } from '../../DataContext'
import { Route } from 'react-router'

const MainSection = ({ children }) => {
    const { leftNameData, homePageData, clickedItem } = useContext(DataContext);
    const [home, setHome] = homePageData;
    const [clicked, setClicked] = clickedItem;

    const handleClick = (id) => {
        let newId = id;
        setClicked(id);
        console.log(id);
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

    return (
        <section className="main-section">
            <div className="left-items">
                <Route exact path="/">
                    <img src={left_item_home} alt="Home" />
                </Route>
                <Route path="/products">
                    <img src={left_item_products} alt="Products" />
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
                <div className="next-button">
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </section>
    );
}

export default MainSection;
