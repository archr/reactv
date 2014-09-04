/**
 * @jsx React.DOM
 */

var React = require('react');
var io = require('socket.io-client');
var socket;

var Log = React.createClass({
  render: function () {
    var data = this.props.data;
    var req = data.req;
    var res = data.res;
    var headers = data.req.headers;
    var text = res.statusCode + " "  + req.method + "  " + req.originalUrl + " " + headers['user-agent'];

    return (
      <li key={data.timestamp}>{text}</li>
      )
  }
});

var LogsView = React.createClass({
  getInitialState: function (){
    return {
      logs: []
    }
  },
  render: function() {
    var logs = this.state.logs.map(function (log){
      return <Log data={log} />
    });

    return (
      <div >
        {logs}
      </div>
    );
  },
  componentDidMount: function (){
    var self = this;
    socket = io('http://localhost');

    socket.on("connect", function (){
      socket.emit('room', 'logs');
    });

    socket.on('log', function (data){
      self.addLog(JSON.parse(data));
    });
  },
  addLog: function (log) {
    var logs = this.state.logs;
    this.setState({logs: logs.concat([log])})
  }
});

module.exports = LogsView;