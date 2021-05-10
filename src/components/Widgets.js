import Widget from './Widget'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadWidgets, showPage } from '../actions/showData'

const Widgets = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showPage(0));
    }, [])

    // get add widgets
    const widgets = useSelector(state => state.companies.companies);

    // show maximum 6 products on a page
    const getWidgetsRange = useSelector(state => state.showData.loadWidgets);

    // show current page (little grey dot)
    const activePage = useSelector(state => state.showData.showPage);

    var dots = [];
    const dots_num = Math.ceil(widgets.length / 3);
    for (let i = 0; i < dots_num; i++) {
        dots[i] = {
            id: i
        };
    }

    const handleSlides = id => {
        dispatch(loadWidgets(0 + 3 * id));
        dispatch(showPage(id));
    }

    return (
        <div>
            <div className="widgets-row">
                {widgets.slice(getWidgetsRange.first, getWidgetsRange.last).map(widget => <Widget widgets={widgets} widget={widget} key={widget.id} />)}
            </div>
            <div className="slider-buttons">
                {dots.map(dot =>
                    <div className={"slide-button " + (dot.id === activePage ? "active-slide" : "")} key={dot.id} onClick={() => handleSlides(dot.id)}></div>
                )}
            </div>
        </div>
    );
}

export default Widgets;