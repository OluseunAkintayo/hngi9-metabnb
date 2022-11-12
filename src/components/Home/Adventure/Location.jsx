import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Location = ({ item, location }) => {
	return (
		<Container>
			<Img src={"/assets/img/" + location + "/" + item + ".png"} loading="lazy" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }} whileInView={{ scale: 1, opacity: 1 }} initial={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true }} />
			<Desc>
				<Div>
					<Text>Desert king</Text>
					<Text align="right" weight="700">1MBT per night</Text>
				</Div>
				<Div>
					<Text>2345km away</Text>
					<Text align="right">available for 2 weeks stay</Text>
				</Div>
				<Rating>
					<RatingIcon src="/assets/icon/star.png" />
					<RatingIcon src="/assets/icon/star.png" />
					<RatingIcon src="/assets/icon/star.png" />
					<RatingIcon src="/assets/icon/star.png" />
					<RatingIcon src="/assets/icon/star.png" />
				</Rating>
			</Desc>
		</Container>
	)
}

export default Location;

const Container = styled.div`
	width: 100%;
	padding: 1rem;
	background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
	border: 1px solid #D7D7D7;
	border-radius: 0.9375rem;
	cursor: pointer;
	@media(max-width: 600px) {
		max-width: 18.25rem;
	}
`;
const Img = styled(motion.img)`
	width: 100%;
`;
const Div = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
`;
const Desc = styled.div`
	display: grid;
	gap: 0.75rem;
	margin-top: 1rem;
`;
const Text = styled.p`
	font-size: 0.75rem;
	color: #434343;
	line-height: 0.8125rem;
	text-align: ${props => props.align};
	font-weight: ${props => props.weight}
`;
const Rating = styled.div`
	display: flex;
	gap: 0.375rem;
`;
const RatingIcon = styled.img``;