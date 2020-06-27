import React from 'react';

import "./styles.css";

const Icon = ({src,padding}) => (
	<div className="icon-container">
		<img src={src} style={{padding: padding}}/>
	</div>
);

export default Icon;