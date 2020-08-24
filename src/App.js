import React from 'react';
import {Header, Content} from "./components";
import {Route} from "react-router-dom";


const App = () => {

	return (
		<div className="App">
			<div className="wrapper">
				<Header/>
				<div className="content">
					<Route path={'/'} component={Content} exact/>
				</div>
			</div>
		</div>
	)
}

export default App;
