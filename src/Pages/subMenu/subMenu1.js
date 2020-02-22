/** @format */

import React from "react";
import { Link, Route } from "react-router-dom";
import ReactPage from "./ReactPage";
import Vue from "./Vue";
import Angular from "./Angular";

function SubMenu1() {
    return (
        <div>
            <h2>二级导航</h2>
            <ul>
                <li>
                    <Link to='/menu1/1'>菜单一 ----1</Link>
                </li>
                <li>
                    <Link to='/menu1/2'>菜单一----2</Link>
                </li>
                <li>
                    <Link to='/menu1/3'>菜单一 ----3</Link>
                </li>
            </ul>
            <Route path='/menu1/1' component={ReactPage}></Route>
            <Route path='/menu1/2' component={Vue}></Route>
            <Route path='/menu1/3' component={Angular}></Route>
        </div>
    );
}
export default SubMenu1;
