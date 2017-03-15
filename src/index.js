import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';



import App from './app/App';
import DashboardComponent from './components/dashboard/dashboard.component';

import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#000',
  },
  appBar: {
    color: '#919389',
  },
});
ReactDOM.render((
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={DashboardComponent} />
        </Route>
      </Router>
    </MuiThemeProvider>),
  document.getElementById('root')
);
