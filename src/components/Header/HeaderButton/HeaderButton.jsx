import React from "react";
import classNames from 'classnames';

const HeaderButton = ({children, onClick}) => {
	return(
		// <a href="/cart.html" className="button button--cart"></a>
		<button
		onClick={onClick}
		className={classNames('button', 'button--cart')}
		>{children}</button>
	)
}

export default HeaderButton;