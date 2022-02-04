import styled from "styled-components";

export const ServicesContainer = styled.section`
	width: ${({ width }) => width || "100%"};
	height: ${({ height }) => height || "auto"};
	background-color: ${({ backgroundColor }) => backgroundColor || "none"};
	padding: ${({ padding }) => padding || "25px 0px"};
	display: ${({ display }) => display || "flex"};
	flex-direction: ${({ flexDirection }) => flexDirection || "column"};
	justify-content: ${({ justifyContent }) => justifyContent || "center"};
	align-items: ${({ alignItems }) => alignItems || "center"};
	gap: ${({ gap }) => gap || "15px"};
	border: ${({ border }) => border || "none"};
`;

export const TitleContainer = styled.div`
	width: max-content;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
`;
