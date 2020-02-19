/** @format
 * React-router初体验
 */

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    return <h2>Home Page</h2>;
}
function List() {
    return <h2>List-Page</h2>;
}

function AppRouter() {
    return (
        <Router>
            {/* 定义路由导航链接 */}
            <ul>
                <li>
                    <Link to='/'>Home Page</Link>
                </li>
                <li>
                    <Link to='/list'>List-Page</Link>
                </li>
            </ul>
            {/* 定义各个路由渲染的组件 */}
            {/* exact --> 路由精确匹配 */}
            <Route path='/' exact component={Index}></Route>
            <Route path='/list' component={List}></Route>
        </Router>
    );
}
export default AppRouter;
