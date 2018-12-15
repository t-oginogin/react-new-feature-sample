import React, { useState, useEffect, useReducer } from 'react'
import { reducer, initialState } from './reducers/counter'
import counterActionCreator from './actions/counter'

const Counter = () => {
	const [state, dispatcher] = useReducer(reducer, initialState)
	const actions = counterActionCreator(dispatcher)
	useEffect(() => { console.log('Changed!')})
	useEffect(() => { document.title = `Count: ${state.count}` })

	return (
		<div>
			<p>Count: {state.count}</p>
			<button onClick={ actions.reset }>React</button>
			<button onClick={ actions.decrement }>-</button>
			<button onClick={ actions.increment }>+</button>
		</div>
	)
}

export default Counter