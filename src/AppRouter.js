/** @format
 * React-router初体验
 */

import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Index from "./Pages/Index";
import List from "./Pages/List";

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
            {/* 路由动态传值,定义规则 */}
            <Route path='/list/:id' component={List}></Route>

            {/* 使用Switch匹配
            <Switch>
                <Route path='/list'>
                    <List />
                </Route>
                <Route path='/'>
                    <Index />
                </Route>
            </Switch>
            */}
        </Router>
    );
}
export default AppRouter;
