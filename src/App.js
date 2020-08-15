import React, {useEffect, useState} from 'react';
import {Header, Content} from "./components";
import axios from 'axios';
import {Route} from "react-router-dom";
import { connect } from 'react-redux';
import {setPizzas} from "./redux/actions/pizzas";

// function App() {
//
// 	useEffect(() => {
// 		axios.get('https://raw.githubusercontent.com/Archakov06/react-pizza/master/public/db.json')
// 		 	.then(response => {setPizzas(response.data.pizzas)})
// 	}, []);
//
//
// }

class App extends React.Component {

	componentDidMount() {
		axios.get('https://raw.githubusercontent.com/Archakov06/react-pizza/master/public/db.json')
		 	.then(({data}) => {
				this.props.setPizzas(data.pizzas);
			})
	}


	render() {
		return (
			<div className="App">
				<div className="wrapper">
					<Header/>
					<div className="content">
						<Route path={'/'} render={() => <Content items={this.props.items}/>}  exact/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.pizzas.items,

	}
}

const mapDispatchToProps = dispatch => {
	return {
		setPizzas: (items) => dispatch(setPizzas(items))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
