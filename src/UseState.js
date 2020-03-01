/** @format */
// 原始写法
// import React, { Component } from "react";
// export default class Hooks extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//     render() {
//         return (
//             <div>
//                 <p>您点击了{this.state.count}次</p>
//                 <button onClick={this.addCount.bind(this)}>点击</button>
//             </div>
//         );
//     }
//     addCount() {
//         this.setState({
//             count: this.state.count + 1
//         });
//     }
// }

// react-hooks写法  useState
/**
 * useState 返回一个数组
 * 第一项是变量(状态),
 * 第二项是更改该状态值的函数一般以 set+变量名 命名
 */
import React, { useState } from "react";
export default function UseState() {
    // 解构 赋初值
    const [count, setCount] = useState(0);
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
