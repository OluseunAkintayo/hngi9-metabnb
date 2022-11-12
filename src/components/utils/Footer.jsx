import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterWrapper>
			<Container>
				<Div className='logo'>
					<LogoWrapper>
						<Logo src="/assets/img/metabnb-white.png" />
					</LogoWrapper>
					<Icons>
						<Icon src="/assets/icon/fb.png" />
						<Icon src="/assets/icon/instagram.png" />
						<Icon src="/assets/icon/twitter.png" />
					</Icons>
				</Div>
				<Div>
					<Title>Community</Title>
					<Links>
						<LinkItem>NFT</LinkItem>
						<LinkItem>Tokens</LinkItem>
						<LinkItem>Landlords</LinkItem>
						<LinkItem>Discord</LinkItem>
					</Links>
				</Div>
				<Div>
					<Title>Places</Title>
					<Links>
						<LinkItem>Castle</LinkItem>
						<LinkItem>Farms</LinkItem>
						<LinkItem>Beach</LinkItem>
						<LinkItem>Learn more</LinkItem>
					</Links>
				</Div>
				<Div>
					<Title>About us</Title>
					<Links>
						<LinkItem>Road map</LinkItem>
						<LinkItem>Creators</LinkItem>
						<LinkItem>Career</LinkItem>
						<LinkItem>Contact us</LinkItem>
					</Links>
				</Div>
			</Container>
			<Copyright>
				<p>&copy; { new Date().getFullYear() } Metabnb</p>
			</Copyright>
		</FooterWrapper>
	)
}

export default Footer;

const FooterWrapper = styled.footer`
	background-color: #1D1D1E;
`;
const Container = styled.div`
	width: 100%;
	max-width: 90rem;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 2rem;
	padding: 2rem;
	.logo {
		gap: 3rem;
	}
	@media(max-width: 768px) {
		padding: 1rem;
		grid-template-columns: 1fr 1fr;
	}
`;
const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: space-between;
`;
const LogoWrapper = styled.div`
	width: 100%;
`;
const Logo = styled.img`
	max-width: 90%;
	max-height: 2.1875rem;
`;
const Icons = styled.div`
	display: flex;
	width: 100%;
	gap: 2rem;
	margin-bottom: 1rem;
`;
const Icon = styled.img`
	height: 1.125rem;
`;
const Title = styled.h4`
	font-weight: 700;
	font-size: 1.125rem;
	margin-bottom: 0.75rem;
	color: #F1F3F9;
`;
const Links = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const LinkItem = styled.span`
	color: #F1F3F9;
	font-size: 0.875rem;
	cursor: pointer;
	transition: all 0.2s;
	&:hover {
		color: #A02279;
	}
`;
const Copyright = styled.div`
	color: #F7F7F7;
	padding: 2rem 0 1rem 0;
	width: 100%;
	max-width: 90rem;
	margin: 0 auto;
	padding: 2rem;
	@media(max-width: 768px) {
		padding: 0.75rem;
	}
`;