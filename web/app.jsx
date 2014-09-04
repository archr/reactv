/**
 * @jsx React.DOM
 */

var React = window.React = require('react');
var LogsView = require('./components/LogsView.jsx');


var Application = window.Application = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Dashboard</h1>
        <LogsView />
      </div>
    );
  }

});

App = {
  start: function () {
    React.renderComponent(<Application />, document.body);
  }
}

module.exports = App;