/** @format
 * TodoList UI分离 2-16
 * TodoList 改造为无状态组件 2-17
 */

import React from "react";
import { Input, Button, List } from "antd";
const TodoListUI = props => {
    return (
        <div>
            <Input
                placeholder='Enter a key word to add'
                style={{ width: "200px" }}
                value={props.inputValue}
                onChange={e => props.handleChange(e)}
            />
            <Button
                type='primary'
                style={{ margin: "0 0 10px 10px" }}
                onClick={() => props.handleClick()}>
                Add
            </Button>
            <List
                style={{ width: "500px" }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => props.deleteItem(index)}>
                        {item}
                    </List.Item>
                )}></List>
        </div>
    );
};
export default TodoListUI;
// export default class TodoListUI extends Component {
//     render() {
//         return (
//             <div>
//                 <Input
//                     placeholder='Enter a key word to add'
//                     style={{ width: "200px" }}
//                     value={this.props.inputValue}
//                     onChange={e => this.props.handleChange(e)}
//                 />
//                 <Button
//                     type='primary'
//                     style={{ margin: "0 0 10px 10px" }}
//                     onClick={() => this.props.handleClick()}>
//                     Add
//                 </Button>
//                 <List
//                     style={{ width: "500px" }}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (
//                         <List.Item onClick={() => this.props.deleteItem(index)}>
//                             {item}
//                         </List.Item>
//                     )}></List>
//             </div>
//         );
//     }
// }
