const Widget = props => {
    return (
        <div className="widget">
            <div className="widget-data">
                <div className="widget-logo">
                {props.widget.logo}
                    {/* <img src={props.widget.logo} alt="logo" /> */}
                </div>
                <div className="widget-text">
                    <p>{props.widget.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Widget;