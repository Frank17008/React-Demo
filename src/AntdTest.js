/** @format */

import React, { Component } from "react"
import { Input, Button, message, Checkbox, InputNumber, Select, Radio } from "antd"
import "antd/dist/antd.css"
const { Option } = Select
const selectOnChange = (e) => {
	console.log(e)
}
class AntdTest extends Component {
	constructor(props) {
		super(props)
		this.inputNumberChange = this.inputNumberChange.bind(this)
	}
	radioChange = (e) => {
		console.log(e.target.value)
	}
	render() {
		return (
			<div>
				<h2>Antd-Test</h2>
				<Input placeholder="请输入" style={{ width: "200px" }} />
				<InputNumber autoFocus defaultValue={1} max={10} min={0} step={2} onChange={this.inputNumberChange}></InputNumber>
				<Button type="primary" style={{ marginLeft: "10px" }} onClick={() => this.buttonClick()}>
					Antd-Button
				</Button>
				<Button type="danger" shape="circle-outline" icon="download" style={{ marginLeft: "10px" }} size="small"></Button>
				{/* Checkbox的indeterminate 属性只负责样式控制 */}
				<Checkbox
					defaultChecked
					// disabled
					// indeterminate
					onChange={this.checkboxChange.bind(this)}>
					复选框
				</Checkbox>
				<Radio>单选框</Radio>
				<Radio.Group onChange={this.radioChange}>
					<Radio value={1}>A</Radio>
					<Radio value={2}>B</Radio>
					<Radio value={3}>C</Radio>
					<Radio value={4}>D</Radio>
				</Radio.Group>
				<Select style={{ width: "200px" }} onChange={selectOnChange} placeholder="请选择" showSearch>
					<Option value="Tom">Tom</Option>
					<Option value="Hank">Hank</Option>
				</Select>
				<hr />
			</div>
		)
	}
	buttonClick() {
		message.info("请输入内容")
	}
	checkboxChange(e) {
		console.log(e.target.checked)
	}
	inputNumberChange(v) {
		console.log("输入框值变更时的值==", v)
	}
}
export default AntdTest
