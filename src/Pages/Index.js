/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    }
    render() {
        return (
            <div>
                <h2>Home Page</h2>
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
