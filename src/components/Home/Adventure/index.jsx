import React from 'react'
import styled from 'styled-components';
import Location from './Location';

const Adventure = () => {
	const places = Array.from(Array(8).keys(), n => n + 1);

	return (
		<Container>
			<AdventureWrapper>
				<Title>Inspiration for your next adventure</Title>
				<Locations>
					{
						places.map(item => <Location item={item} key={item} location={"adventures"} />)
					}
				</Locations>
			</AdventureWrapper>
		</Container>
	)
}

export default Adventure;

const Container = styled.div``;
const AdventureWrapper = styled.div`
	width: 100%;
	max-width: 90rem;
	margin: 0 auto;
	padding: 4rem 2rem;
	@media(max-width: 768px) {
		padding: 4rem 1rem;
	}
`;
const Title = styled.h1`
	color: #000000;
	font-size: 3rem;
	line-height: 3.75rem;
	text-align: center;
	@media(max-width: 600px) {
		font-size: 2rem;
		line-height: 150%;
	}
`;
const Locations = styled.div`
	padding: 2rem 0;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
	@media(max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
	@media(max-width: 600px) {
		grid-template-columns: 1fr;
		align-content: center;
		justify-items: center;
	}
`;