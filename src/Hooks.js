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

// react-hooks写法
import React, { useState } from "react";
export default function Hooks() {
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
