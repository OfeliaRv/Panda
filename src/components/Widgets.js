import { useContext } from 'react'
import Widget from './Widget'
import { DataContext } from '../DataContext'

const Widgets = () => {
    const { widgetData, firstWidget, lastWidget } = useContext(DataContext);
    const [widgets] = widgetData;
    const [firstW] = firstWidget;
    const [lastW] = lastWidget;

    return (
        <div>
            <div className="widgets-row">
                {widgets.slice(firstW, lastW).map(widget => <Widget widgets={widgets} widget={widget} key={widget.id} />)}
            </div>
            {/* <div className="slider-buttons">
                {dots.map(dot =>
                    <div className={"slide-button " + (dot.id === clickedS ? "active-slide" : "")} key={dot.id} onClick={() => handleSlides(dot.id)}></div>
                )}
            </div> */}
        </div>
    );
}

export default Widgets;