import { motion } from 'framer-motion';
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
		<Container whileInView={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }}>
			<Filter />
			<Places />
		</Container>
	)
}

export default Place;

const Container = styled(motion.div)``;