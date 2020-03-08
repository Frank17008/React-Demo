/**
 * useReducer ==> Redux中的reducer 实现业务逻辑
 */
import React, { useReducer } from "react";

export default function Reducer() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "add":
                return state + 1;
            case "sub":
                return state - 1;
            default:
                return state;
        }
    }, 0);
    return (
        <div>
            <h2>您的余额为{count}$</h2>
            <button onClick={() => dispatch({ type: "add" })}>涨</button>
            <button onClick={() => dispatch({ type: "sub" })}>跌</button>
        </div>
    );
}
