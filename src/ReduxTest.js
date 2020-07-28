/** @format */

import React, { Component } from "react"
import store from "./store/index"
export default class ReduxTest extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: store.getState()
		}
	}
	render() {
		return (
			<div>
				<h2>Redux测试获取数据</h2>
				<p>{this.state.text}</p>
				<img src="" alt="" />
			</div>
		)
	}
}
