/** @format
 * 使用react-redux重写todolist
 */
import React, { Component } from "react";

import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from "./store/actionTypes";
import TodoListUI from "./TodoListUI";

import { connect } from "react-redux";

class TodoList1 extends Component {
    render() {
        let {
            inputValue,
            handleChange,
            handleClick,
            deleteItem,
            list
        } = this.props;
        return (
            <TodoListUI
                inputValue={inputValue}
                handleChange={handleChange}
                handleClick={handleClick}
                deleteItem={deleteItem}
                list={list}
            />
        );
    }
}
// state映射为props  一个从（外部的）state对象到（UI 组件的）props对象的映射关系
const mapStateToProps = (state, ownProps) => {
    // console.log("1", state, ownProps);
    return {
        inputValue: state.inputValue,
        list: state.list
    };
};

// 来建立 UI 组件的参数到store.dispatch方法的映射
// 定义了哪些用户的操作应该当作 Action，传给 Store
const mapDispatchToProps = (dispatch, ownProps) => {
    // console.log("2", dispatch, ownProps);
    return {
        handleChange(e) {
            dispatch({ type: INPUT_CHANGE, value: e.target.value });
        },
        handleClick() {
            dispatch({ type: ADD_ITEM });
        },
        deleteItem(index) {
            dispatch({ type: DELETE_ITEM, index: index });
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList1);
