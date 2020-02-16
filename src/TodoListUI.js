/** @format
 * TodoList UI分离
 */

import React, { Component } from "react";
import { Input, Button, List } from "antd";
export default class TodoListUI extends Component {
    componentWillMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <Input
                    placeholder='Enter a key word to add'
                    style={{ width: "200px" }}
                    value={this.props.inputValue}
                    onChange={e => this.props.handleChange(e)}
                />
                <Button
                    type='primary'
                    style={{ margin: "0 0 10px 10px" }}
                    onClick={() => this.props.handleClick()}>
                    Add
                </Button>
                <List
                    style={{ width: "500px" }}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => this.props.deleteItem(index)}>
                            {item}
                        </List.Item>
                    )}></List>
            </div>
        );
    }
}
