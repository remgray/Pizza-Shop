import React from "react";
import ContentLoader from "react-content-loader";


const PizzaLoadingBlock = () => {
	return (
		<ContentLoader
			className="pizza-block"
			speed={2}
			width={290}
			height={470}
			viewBox="0 0 290 470"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb">
			<circle cx="146" cy="114" r="105"/>
			<rect x="0" y="237" rx="15" ry="15" width="290" height="38"/>
			<rect x="0" y="301" rx="11" ry="11" width="290" height="87"/>
			<rect x="0" y="409" rx="11" ry="11" width="108" height="36"/>
			<rect x="145" y="403" rx="25" ry="25" width="141" height="46"/>
		</ContentLoader>)
}

export default PizzaLoadingBlock;