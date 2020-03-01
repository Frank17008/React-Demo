/**
 * useContext 解决父子组件传值的问题
 * 1.父组件引入createContext 创建上下文组件
 * 2.父组件利用Provider包裹子组件 value传值给子组件
 * 3.子组件引入useContext,调用useContext,传入父组件中创建的上下文组件,获取从父组件中传递过来的值
 */
import React, { useState, createContext, useContext } from "react";
// 创建上下文组件
const Context = createContext();
export default function UseContext() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>我是父组件</h2>
            <p>
                You Clicked
                <span style={{ color: "red", fontSize: "18px" }}>{count}</span>
                times
            </p>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <hr />
            {/* 向子组件传值 */}
            <Context.Provider value={count}>
                <ChildComp></ChildComp>
            </Context.Provider>
        </div>
    );
}
function ChildComp() {
    let count = useContext(Context);
    return <div>我是子组件,父组件传递过来的值是:{count}</div>;
}
