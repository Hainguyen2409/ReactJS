import React from 'react';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    increase = (e) => {
        this.setState({ number: this.state.number + 1 });
    }

    decrease = (e) => {
        this.setState({ number: this.state.number - 1 });   
    }

    handleClick = (operator) => {
        switch (operator) {
            case '-': this.setState({ number: this.state.number - 1 });
                
                break;

            case '+': this.setState({ number: this.state.number + 1 });
                
                break;
        
            default: this.setState({ number: 0 });
                break;
        }
    }

//cách 1:
    // render() {
    //     return (
    //         <div style={{textAlign: 'center', padding: '30'}}>
    //             <button onClick={this.increase}>Increase</button>
    //             <span style={{padding: '50'}}>{this.state.number}</span>
    //             <button onClick={this.decrease}>Decrease</button>
    //         </div>
    //     );
    // }
//cách 2:
    render() {
        return(
        <div className='container'>
            <button className='btn btn-primary' label='decrease' onClick={() => this.handleClick('-')}>Decrease</button>
            <span style={{padding: '50'}}>{this.state.number}</span>
            <button className='btn btn-primary' label='increase' onClick={() => this.handleClick('+')}>Increase</button>
        </div>
    )}
}

export default Count;