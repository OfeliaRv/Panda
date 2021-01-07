import React, { useContext } from 'react';
import Widget from './Widget';
import { DataContext } from '../../DataContext';

const Widgets = () => {
    const { widgets } = useContext(DataContext);
    const [widgetData] = widgets;

    return (
        <div className="widgets-row">
            {widgetData.map(widget => <Widget widgets={widgetData} widget={widget} key={widget.id} />)}
        </div>
    );
}

export default Widgets;