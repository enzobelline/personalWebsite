'use strict';

// Define a React component
class HelloMessage extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.name}`);
  }
}

// Render the React component to the DOM
ReactDOM.render(
  React.createElement(HelloMessage, {name: 'World'}, null),
  document.getElementById('root')
);
