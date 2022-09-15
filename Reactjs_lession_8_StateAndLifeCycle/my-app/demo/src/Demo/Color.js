import React from 'react';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'black' };
    }

    componentDidMount() {
        setTimeout(() => { 
            this.setState({ color: 'blue' }) 
        }, 5000);
    }

    render() {
        return (
            <div style={ {
                backgroundColor: this.state.color,
                paddingTop: 20,
                width: 400,
                height: 80,
                margin: 'auto'
            }}/>
        );
    }
}

export default Color;