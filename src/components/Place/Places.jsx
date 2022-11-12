import React from 'react'
import styled from 'styled-components';
import Location from "../Home/Adventure/Location";

const Places = () => {
	const places = Array.from(Array(16).keys(), n => n + 1);
	return (
		<Container>
			<Wrapper>
				<PlacesWrapper>
					{
						places.map(item => <Location item={item} key={item} location={"places"} />)
					}
				</PlacesWrapper>
			</Wrapper>
		</Container>
	)
}

export default Places;

const Container = styled.div``;
const Wrapper = styled.div`
	width: 100%;
	max-width: 90rem;
	margin: 0 auto;
	padding: 4rem 2rem;
	@media(max-width: 768px) {
		padding: 4rem 1rem;
	}
`;
const PlacesWrapper = styled.div`
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