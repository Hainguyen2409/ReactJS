import React from 'react';
import ConditionalRendering from './ConditionalRendering';

class ExpandApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
        };
    }

    handleExpand = () => {
        this.setState({ isExpand: true });
    }
    handleCollapse = () => {
        this.setState({ isExpand: false });
    }

    render() {
        const {isExpand} = this.state;
        if (isExpand) return (<ConditionalRendering onCollapse= {this.handleCollapse} />);

        return (
            <div className="container">
                <div>
                    <h1 style={{ textAlign: 'left', backgroundColor: 'green', color: 'white' }}>
                        <strong>ConditionalRendering</strong>
                    </h1>
                    <button onClick={this.handleExpand}>Xem Giới Thiệu</button>
                </div>
            </div>
        )
    }
}
export default ExpandApp;