import React, {useEffect, useState} from 'react';
import {Header, Content} from "./components";
import axios from 'axios';
import {Route} from "react-router-dom";

function App() {
	const [pizzas, setPizzas] = useState([]);

	useEffect(() => {
		axios.get('https://raw.githubusercontent.com/Archakov06/react-pizza/master/public/db.json')
		 	.then(response => {setPizzas(response.data.pizzas)})
	}, []);

	return (
		<div className="App">
			<div className="wrapper">
				 <Header/>
				<div className="content">
					<Route path={'/'} render={() => <Content items={pizzas}/>}  exact/>
				</div>
			</div>
		</div>
	);
}

export default App;
