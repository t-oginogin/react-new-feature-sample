import React, { useState } from 'react'

const Counter = () => {
	const [count, setState] = useState(0)

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setState(0)}>React</button>
			<button onClick={() => setState(count - 1)}>-</button>
			<button onClick={() => setState(count + 1)}>+</button>
		</div>
	)
}

export default Counter