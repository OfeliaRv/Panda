import { useContext } from 'react'
import Widget from './Widget'
import { DataContext } from '../DataContext'

const Widgets = () => {
    const { widgetData, firstWidget, lastWidget } = useContext(DataContext);
    const [widgets] = widgetData;
    const [firstW] = firstWidget;
    const [lastW] = lastWidget;

    return (
        <div className="widgets-row">
            {widgets.slice(firstW, lastW).map(widget => <Widget widgets={widgets} widget={widget} key={widget.id} />)}
        </div>
    );
}

export default Widgets;