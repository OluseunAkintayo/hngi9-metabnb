import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

const Nfts = () => {
	return (
		<Container whileInView={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} >
			<Wrapper>
				<Left>
					<Title>Metabnb NFTs</Title>
					<Text>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</Text>
					<Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>Learn more</Button>
				</Left>
				<Right>
					<Img src="/assets/img/nfts.png" />
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Nfts;

const Container = styled(motion.div)`
	background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
`;
const Wrapper = styled.div`
	width: 100%;
	max-width: 90rem;
	margin: 0 auto;
	padding: 4rem 2rem;
	display: grid;
	grid-template-columns: 48% 50%;
	gap: 2%;
	@media(max-width: 768px) {
		padding: 4rem 1rem;
		grid-template-columns: 1fr;
		gap: 2rem;
	}
`;
const Left = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
	`;
const Title = styled.h3`
	font-size: 3rem;
	font-weight: 700;
	line-height: 3.75rem;
	color: rgba(255, 255, 255, 0.87);
	@media(max-width: 768px) {
		font-size: 2rem;
		line-height: 150%;
	}
	`;
const Text = styled.p`
	font-size: 1.125rem;
	line-height: 2.1875rem;
	font-weight: 400;
	color: rgba(255, 255, 255, 0.87);
`;
const Button = styled(motion.button)`
	background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
	border: none;
	outline: none;
	height: 3rem;
	color: #A02279;
	font-size: 1rem;
	border-radius: 0.5rem;
	max-width: 9.75rem;
	cursor: pointer;
`;
const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media(max-width: 768px) {
		justify-content: center;
	}
`;
const Img = styled.img`
	max-width: 80%;
	@media(max-width: 768px) {
		max-width: 70%;
	}
`;