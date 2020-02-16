/** @format */
// const defaultState = "Hello Redux";
import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from "./actionTypes";
const todoList = {
    inputValue: "",
    list: [
        "早上好,这是Redux Demo",
        "中午好,这是Redux Demo",
        "晚上好,这是Redux Demo"
    ]
};
export default (state = todoList, action) => {
    // Reducer不能直接改变state的值(只读),因此需要深拷贝
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case INPUT_CHANGE:
            newState.inputValue = action.value;
            return newState;
        case ADD_ITEM:
            newState.list.push(newState.inputValue);
            newState.inputValue = "";
            return newState;
        case DELETE_ITEM:
            newState.list.splice(action.index, 1);
            return newState;
        default:
            return state;
    }
};
