import React from 'react';

function Index(props) {

	return (
		<div onClick={() => props.history('pity/home/2')}>home</div>
	);
}

export default Index;

