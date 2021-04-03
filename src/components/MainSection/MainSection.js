import left_item from '../../assets/img/left-item-home.svg'
import arrow from '../../assets/img/arrow.svg'
import { useContext } from 'react'
import { DataContext } from '../../DataContext'

const MainSection = ({ children }) => {
    const { leftNameData } = useContext(DataContext);
    const [leftName] = leftNameData;

    return (
        <section className="main-section">
            <div className="left-items">
                <img src={left_item} alt="item" />
            </div>
            <div className="center-content">
                {children}
            </div>
            <div className="right-items">
                <div className="selector-buttons-group">
                    {[...Array(3)].map((i) =>
                        <div className="selector-button-container" key={i}>
                            <div className="button-stroke">
                                <div className="button">
                                    <div className="button-dot"></div>
                                </div>
                            </div>
                        </div>)}
                    <div className="selector-button-container button-clicked">
                        <div className="button-stroke">
                            <div className="button">
                                <div className="button-dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="next-button">
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </section>
    );
}

export default MainSection;
