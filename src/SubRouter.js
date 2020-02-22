/** @format
 * 嵌套路由demo
 */

import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SubMenu1 from "./Pages/subMenu/subMenu1";
import SubMenu2 from "./Pages/subMenu/subMenu2";
import "./SubRouter.css";
export default class SubRouter extends Component {
    render() {
        return (
            <Router>
                <div className='mainDiv'>
                    <div className='leftNav'>
                        <h3>一级导航</h3>
                        <ul>
                            <li>
                                <Link to='/menu1'>菜单一</Link>
                            </li>
                            <li>
                                <Link to='/menu2'>菜单二</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='rightContent'>
                        <Route path='/menu1' component={SubMenu1}></Route>
                        <Route path='/menu2' component={SubMenu2}></Route>
                    </div>
                </div>
            </Router>
        );
    }
}
