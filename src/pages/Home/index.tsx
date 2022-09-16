import *as React from 'react';

declare interface props {
	history:any
}

function Index(props:props) {

	return (
		<div onClick={() => props.history('pity/home/2')}>home</div>
	);
}

export default Index;

