import React from 'react';
import {Header, Content} from "./components";
import {Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";


const App = () => {

	return (
		<div className="App">
			<div className="wrapper">
				<Header/>
				<div className="content">
					<Route path={'/'} component={Content} exact/>
					<Route path={'/cart'} component={Cart} exact/>
				</div>
			</div>
		</div>
	)
}

export default App;
