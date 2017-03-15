import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from "react-redux";

import { AppBar, IconButton, IconMenu, MenuItem, Badge, MuiThemeProvider } from 'material-ui';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionChangeHistory from 'material-ui/svg-icons/action/change-history';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';


import './App.css';

const styles = {
  title: {
    cursor: 'pointer',
    float: 'left'
  },
};
// Custom NotificationIcon as I couldn't import MaterialUI's
const NotificationIcon = (props) => {
  return (
    <svg width={24} height={24}>
      <path fill={props.color} d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
    </svg>
  );
};


class App extends Component {
  state = {
    open:true,
    valueSingle: '3',
    valueMultiple: ['3', '5'],
  };
  render() {
    var menuList = ['Signup', 'Login', 'Complains'];
    const buttonStyle = { color: 'white' };

    const beforeLogin = (
      <div className='Navbar-Main-Menu'>
        <FlatButton
          label='Sign Up'
          style={buttonStyle}
          onClick={() => browserHistory.push('/signup')}
          />
        <FlatButton
          label='Login'
          style={buttonStyle}
          onClick={() => browserHistory.push('/login')}
          />
      </div>
    );
    const dropD = (<FlatButton
      label='Dropdown'
      style={buttonStyle} />);
    const navbar = (
      <div className='Navbar-Main-Menu'>
        <FlatButton
          label='Account'
          style={buttonStyle}
          onClick={() => browserHistory.push('/viewSale')}/>
        <IconMenu
          iconButtonElement={dropD}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle} >
          <MenuItem value="1" primaryText="Refresh" />
          <MenuItem value="2" primaryText="Send feedback" />
          <MenuItem value="3" primaryText="Settings" />
          <MenuItem value="4" primaryText="Help" />
          <MenuItem value="5" primaryText="Sign out" />
        </IconMenu>
        <FlatButton
          label='Logout'
          style={buttonStyle}
          onClick={() => browserHistory.push('/productDetails')}
          />
      </div>
    );
    const leftBar = (
      <div>
        <span>
          <h3 style={{ 'display': 'inline' }}>Dashboard</h3>
        </span>
        <IconButton>
          <ActionChangeHistory />
        </IconButton>
        <IconMenu
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          iconButtonElement={
            <IconButton style={{ padding: 0 }}>
              <Badge
                badgeStyle={{ top: 12, right: 12, backgroundColor: colors.yellow800 }}
                badgeContent={0}
                secondary={true}
                >
                <NotificationIcon color={getMuiTheme().appBar.textColor} />
              </Badge>
            </IconButton>
          }>
          <MenuItem primaryText="View Notifications" />
          <MenuItem primaryText="Dismiss All" />
        </IconMenu>
        <IconButton>
          <ActionSearch />
        </IconButton>
      </div>
    )
    const muiTheme = getMuiTheme()
    return (
      <div className="App">
        <div style={{marginLeft: '20%'}}>
          <AppBar
          iconElementLeft={leftBar}
          iconElementRight={navbar} />
          <Drawer width={260} open={this.state.open}>
            <MenuItem >Menu Item</MenuItem>
            <MenuItem >Menu Item 2</MenuItem>
            <div>KAKA WHAT</div>
          </Drawer>
        </div>
        <div style={{marginLeft:'19.5%'}}>{this.props.children}</div>
      </div>
    );
  }
}

export default (App);
