import { useState } from 'react';
import Box from './Box/Box';
import Button from './Button/Button';

export default function Counter({
	children,
	count: initialCount,
}: {
	children: JSX.Element;
	count: number;
}) {
	const [count, setCount] = useState(initialCount);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<Box className="counter">
				<Button onClick={subtract}>-</Button>
				<pre>{count}</pre>
				<Button onClick={add}>+</Button>
			</Box>
			<div className="counter-message">{children}</div>
		</>
	);
}
