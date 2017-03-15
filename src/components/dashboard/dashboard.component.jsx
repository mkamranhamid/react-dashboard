import React, { Component } from 'react';
import { connect } from "react-redux";
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

import { List, ListItem } from 'material-ui/List';
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import ActionInfo from 'material-ui/svg-icons/action/info';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Toggle from 'material-ui/Toggle';
import { blue500, red500, greenA200, darkBlack } from 'material-ui/styles/colors';


const styles = {
    customWidth: {
        width: 200,
    },
};
const iconStyles = {
    marginRight: 24,
};
const buttonStyle = { width: '100%' };


import '../../app/App.css';
import './dashboard.component.css';


class DashboardComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        localMessages: [],
        name: '',
        selectedCategory: 'Fault',
        description: ''
    }
    handleChangeDate(e, d) {
        console.log(d)
        this.setState({
            purchaseDate: d.toString()
        })
    }

    handleIcon() {
        console.log('kaak')
    }
    render() {
        const iconStyles = {
            marginRight: 24,
        };
        var categories = ['Fault', 'Accident', 'Drop', 'Complain', 'Report']
        var categoriesForDropDown = categories.map((d, i) => {
            return <MenuItem key={i} value={d} primaryText={d} />
        })

        return (
            <div className="App" style={{ marginLeft: '40px', backgroundColor: '#f7f7f8' }}>
                <div className="col-4 col-m-9">
                    <Paper className='Login-Panel'>
                        <div style={{ textAlign: 'initial', marginLeft: '12px', paddingTop: '1px' }}>
                            <h3>Email Statistics</h3>
                            <p>Last Campaign Performance</p>
                        </div>
                        <div>
                            <div className="ct-chart ct-perfect-fourth" id="chartPreferences"><svg width="100%" height="100%" className="ct-chart-pie" style={{ width: '100%', height: '100%' }}><g className="ct-series ct-series-c"><path d="M136.5,5A117.5,117.5,0,0,0,92.864,13.403L136.5,122.5Z" className="ct-slice-pie" value="6"></path></g><g className="ct-series ct-series-b"><path d="M93.245,13.251A117.5,117.5,0,0,0,56.365,208.434L136.5,122.5Z" className="ct-slice-pie" value="32"></path></g><g className="ct-series ct-series-a"><path d="M56.066,208.154A117.5,117.5,0,1,0,136.5,5L136.5,122.5Z" className="ct-slice-pie" value="62"></path></g><g><text dx="191.12436854593477" dy="144.12731747022482" textAnchor="middle" className="ct-label">62%</text><text dx="78.79062401968952" dy="111.49134776808874" textAnchor="middle" className="ct-label">32%</text><text dx="125.49134776808863" dy="64.79062401968955" textAnchor="middle" className="ct-label">6%</text></g></svg></div>
                        </div><br />
                        <div>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Open</p>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Bounce</p>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Unsubscribe</p>
                        </div>
                        <div style={{ width: '90%', height: '2px', backgroundColor: '#e1e1e3', margin: '0 auto' }}></div>
                        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                            <i className="fa fa-clock-o"></i>
                            <p style={{ textAlign: 'initial', display: 'inline', margin: '5px' }}>
                                Campaign sent 2 days ago
                            </p>
                        </div>
                        <div>
                        </div>

                    </Paper>
                </div>
                <div className="col-7 col-m-9">
                    <Paper className='Login-Panel'>
                        <div style={{ textAlign: 'initial', marginLeft: '12px', paddingTop: '1px' }}>
                            <h3>Email Statistics</h3>
                            <p>Last Campaign Performance</p>
                        </div>
                        <div>
                            <div className="ct-chart" id="chartHours"><svg width="100%" height="245px" className="ct-chart-line" style={{ width: '93%', height: '245px' }}><g className="ct-grids"><line y1="210" y2="210" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="185.625" y2="185.625" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="161.25" y2="161.25" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="136.875" y2="136.875" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="112.5" y2="112.5" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="88.125" y2="88.125" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="63.75" y2="63.75" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="39.375" y2="39.375" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="15" y2="15" x1="50" x2="590" className="ct-grid ct-vertical"></line></g><g><g className="ct-series ct-series-a"><path d="M50,210L50,140.044C72.5,140.044,95,116.156,117.5,116.156C140,116.156,162.5,90.563,185,90.563C207.5,90.563,230,90.075,252.5,90.075C275,90.075,297.5,74.963,320,74.963C342.5,74.963,365,67.163,387.5,67.163C410,67.163,432.5,39.863,455,39.863C477.5,39.863,500,40.594,522.5,40.594C545,40.594,567.5,26.7,590,26.7C612.5,26.7,635,17.925,657.5,17.925C680,17.925,702.5,3.787,725,3.787C747.5,3.787,770,-20.1,792.5,-20.1L792.5,210Z" className="ct-area" values="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"></path></g><g className="ct-series ct-series-b"><path d="M50,210L50,193.669C72.5,193.669,95,172.95,117.5,172.95C140,172.95,162.5,175.144,185,175.144C207.5,175.144,230,151.5,252.5,151.5C275,151.5,297.5,140.044,320,140.044C342.5,140.044,365,128.344,387.5,128.344C410,128.344,432.5,103.969,455,103.969C477.5,103.969,500,103.481,522.5,103.481C545,103.481,567.5,78.619,590,78.619C612.5,78.619,635,77.887,657.5,77.887C680,77.887,702.5,77.4,725,77.4C747.5,77.4,770,52.294,792.5,52.294L792.5,210Z" className="ct-area" values="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"></path></g><g className="ct-series ct-series-c"><path d="M50,210L50,204.394C72.5,204.394,95,182.456,117.5,182.456C140,182.456,162.5,193.669,185,193.669C207.5,193.669,230,183.675,252.5,183.675C275,183.675,297.5,163.688,320,163.688C342.5,163.688,365,151.744,387.5,151.744C410,151.744,432.5,135.169,455,135.169C477.5,135.169,500,134.925,522.5,134.925C545,134.925,567.5,102.994,590,102.994C612.5,102.994,635,110.063,657.5,110.063C680,110.063,702.5,110.063,725,110.063C747.5,110.063,770,85.931,792.5,85.931L792.5,210Z" className="ct-area" values="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"></path></g></g><g className="ct-labels"><foreignObject style={{ overflow: 'visible' }} x="50" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">9:00AM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="117.5" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">12:00AM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="185" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">3:00PM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="252.5" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">6:00PM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="320" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">9:00PM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="387.5" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">12:00PM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="455" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">3:00AM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="522.5" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">6:00AM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="185.625" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">0</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="161.25" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">100</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="136.875" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">200</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="112.5" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">300</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="88.125" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">400</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="63.75" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">500</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="39.375" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">600</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="15" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">700</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="-15" x="10" height="30" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '30px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">800</span></foreignObject></g></svg></div>
                        </div><br />
                        <br />
                        <div>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Open</p>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Bounce</p>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Unsubscribe</p>
                        </div>
                        <div style={{ width: '90%', height: '2px', backgroundColor: '#e1e1e3', margin: '0 auto' }}></div>
                        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                            <i className="fa fa-refresh"></i>
                            <p style={{ textAlign: 'initial', display: 'inline', margin: '5px' }}>
                                Updated 3 minutes ago
                            </p>
                        </div>
                    </Paper>
                </div>
                <div className="col-6 col-m-9" style={{ float: 'right', marginTop: '2px' }}>
                    <Paper className='Login-Panel'>
                        <div style={{ textAlign: 'initial', marginLeft: '12px', paddingTop: '1px' }}>
                            <h3>Chat</h3>
                            <p>Backend development</p>
                        </div>
                        <div>
                            <Divider />
                            <List>
                                <ListItem
                                    leftCheckbox={<Checkbox />}
                                    primaryText="Notifications"
                                    secondaryText={
                                        <p>
                                            <span style={{ color: darkBlack }}>Brendan Lim</span> --
                                                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                                    </p>}
                                    secondaryTextLines={2}
                                    />
                                <Divider />
                                <ListItem
                                    leftCheckbox={<Checkbox />}
                                    primaryText="Notifications"
                                    secondaryText={
                                        <p>
                                            <span style={{ color: darkBlack }}>Brendan Lim</span> --
                                                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                                    </p>}
                                    secondaryTextLines={2}
                                    />
                                <Divider />
                                <ListItem
                                    leftCheckbox={<Checkbox />}
                                    primaryText="Notifications"
                                    secondaryText={
                                        <p>
                                            <span style={{ color: darkBlack }}>Brendan Lim</span> --
                                                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                                    </p>}
                                    secondaryTextLines={2}
                                    />
                                <Divider />
                                <ListItem
                                    leftCheckbox={<Checkbox />}
                                    primaryText="Notifications"
                                    secondaryText={
                                        <p>
                                            <span style={{ color: darkBlack }}>Brendan Lim</span> --
                                                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                                    </p>}
                                    secondaryTextLines={2}
                                    />
                                <Divider />
                                <ListItem
                                    leftCheckbox={<Checkbox />}
                                    primaryText="Notifications"
                                    secondaryText={
                                        <p>
                                            <span style={{ color: darkBlack }}>Brendan Lim</span> --
                                                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                                    </p>}
                                    secondaryTextLines={2}
                                    />
                                <Divider />
                                <ListItem
                                    leftCheckbox={<Checkbox />}
                                    primaryText="Notifications"
                                    secondaryText={
                                        <p>
                                            <span style={{ color: darkBlack }}>Brendan Lim</span> --
                                                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                                    </p>}
                                    secondaryTextLines={2}
                                    />
                                <Divider />
                            </List>
                        </div><br />
                        <div style={{ width: '90%', height: '2px', backgroundColor: '#e1e1e3', margin: '0 auto' }}></div>
                        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                            <i className="fa fa-clock-o"></i>
                            <p style={{ textAlign: 'initial', display: 'inline', margin: '5px' }}>
                                Campaign sent 2 days ago
                            </p>
                        </div>
                        <div>
                        </div>

                    </Paper>
                </div>
                <div className="col-6 col-m-9">
                    <Paper className='Login-Panel'>
                        <div style={{ textAlign: 'initial', marginLeft: '12px', paddingTop: '1px' }}>
                            <h3>2014 Sales</h3>
                            <p>All products including Taxes</p>
                        </div>
                        <div>
                            <div className="" id=""><svg width="400" height="500"><g transform="translate(20,20)"><g className="birthyears"><g className="birthyear" transform="translate(-1400.3333333333335,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1760</text></g><g className="birthyear" transform="translate(-1352.888888888889,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1765</text></g><g className="birthyear" transform="translate(-1305.4444444444443,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1770</text></g><g className="birthyear" transform="translate(-1258,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1775</text></g><g className="birthyear" transform="translate(-1210.5555555555557,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1780</text></g><g className="birthyear" transform="translate(-1163.111111111111,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1785</text></g><g className="birthyear" transform="translate(-1115.6666666666665,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1790</text></g><g className="birthyear" transform="translate(-1068.2222222222222,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1795</text></g><g className="birthyear" transform="translate(-1020.7777777777778,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1800</text></g><g className="birthyear" transform="translate(-973.3333333333334,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1805</text></g><g className="birthyear" transform="translate(-925.8888888888889,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1810</text></g><g className="birthyear" transform="translate(-878.4444444444446,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1815</text></g><g className="birthyear" transform="translate(-831,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1820</text></g><g className="birthyear" transform="translate(-783.5555555555555,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1825</text></g><g className="birthyear" transform="translate(-736.1111111111111,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1830</text></g><g className="birthyear" transform="translate(-688.6666666666667,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1835</text></g><g className="birthyear" transform="translate(-641.2222222222222,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1840</text></g><g className="birthyear" transform="translate(-593.7777777777778,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1845</text></g><g className="birthyear" transform="translate(-546.3333333333333,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1850</text></g><g className="birthyear" transform="translate(-498.8888888888889,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1855</text></g><g className="birthyear" transform="translate(-451.44444444444446,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1860</text></g><g className="birthyear" transform="translate(-404,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1865</text></g><g className="birthyear" transform="translate(-356.55555555555554,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1870</text></g><g className="birthyear" transform="translate(-309.1111111111111,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1875</text></g><g className="birthyear" transform="translate(-261.66666666666663,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1880</text></g><g className="birthyear" transform="translate(-214.22222222222223,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1885</text></g><g className="birthyear" transform="translate(-166.77777777777777,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1890</text></g><g className="birthyear" transform="translate(-119.33333333333331,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1895</text></g><g className="birthyear" transform="translate(-71.88888888888889,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1900</text></g><g className="birthyear" transform="translate(-24.444444444444443,0)"><rect x="-23" width="46" y="450" height="0"></rect><rect x="-23" width="46" y="450" height="0"></rect><text y="446">1905</text></g><g className="birthyear" transform="translate(23,0)"><rect x="-23" width="46" y="436.99373141863106" height="13.006268581368943"></rect><rect x="-23" width="46" y="408.82812103186006" height="41.171878968139936"></rect><text y="446">1910</text></g><g className="birthyear" transform="translate(70.44444444444444,0)"><rect x="-23" width="46" y="412.47216420367516" height="37.52783579632484"></rect><rect x="-23" width="46" y="373.3802641142345" height="76.61973588576552"></rect><text y="446">1915</text></g><g className="birthyear" transform="translate(117.88888888888889,0)"><rect x="-23" width="46" y="376.4168894089001" height="73.58311059109991"></rect><rect x="-23" width="46" y="325.3954893956477" height="124.6045106043523"></rect><text y="446">1920</text></g><g className="birthyear" transform="translate(165.33333333333331,0)"><rect x="-23" width="46" y="337.3552325882695" height="112.64476741173053"></rect><rect x="-23" width="46" y="281.5487054566025" height="168.45129454339752"></rect><text y="446">1925</text></g><g className="birthyear" transform="translate(212.77777777777777,0)"><rect x="-23" width="46" y="303.3416104837144" height="146.65838951628558"></rect><rect x="-23" width="46" y="249.47958630920996" height="200.52041369079004"></rect><text y="446">1930</text></g><g className="birthyear" transform="translate(260.22222222222223,0)"><rect x="-23" width="46" y="277.75944045053967" height="172.24055954946033"></rect><rect x="-23" width="46" y="264.1785497617795" height="185.8214502382205"></rect><text y="446">1935</text></g><g className="birthyear" transform="translate(307.66666666666663,0)"><rect x="-23" width="46" y="251.85635143451842" height="198.14364856548158"></rect><rect x="-23" width="46" y="230.7571465514552" height="219.2428534485448"></rect><text y="446">1940</text></g><g className="birthyear" transform="translate(355.1111111111111,0)"><rect x="-23" width="46" y="200.19980410199793" height="249.80019589800207"></rect><rect x="-23" width="46" y="182.3251040530879" height="267.6748959469121"></rect><text y="446">1945</text></g><g className="birthyear" transform="translate(402.55555555555554,0)"><rect x="-23" width="46" y="120.96197572855208" height="329.0380242714479"></rect><rect x="-23" width="46" y="105.36855406493513" height="344.6314459350649"></rect><text y="446">1950</text></g><g className="birthyear" transform="translate(450,0)"><rect x="-23" width="46" y="66.15776931012086" height="383.84223068987916"></rect><rect x="-23" width="46" y="53.15366648713218" height="396.84633351286783"></rect><text y="446">1955</text></g><g className="birthyear" transform="translate(497.44444444444446,0)"><rect x="-23" width="46" y="12.197667220396102" height="437.8023327796039"></rect><rect x="-23" width="46" y="5.687784271901658" height="444.31221572809835"></rect><text y="446">1960</text></g><g className="birthyear" transform="translate(544.8888888888889,0)"><rect x="-23" width="46" y="6.205864615865386" height="443.7941353841346"></rect><rect x="-23" width="46" y="0" height="450"></rect><text y="446">1965</text></g><g className="birthyear" transform="translate(592.3333333333333,0)"><rect x="-23" width="46" y="55.29521478264166" height="394.70478521735834"></rect><rect x="-23" width="46" y="58.64374795832152" height="391.3562520416785"></rect><text y="446">1970</text></g><g className="birthyear" transform="translate(639.7777777777778,0)"><rect x="-23" width="46" y="76.42628725330013" height="373.57371274669987"></rect><rect x="-23" width="46" y="81.87881602114604" height="368.121183978854"></rect><text y="446">1975</text></g><g className="birthyear" transform="translate(687.2222222222222,0)"><rect x="-23" width="46" y="73.64862478210277" height="376.3513752178972"></rect><rect x="-23" width="46" y="89.39179316801206" height="360.60820683198796"></rect><text y="446">1980</text></g><g className="birthyear" transform="translate(734.6666666666667,0)"><rect x="-23" width="46" y="54.075428723473664" height="395.9245712765263"></rect><rect x="-23" width="46" y="75.14323011002311" height="374.8567698899769"></rect><text y="446">1985</text></g><g className="birthyear" transform="translate(782.1111111111111,0)"><rect x="-23" width="46" y="41.4748144215788" height="408.5251855784212"></rect><rect x="-23" width="46" y="62.38633313643842" height="387.6136668635616"></rect><text y="446">1990</text></g><g className="birthyear" transform="translate(829.5555555555555,0)"><rect x="-23" width="46" y="41.90359590661354" height="408.09640409338647"></rect><rect x="-23" width="46" y="60.56709609701979" height="389.43290390298023"></rect><text y="446">1995</text></g><g className="birthyear" transform="translate(877,0)"><rect x="-23" width="46" y="73.49141392824997" height="376.50858607175"></rect><rect x="-23" width="46" y="89.91505586238564" height="360.08494413761434"></rect><text y="446">2000</text></g></g><g className="y axis" transform="translate(900,0)"><g className="tick zero" transform="translate(0,450)" style={{ opacity: '1' }}><line x2="-900" y2="0"></line><text dy=".32em" x="3" y="0" style={{ textAnchor: 'start' }}>0M</text></g><g className="tick" transform="translate(0,411.32574320963846)" style={{ opacity: '1' }}><line x2="-900" y2="0"></line><text dy=".32em" x="3" y="0" style={{ textAnchor: 'start' }}>1M</text></g><g className="tick" transform="translate(0,372.6514864192769)" style={{ opacity: '1' }}><line x2="-900" y2="0"></line><text dy=".32em" x="3" y="0" style={{ textAnchor: 'start' }}>2M</text></g><g className="tick" transform="translate(0,333.9772296289154)" style={{ opacity: '1' }}><line x2="-900" y2="0"></line><text dy=".32em" x="3" y="0" style={{ textAnchor: 'start' }}>3M</text></g><g className="tick" transform="translate(0,295.3029728385538)" style={{ opacity: '1' }}><line x2="-900" y2="0"></line><text dy=".32em" x="3" y="0" style={{ textAnchor: 'start' }}>4M</text></g><g className="tick" transform="translate(0,256.62871604819225)" style={{ opacity: '1' }}><line x2="-900" y2="0"></line><text dy=".32em" x="3" y="0" style={{ textAnchor: 'start' }}>5M</text></g><g className="tick" transform="translate(0,217.9544592578307)" style={{ opacity: '1' }}><line x2="-900" y2="0"></line><text dy=".32em" x="3" y="0" style={{ textAnchor: 'start' }}>6M</text></g><g className="tick" transform="translate(0,179.28020246746914)" style={{ opacity: '1' }}><line x2="-900" y2="0"></line><text dy=".32em" x="3" y="0" style={{ textAnchor: 'start' }}>7M</text></g><g className="tick" transform="translate(0,140.6059456771076)" style={{ opacity: '1' }}><line x2="-900" y2="0"></line><text dy=".32em" x="3" y="0" style={{ textAnchor: 'start' }}>8M</text></g><g className="tick" transform="translate(0,101.93168888674606)" style={{ opacity: '1' }}><line x2="-900" y2="0"></line><text dy=".32em" x="3" y="0" style={{ textAnchor: 'start' }}>9M</text></g><g className="tick" transform="translate(0,63.25743209638451)" style={{ opacity: '1' }}><line x2="-900" y2="0"></line><text dy=".32em" x="3" y="0" style={{ textAnchor: 'start' }}>10M</text></g><g className="tick" transform="translate(0,24.583175306022927)" style={{ opacity: '1' }}><line x2="-900" y2="0"></line><text dy=".32em" x="3" y="0" style={{ textAnchor: 'start' }}>11M</text></g><path className="domain" d="M-900,0H0V450H-900"></path></g><text className="age" x="877" y="454" dy=".71em">0</text><text className="age" x="829.5555555555555" y="454" dy=".71em">5</text><text className="age" x="782.1111111111111" y="454" dy=".71em">10</text><text className="age" x="734.6666666666667" y="454" dy=".71em">15</text><text className="age" x="687.2222222222222" y="454" dy=".71em">20</text><text className="age" x="639.7777777777778" y="454" dy=".71em">25</text><text className="age" x="592.3333333333333" y="454" dy=".71em">30</text><text className="age" x="544.8888888888889" y="454" dy=".71em">35</text><text className="age" x="497.44444444444446" y="454" dy=".71em">40</text><text className="age" x="450" y="454" dy=".71em">45</text><text className="age" x="402.55555555555554" y="454" dy=".71em">50</text><text className="age" x="355.1111111111111" y="454" dy=".71em">55</text><text className="age" x="307.66666666666663" y="454" dy=".71em">60</text><text className="age" x="260.22222222222223" y="454" dy=".71em">65</text><text className="age" x="212.77777777777777" y="454" dy=".71em">70</text><text className="age" x="165.33333333333331" y="454" dy=".71em">75</text><text className="age" x="117.88888888888889" y="454" dy=".71em">80</text><text className="age" x="70.44444444444444" y="454" dy=".71em">85</text><text className="age" x="23" y="454" dy=".71em">90</text></g></svg></div>
                        </div><br />
                        <br />
                        <div>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Open</p>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Bounce</p>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Unsubscribe</p>
                        </div>
                        <div style={{ width: '90%', height: '2px', backgroundColor: '#e1e1e3', margin: '0 auto' }}></div>
                        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                            <i className="fa fa-refresh"></i>
                            <p style={{ textAlign: 'initial', display: 'inline', margin: '5px' }}>
                                Updated 3 minutes ago
                            </p>
                        </div>
                    </Paper>
                </div>

            </div>
        );
    }
}

export default (DashboardComponent);
