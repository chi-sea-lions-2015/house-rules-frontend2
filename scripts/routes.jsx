var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var HouseRules = require('./components/HouseRules.react.jsx');
var LoginPage = require('./components/session/LoginPage.react.jsx');
var MessagesPage = require('./components/messages/MessagesPage.react.jsx');
var MessagePage = require('./components/messages/MessagePage.react.jsx');
var MessageNew = require('./components/messages/MessageNew.react.jsx');
var MessageBox = require('./components/messages/_message_box.react.jsx');
var SignupPage = require('./components/session/SignupPage.react.jsx');

var ChoreBox = require('./components/chores/ChoreBox.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={HouseRules}>
    <DefaultRoute handler={MessageBox} />
    <Route name="login" path="/login" handler={LoginPage}/>
    <Route name="signup" path="/signup" handler={SignupPage}/>
    <Route name="messages" path="/house/:houseId/messages" handler={MessageBox}/>
    <Route name="message" path="/messages/:messageId" handler={MessagePage} />
    <Route name="new-message" path="/message/new" handler={MessageNew}/>
    <Route name="chores" path="/house/:houseId/chores" handler={ChoreBox}/>
    <Route name="chore" path="/chores/:choreId" handler={ChoreBox} />
    <Route name="new-chore" path="/chore/new" handler={ChoreBox}/>
  </Route>
);
