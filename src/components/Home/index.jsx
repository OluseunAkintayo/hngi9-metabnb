import React from 'react';
import styled from 'styled-components';
import Adventure from './Adventure';
import Hero from './Hero';
import Nfts from './Nfts';

const Home = () => {
	return (
		<Container>
			<Hero />
			<Adventure />
			<Nfts />
		</Container>
	)
}

export default Home;

const Container = styled.div``;