import { useContext } from 'react'
import Widget from './Widget'
import { DataContext } from '../../DataContext'

const Widgets = () => {
    const { widgetData } = useContext(DataContext);
    const [widgets] = widgetData;

    return (
        <div className="widgets-row">
            {widgets.map(widget => <Widget widgets={widgets} widget={widget} key={widget.id} />)}
        </div>
    );
}

export default Widgets;