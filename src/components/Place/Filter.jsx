import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

const Filter = () => {
	return (
		<Container>
			<Wrapper>
				<Div>
					<Links>
						<Link whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>Restaurant</Link>
						<Link whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>Cottage</Link>
						<Link whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>Castle</Link>
						<Link whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>fantast city</Link>
						<Link whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>Beach</Link>
						<Link whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>Carbins</Link>
						<Link whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>Off-grid</Link>
						<Link whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>Farm</Link>
					</Links>
					<Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
						<span>Location</span>
						<Icon src="/assets/icon/setting.png" />
					</Button>
				</Div>
			</Wrapper>
		</Container>
	)
}

export default Filter;

const Container = styled.div``;
const Wrapper = styled.div`
	width: 100%;
	max-width: 90rem;
	margin: 0 auto;
	padding: 2rem;
`;
const Div = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: space-between;
	@media(max-width: 768px) {
		flex-direction: column;
		align-items: start;
	}
`;
const Links = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
`;
const Link = styled(motion.span)`
	color: #434343;
	font-size: 1.25rem;
	cursor: pointer;
`;
const Button = styled(motion.button)`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	color: #333333;
	background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
	border: 1px solid #B4B4B4;
	padding: 0.375rem 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
`;
const Icon = styled.img`
	width: 1.5rem;
`;
