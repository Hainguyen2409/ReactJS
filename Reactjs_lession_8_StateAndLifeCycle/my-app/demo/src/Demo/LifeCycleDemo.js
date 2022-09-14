import React from 'react';

class LifeCycleDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0};
    }

     componentWillMount() {
        console.log("Component WILL MOUNT!");
      }
      componentDidMount() {
        console.log("Component DID MOUNT!");
      }
      componentWillReceiveProps(newProps) {
        console.log("Component WILL RECIEVE PROPS!");
      }
      shouldComponentUpdate(newProps, newState) {
        return true;
      }
      componentWillUpdate(nextProps, nextState) {
        console.log("Component WILL UPDATE!");
      }
      componentDidUpdate(prevProps, prevState) {
        console.log("Component DID UPDATE!");
      }
      componentWillUnmount() {
        console.log("Component WILL UNMOUNT!");
      }

    handleClick = (operator) => {
        switch (operator) {
            case '-': this.setState({ count: this.state.count - 1 });
                
                break;

            case '+': this.setState({ count: this.state.count + 1 });
                
                break;
        
            default: this.setState({ count: 0 });
                break;
        }
    };

    render() {
        return (
            <div className= 'container pt-3 text-center'>
                <span>{this.state.count}</span>
                <button className='btn btn-primary' label="increase (+)" onClick = {() => this.handleClick('+')}>Increase</button>
            </div>
        );
    }
}

export default LifeCycleDemo;