/** @format */

import React from "react";
import { Link, Route } from "react-router-dom";
import ReduxThunk from "./ReduxThunk";
import ReduxSaga from "./ReduxSaga";

function SubMenu2() {
    return (
        <div>
            <h2>二级导航</h2>
            <ul>
                <li>
                    <Link to='/menu2/1'>菜单二 ----1</Link>
                </li>
                <li>
                    <Link to='/menu2/2'>菜单二 ----2</Link>
                </li>
            </ul>
            <Route path='/menu2/1' component={ReduxThunk}></Route>
            <Route path='/menu2/2' component={ReduxSaga}></Route>
        </div>
    );
}
export default SubMenu2;
