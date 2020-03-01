/** @format
 * useEffect 解决 hooks里面没有生命周期函数的问题
 * useEffect 第一个参数 匿名函数 相当于 componentDidMount + componentDidUpdate
 * 第二个参数数组 [] 相当于componentWillUnmount
 */
import React, { useState, useEffect } from "react";
export default function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(
            `componentDidMount+componentDidUpdate =>您点击了${count}次`
        );
    }, []);

    return (
        <div>
            <p>您点击了{count}次</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}>
                点击
            </button>
        </div>
    );
}
