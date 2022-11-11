import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from 'react-feather';

const Header = () => {
	const [show, setShow] = React.useState(false);
	const toggle = () => setShow(prev => !prev);

	return (
		<React.Fragment>
			<Container>
				<Wrapper>
					<LogoContainer>
						<Logo src="/assets/img/metabnb.png" />
					</LogoContainer>
					<Links>
						<Link to="/">Home</Link>
						<Link to="/place">Place to stay</Link>
						<a href="#">NFTs</a>
						<a href="#">Community</a>
					</Links>
					<ButtonWrapper>
						<Button>Connect wallet</Button>
					</ButtonWrapper>
					<MenuIcon>
						<Menu size="2.5rem" color="#434343" onClick={toggle} />
					</MenuIcon>
				</Wrapper>
			</Container>
			<MobileMenu translate={!show ? "100%" : 0}>
				<Links>
					<Link to="/">Home</Link>
					<Link to="/place">Place to stay</Link>
					<a href="#">NFTs</a>
					<a href="#">Community</a>
				</Links>
				<ButtonWrapper>
					<Button>Connect wallet</Button>
				</ButtonWrapper>
			</MobileMenu>
		</React.Fragment>
	)
}

export default Header;

const Container = styled.header`
	height: 112px;
	padding: 2rem;
	@media(max-width: 768px) {
		padding: 1rem;
	}
	@media(max-width: 900px) {
		position: relative;
		z-index: 2;
	}
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
`;
const LogoContainer = styled.div``;
const Logo = styled.img`
	width: 80%;
	@media(max-width: 900px) {
		/* width: unset; */
	}
`;
const Links = styled.div`
	display: flex;
	a {
		color: #434343;
		padding: 0.25rem 1rem;
		font-size: 1.25rem;
		transition: ease-in-out 0.3s;
		border-radius: 0.625rem;
		&:hover {
			/* background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%); */
			color: #A02279;
			transform: scale(1.05);
		}
	}
	@media(max-width: 900px) {
		display: none;
	}
`;
const ButtonWrapper = styled.div`
	@media(max-width: 900px) {
		display: none;
	}
`;
const Button = styled.button`
	color: #FFFFFF;
	font-size: 1rem;
	background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%);
	border-radius: 0.625rem;
	border: none;
	outline: none;
	cursor: pointer;
	transition: opacity ease-in-out 0.2s;
	height: 3rem;
	width: 10.625rem;
	&:hover {
		opacity: 0.8;
	}
`;
const MenuIcon = styled.div`
	display: none;
	@media(max-width: 900px) {
		display: block;
		cursor: pointer;
	}
`;
const MobileMenu = styled.div`
	@media(min-width: 900px) {
		display: none;
	}
	background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
	position: fixed;
	z-index: 1;
	width: 100%;
	left: 0;
	bottom: 0;
	top: 0;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transition: all ease-in-out 0.3s;
	transform: translateX(${props => props.translate});
	${Links} {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: -112px;
	}
	${ButtonWrapper} {
		display: flex;
		justify-content: center;
		padding: 1rem 0;
	}
`;