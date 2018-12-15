import React, { useState, useEffect } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)
	useEffect(() => { console.log('Changed!')})
	useEffect(() => { document.title = `Count: ${count}` })

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(0)}>React</button>
			<button onClick={() => setCount(count - 1)}>-</button>
			<button onClick={() => setCount(count + 1)}>+</button>
		</div>
	)
}

export default Counter