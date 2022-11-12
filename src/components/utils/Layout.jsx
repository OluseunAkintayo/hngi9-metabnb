import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Layout = () => {
	return (
		<Container>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</Container>
	)
}

export default Layout;

const Container = styled.div`
	background: linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%);
`;
