import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Places from './Places';

const Place = () => {
	React.useEffect(() => {
		const prev = document.title;
		document.title = "Metabnb || Places";
		return () => document.title = prev;
	}, []);
	return (
		<Container>
			<Filter />
			<Places />
		</Container>
	)
}

export default Place;

const Container = styled.div``;