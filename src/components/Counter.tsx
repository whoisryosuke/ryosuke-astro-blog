import { useState } from 'react';
import styled from 'styled-components';
import './Counter.css';

const Button = styled.button({
	backgroundColor: 'blue',
	color: 'white',
})

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
			<div className="counter">
				<Button onClick={subtract}>-</Button>
				<pre>{count}</pre>
				<Button onClick={add}>+</Button>
			</div>
			<div className="counter-message">{children}</div>
		</>
	);
}
