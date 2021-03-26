import React from 'react';
import ReactDOM from 'rect-dom';

class Button extends React.component {
    scream() {
        alert('aaaaaaaaaah!!!');
    }
    render() {
        return <button onClick={this.scream}>aaah!</button>;
    }
}
ReactDOM.render(<Button/>, document.getElementById('app'));