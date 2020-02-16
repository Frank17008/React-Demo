/** @format */

import { createStore } from "redux";
import reducer from "./reducer";
const store = createStore(
    reducer,
    // 如果插件存在则开启redux dev tools 插件 (需安装redux devtools插件)
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
