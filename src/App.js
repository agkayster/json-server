import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [getEmployees, setGetEmployees] = useState([]);

	useEffect(() => {
		const employeesData = async () => {
			let res = await axios.get('http://localhost:4000/employees');
			setGetEmployees(res.data);
		};
		employeesData();
	}, []);

	console.log('get employees', getEmployees);
	return (
		<div className='container'>
			<h5>Hello World!</h5>
		</div>
	);
}

export default App;
