import React, { Component } from 'react';
import { connect } from "react-redux";
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import FontIcon from 'material-ui/FontIcon';
import {grey100, red500, greenA200} from 'material-ui/styles/colors';

const styles = {
  customWidth: {
    width: 200,
  },
};
const iconStyles = {
  marginRight: 24,
};



import { GitAction } from '../../store/action/gitAction'
import '../../app/App.css';
import './dashboard.component.css';
// import './randomd3.css';


function mapStateToProps(state) {
    return {
        reported: state.counterReducer['report'],
        allstores: state.counterReducer['stores'],
        allproducts: state.counterReducer['products']
    };
}

function mapDispatchToProps(dispatch) {
    return {
        callAddStock: (somedata) => dispatch(GitAction.CallAddStock(somedata)),
        getallStores: () => dispatch(GitAction.CallAllStores()),
        getallProducts: () => dispatch(GitAction.CallAllProducts())
    };
}

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.OnSubmitLogin = this.OnSubmitLogin.bind(this);
        this.props.getallStores();
        this.props.getallProducts();
    }
    state = {
        purchaseDate: '',
        selectedStore: 'Neden Kullanırız',
        selectedProduct:'Lorem',
        quantity: '',
        unitPrice: ''
    }
    OnSubmitLogin(e) {
        e.preventDefault();
        console.log(this.state)
        this.props.callAddStock(this.state)
    }
    handleChangeDate(e, d) {
        console.log(d)
        this.setState({
            purchaseDate: d.toString()
        })
    }

    render() {
        const buttonStyle = { width: '100%' };
        var pieChartTable = function(){
            return 
        }
        return (
            <div className="App" style={{ marginLeft: '40px',backgroundColor:'#f7f7f8' }}>
                <div style={{ marginTop: '35px', width: '24%', float: 'left', marginRight: '50px' }}>
                    <Paper className='Login-Panel'>
                        <div style={{ textAlign: 'initial', marginLeft: '12px', paddingTop: '1px' }}>
                            <h3>Email Statistics</h3>
                            <p>Last Campaign Performance</p>
                        </div>
                        <div>
                            <div className="ct-chart ct-perfect-fourth" id="chartPreferences"><svg width="100%" height="100%" className="ct-chart-pie" style={{ width: '100%', height: '100%' }}><g className="ct-series ct-series-c"><path d="M136.5,5A117.5,117.5,0,0,0,92.864,13.403L136.5,122.5Z" className="ct-slice-pie" value="6"></path></g><g className="ct-series ct-series-b"><path d="M93.245,13.251A117.5,117.5,0,0,0,56.365,208.434L136.5,122.5Z" className="ct-slice-pie" value="32"></path></g><g className="ct-series ct-series-a"><path d="M56.066,208.154A117.5,117.5,0,1,0,136.5,5L136.5,122.5Z" className="ct-slice-pie" value="62"></path></g><g><text dx="191.12436854593477" dy="144.12731747022482" text-anchor="middle" className="ct-label">62%</text><text dx="78.79062401968952" dy="111.49134776808874" text-anchor="middle" className="ct-label">32%</text><text dx="125.49134776808863" dy="64.79062401968955" text-anchor="middle" className="ct-label">6%</text></g></svg></div>
                        </div><br/>
                        <div>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Open</p>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Bounce</p>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Unsubscribe</p>
                        </div>
                        <div style={{width:'90%',height:'2px',backgroundColor:'#e1e1e3',margin:'0 auto'}}></div>
                        <div>
                            <FontIcon
                                className="muidocs-icon-action-home"
                                style={iconStyles}
                                color={red500}
                                hoverColor={greenA200} />
                        </div>
                        <p style={{ textAlign: 'initial' }}>
                            Campaign sent 2 days ago
                        </p>
                    </Paper>
                </div>
                <div style={{ marginTop: '35px', width: '40%', float: 'left' }}>
                    <Paper className='Login-Panel'>
                        <div style={{ textAlign: 'initial', marginLeft: '12px', paddingTop: '1px' }}>
                            <h3>Email Statistics</h3>
                            <p>Last Campaign Performance</p>
                        </div>
                        <div>
                            <div className="ct-chart" id="chartHours"><svg width="100%" height="245px" className="ct-chart-line" style={{ width: '100%', height: '245px' }}><g className="ct-grids"><line y1="210" y2="210" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="185.625" y2="185.625" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="161.25" y2="161.25" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="136.875" y2="136.875" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="112.5" y2="112.5" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="88.125" y2="88.125" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="63.75" y2="63.75" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="39.375" y2="39.375" x1="50" x2="590" className="ct-grid ct-vertical"></line><line y1="15" y2="15" x1="50" x2="590" className="ct-grid ct-vertical"></line></g><g><g className="ct-series ct-series-a"><path d="M50,210L50,140.044C72.5,140.044,95,116.156,117.5,116.156C140,116.156,162.5,90.563,185,90.563C207.5,90.563,230,90.075,252.5,90.075C275,90.075,297.5,74.963,320,74.963C342.5,74.963,365,67.163,387.5,67.163C410,67.163,432.5,39.863,455,39.863C477.5,39.863,500,40.594,522.5,40.594C545,40.594,567.5,26.7,590,26.7C612.5,26.7,635,17.925,657.5,17.925C680,17.925,702.5,3.787,725,3.787C747.5,3.787,770,-20.1,792.5,-20.1L792.5,210Z" className="ct-area" values="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"></path></g><g className="ct-series ct-series-b"><path d="M50,210L50,193.669C72.5,193.669,95,172.95,117.5,172.95C140,172.95,162.5,175.144,185,175.144C207.5,175.144,230,151.5,252.5,151.5C275,151.5,297.5,140.044,320,140.044C342.5,140.044,365,128.344,387.5,128.344C410,128.344,432.5,103.969,455,103.969C477.5,103.969,500,103.481,522.5,103.481C545,103.481,567.5,78.619,590,78.619C612.5,78.619,635,77.887,657.5,77.887C680,77.887,702.5,77.4,725,77.4C747.5,77.4,770,52.294,792.5,52.294L792.5,210Z" className="ct-area" values="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"></path></g><g className="ct-series ct-series-c"><path d="M50,210L50,204.394C72.5,204.394,95,182.456,117.5,182.456C140,182.456,162.5,193.669,185,193.669C207.5,193.669,230,183.675,252.5,183.675C275,183.675,297.5,163.688,320,163.688C342.5,163.688,365,151.744,387.5,151.744C410,151.744,432.5,135.169,455,135.169C477.5,135.169,500,134.925,522.5,134.925C545,134.925,567.5,102.994,590,102.994C612.5,102.994,635,110.063,657.5,110.063C680,110.063,702.5,110.063,725,110.063C747.5,110.063,770,85.931,792.5,85.931L792.5,210Z" className="ct-area" values="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"></path></g></g><g className="ct-labels"><foreignObject style={{ overflow: 'visible' }} x="50" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">9:00AM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="117.5" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">12:00AM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="185" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">3:00PM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="252.5" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">6:00PM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="320" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">9:00PM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="387.5" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">12:00PM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="455" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">3:00AM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} x="522.5" y="215" width="67.5" height="20"><span className="ct-label ct-horizontal ct-end" style={{ width: '68px', height: '20px' }} xmlns="http://www.w3.org/1999/xhtml">6:00AM</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="185.625" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">0</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="161.25" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">100</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="136.875" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">200</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="112.5" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">300</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="88.125" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">400</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="63.75" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">500</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="39.375" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">600</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="15" x="10" height="24.375" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '24px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">700</span></foreignObject><foreignObject style={{ overflow: 'visible' }} y="-15" x="10" height="30" width="30"><span className="ct-label ct-vertical ct-start" style={{ height: '30px', width: '30px' }} xmlns="http://www.w3.org/1999/xhtml">800</span></foreignObject></g></svg></div>
                        </div><br />
                        <br />
                        <div>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Open</p>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Bounce</p>
                            <div className="circleStyle"></div> <p style={{ display: 'inline-block' }}>Unsubscribe</p>
                        </div>
                        <div style={{width:'90%',height:'2px',backgroundColor:'#e1e1e3',margin:'0 auto'}}></div>
                        <p style={{textAlign: 'initial'}}>Updated 3 minutes ago</p>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
