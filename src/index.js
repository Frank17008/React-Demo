/** @format */

import React from "react";
import ReactDOM from "react-dom";

import HelloReact from "./HelloReact";
import FoodMenu from "./FoodMenu";
import LifeCycles from "./LifeCycles";
import AxiosTest from "./AxiosTest";
import AntdTest from "./AntdTest";
import ReduxTest from "./ReduxTest";
import TodoList from "./TodoList";
import TodoList1 from "./TodoList1";

import { Provider } from "react-redux";
import store from "./store";
import AppRouter from "./AppRouter";
// ReactDOM.render(<HelloReact />, document.querySelector('#root'));
// ReactDOM.render(<FoodMenu />, document.querySelector("#root"));
// ReactDOM.render(<LifeCycles />, document.querySelector("#root"));
// ReactDOM.render(<AxiosTest />, document.querySelector("#root"));
// ReactDOM.render(<AntdTest />, document.querySelector("#root"));
// ReactDOM.render(<ReduxTest />, document.querySelector("#root"));
// ReactDOM.render(
//     <Provider store={store}>
//         <TodoList1 />
//     </Provider>,
//     document.querySelector("#root")
// );
ReactDOM.render(<AppRouter />, document.querySelector("#root"));
