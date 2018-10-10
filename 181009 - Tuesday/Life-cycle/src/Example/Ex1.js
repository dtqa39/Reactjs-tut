import React, { Component } from 'react';


class ex1 extends Component {

    componentWillReceiveProps(nextProps) {
        console.log("ex1 receive" + nextProps.name);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("ex1 should");
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("ex1 will");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("ex1 did");
    }
    
    
    
    
    render() {
        console.log("ex1 render");
        return (
            <div>
                <h4>This is {this.props.name}</h4>
            </div>
        );
    }
}

export default ex1;