/** @format */

import React, { Component, Fragment } from "react";

class FoodMenu extends Component {
    constructor(props) {
        super(props);
        // 数据初始化
        this.state = {
            inputValue: "",
            menuList: ["红烧茄子", "糖醋里脊"]
        };
    }
    render() {
        return (
            // <div>
            // Flex布局 Fragment不会包裹最外层的div
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                    />
                    <button onClick={this.addMenu.bind(this)}>添加菜单</button>
                </div>
                <div>
                    <ul>
                        {this.state.menuList.map((menu, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={this.deleteMenu.bind(this, index)}>
                                    {menu}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Fragment>
            // </div>
        );
    }
    // 自定义input框值的变更事件
    inputChange(e) {
        // console.log(this, e.target.value);
        // 改变数据
        // wrong way
        // this.state.inputValue = e.target.value;
        // right way
        this.setState({
            inputValue: e.target.value
        });
    }
    //添加菜单
    addMenu() {
        this.setState({
            menuList: [...this.state.menuList, this.state.inputValue],
            inputValue: ""
        });
    }
    // 删除菜单
    deleteMenu(index) {
        // wrong
        // this.state.list.splice(index, 1);
        // right
        let newMenuList = this.state.menuList;
        newMenuList.splice(index, 1);
        this.setState({
            menuList: newMenuList
        });
    }
}
export default FoodMenu;
