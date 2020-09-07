import React from "react";
import classNames from 'classnames';

const Button = ({children, className, outline, onClick}) => {
	return(
		// <a href="/cart.html" className="button button--cart"></a>
		<button
		onClick={onClick}
		className={classNames('button', className, {
			'button--outline': outline,
		})}
		>{children}</button>
	)
}

export default Button;