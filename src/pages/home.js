import React from 'react';

function Home(props) {

	return (
		<div onClick={() => props.history('pity/home/2')}>home</div>
	);
}

export default Home;

