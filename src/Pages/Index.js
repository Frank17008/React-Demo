/** @format
 * 路由重定向
 * 方式1: 标签重定向 使用Redirect组件  <Redirect to='路由地址' />
 * 方式2：编程式重定向 this.props.history.push(pathname,state)
 */

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "antd";
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: "p1",
                    text: "这是段落1"
                },
                {
                    id: "p2",
                    text: "这是段落2"
                },
                {
                    id: "p3",
                    text: "这是段落3"
                }
            ]
        };
        this.props.history.push("/home");
        // this.props.history.replace("/home");
    }
    render() {
        return (
            <div>
                {/* 标签重定向路由到 /home */}
                {/* <Redirect to='/home' /> */}
                <h2>Index Page</h2>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/list/:${item.id}`}>
                                    {item.text}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
