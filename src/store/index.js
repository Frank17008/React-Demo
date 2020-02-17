/** @format
 * 2-17 20:00 redux-thunk中间件引入及配置
 */

import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

// 因为用到了redux devtools插件，因此使用compose 增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
    reducer,
    // 如果插件存在则开启redux devtools 插件 (需安装redux devtools插件)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    enhancers
);
export default store;
