import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

const Hero = () => {
	return (
		<React.Fragment>
			<HeroContainer>
				<Div>
					<HeroText animate={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }}>
						Rent a <span>Place</span> away from <br /> <span>Home</span> in the <span>Metaverse</span>
					</HeroText>
					<SubText animate={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5 }}>
						we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
					</SubText>
					<Search animate={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 2 }}>
						<Input type="text" placeholder="Search for location" />
						<Button>Search</Button>
					</Search>
				</Div>
				<Div className="hero-img-container" animate={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1 }}>
					<HeroImg animate={{ y: [ 0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} src="/assets/img/hero-img.png" />
				</Div>
			</HeroContainer>
			<Nfts whileInView={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} >
				<NftsContainer>
					<NftItem>
						<NftImg src="/assets/img/mbtoken.png" draggable="false" />
					</NftItem>
					<NftItem>
						<NftImg src="/assets/img/metamask-II.png" draggable="false" />
					</NftItem>
					<NftItem>
						<NftImg src="/assets/img/opensea.png" draggable="false" />
					</NftItem>
				</NftsContainer>
			</Nfts>
		</React.Fragment>
	)
};

export default Hero;

const HeroContainer = styled.div`
	width: 100%;
	max-width: 90rem;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 48% 50%;
	grid-gap: 2%;
	padding: 2rem;
	@media(max-width: 786px) {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		padding: 4rem 1rem;
	}
`;
const Div = styled(motion.div)`
	max-width: 100%;
	&:first-child {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	&:nth-child(2) {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		@media(max-width: 786px) {
			justify-content: center;	
		}
	}
`;
const HeroText = styled(motion.h2)`
	font-size: 3.5rem;
	font-weight: 400;
	line-height: 4.875rem;
	margin-bottom: 1rem;
	span {
		font-weight: 700;
		color: #A02279;
	}
	br {
		display: none;
	}
	@media(max-width: 600px) {
		font-size: 2rem;
		line-height: 150%;
		br {
			display: block;
		}
	}
	@media(max-width: 420px) {
		br {
			display: none;
		}
	}
`;
const SubText = styled(motion.p)`
	font-size: 1.5rem;
	color: #434343;
	line-height: 2.1875rem;
	@media(max-width: 600px) {
		font-size: 1.25rem;
		line-height: 150%;
	}
`;
const Search = styled(motion.div)`
	display: grid;
	grid-template-columns: 63% 37%;
	margin-top: 2rem;
`;
const Input = styled.input`
	border: 1px solid #A3A3A3;
	border-right: none;
	border-radius: 0.5rem 0 0 0.5rem;
	height: 3.375rem;
	outline: none;
	color: #B8B8B8;
	padding: 0 0.75rem;
	font-size: 0.875rem;
	letter-spacing: 0.5px;
	&:focus {
		/* border: 1px solid #A02279; */
		box-shadow: 0px 0px 2px 0px rgba(160,34,121,0.75);
	}
	&::placeholder {
		color: #B8B8B8;
	}
`;
const Button = styled.button`
	background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%);
	border-radius: 0 0.5rem 0.5rem 0;
	border: none;
	height: 3.375rem;
	width: 100%;
	color: #FFFFFF;
	font-size: 1rem;
	cursor: pointer;
`;
const HeroImg = styled(motion.img)`
	max-width: 100%;
	max-height: 80%;
	@media(max-width: 786px) {
		transform: scale(0.9);
	}
`;
const Nfts = styled(motion.div)`
	background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
	`;
const NftsContainer = styled.div`
	width: 100%;
	max-width: 90rem;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100%;
	padding: 1rem 2rem;
	@media(max-width: 768px) {
		flex-direction: column;
		gap: 2rem;
		padding: 1rem;
	}
`;
const NftItem = styled.div`
	height: 3.125rem;
	display: flex;
	align-items: center;
	cursor: pointer;
`;
const NftImg = styled.img`
	max-height: 80%;
`;