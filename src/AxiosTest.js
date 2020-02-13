/** @format */

import React, { Component } from "react";
import axios from "axios";
export default class AxiosTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: []
        };
    }
    componentDidMount() {
        axios
            .post("http://rap2api.taobao.org/app/mock/244357/getMenuList")
            .then(res => {
                console.log(res.data.data);
                this.setState({
                    menuList: res.data.data
                });
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <input type='text' />
                <button>查询</button>
                <ul>
                    {this.state.menuList.map((menu, index) => {
                        return <li key={index}>{menu.name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
