import React from 'react'

class Counter extends React.Component {
	state = { count: 0 }

	render() {
		return (
			<div>
				<p>Count: {this.state.count}</p>
				<button onClick={() => this.setState(() => ({count: 0}))}>React</button>
				<button onClick={() => this.setState(state => ({count: state.count - 1}))}>-</button>
				<button onClick={() => this.setState(state => ({count: state.count + 1}))}>+</button>
			</div>
		)
	}
}

export default Counter