import { keyframes } from "styled-components";
import styled from "styled-components";

const opac = keyframes`
	0%{opacity:0.5}
	25%{opacity:0.7}
	50%{opacity:0.9}
	100%{opacity:1}


`;

export const ContactUsContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 0px;
	top: 0px;
	transition: width 2s;
`;

export const ContactUsContainer2 = styled.a`
	background-color: rgba(0, 0, 0, 0.555);
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0px;
	top: 0px;
	border: none;
	animation: ${opac} 1s linear;
`;

export const FormContainer = styled.form`
	width: 500px;
	height: 545px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;

	justify-content: center;
	align-items: center;

	border: 1px solid #eeeeee;
	border-radius: 6px;
	background-color: #ffffff;

	padding: 30px;

	gap: 10px;
	position: relative;
	z-index: 10;
	opacity: ${({ opacity }) => opacity || 0};
	animation: ${opac} 1s linear;

	@media (max-width: 540px) {
		align-self: center;
		margin-right: 5px;
		width: 95%;
		border: 1px solid var(--secondColor);
	}
`;

export const CloseForm = styled.div`
	width: 20px;
	height: 30px;

	position: absolute;
	right: 15px;
	top: 10px;

	color: var(--secondColor);
	font-size: 20px;
	font-weight: 800;
	cursor: pointer;
`;
