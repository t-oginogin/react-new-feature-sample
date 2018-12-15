import React, { useState, useEffect, useReducer } from 'react'
import { reducer, initialState } from './reducers/counter'

const Counter = () => {
	const [state, dispatcher] = useReducer(reducer, initialState)
	useEffect(() => { console.log('Changed!')})
	useEffect(() => { document.title = `Count: ${state.count}` })

	return (
		<div>
			<p>Count: {state.count}</p>
			<button onClick={() => dispatcher({ type: 'reset' })}>React</button>
			<button onClick={() => dispatcher({ type: 'decrement' })}>-</button>
			<button onClick={() => dispatcher({ type: 'increment' })}>+</button>
		</div>
	)
}

export default Counter