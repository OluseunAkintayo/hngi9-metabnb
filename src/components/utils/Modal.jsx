import React from 'react'
import { ChevronRight } from 'react-feather';
import styled from 'styled-components';

const Modal = ({ close }) => {
	return (
		<Backdrop>
			<Container>
				<Header>
					<Title>Connect Wallet</Title>
					<CloseBtn onClick={close} title="Close">
						<Close src="/assets/icon/x.png" alt="close-btn" />
					</CloseBtn>
				</Header>
				<ModalBody>
					<Text>Choose your preferred wallet</Text>
					<Options>
						<Option>
							<Description>
								<OptionIcon src="/assets/img/metamask.png" />
								<OptionText>Metamask</OptionText>
							</Description>
							<ChevronRight />
						</Option>
						<Option>
							<Description>
								<OptionIcon src="/assets/img/wallet-connect.png" />
								<OptionText>WalletConnect</OptionText>
							</Description>
							<ChevronRight />
						</Option>
					</Options>
				</ModalBody>
			</Container>
		</Backdrop>
	)
}

export default Modal;

const Backdrop = styled.div`
	background: rgba(64, 64, 64, 0.3);
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: grid;
	place-items: center;
	padding: 1rem;
`;
const Container = styled.div`
	width: 100%;
	max-width: 600px;
	background-color: #FFFFFF;
	border-radius: 1rem;
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #CFD8DC;
	padding: 1.5rem 2rem;
`;
const Title = styled.h4`
	font-weight: 700;
	font-size: 1.5rem;
	color: #333333;
`;
const CloseBtn = styled.div`
	width: 1.5rem;
	cursor: pointer;
`;
const Close = styled.img`
	width: 100%;
`;
const ModalBody = styled.div`
	padding: 2rem;
`;
const Text = styled.p`
	color: #333333;
	font-size: 1rem;
`;
const Options = styled.div`
	display: grid;
	gap: 1rem;
	margin-top: 1rem;
`;
const Option = styled.button`
	cursor: pointer;
	padding: 0.75rem 1.25rem;
	background: #F8F9FA;
	border: 1px solid #CFD8DC;
	border-radius: 0.75rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Description = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;
const OptionIcon = styled.img`
	width: 2.5rem;
`;
const OptionText = styled.p`
	font-size: 1.125rem;
	font-weight: 600;
`;