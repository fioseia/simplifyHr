import {
	ButtonStyled,
	ButtonToTop,
	ServicesContainer,
	TitleContainer,
	TitleStyled,
} from "./ServicesStyled";

import { useContext } from "react";

import { LanguageContext } from "../../../Context/LanguageContext";

import CardsContainer from "./CardsContainer/CardsContainer";

import arrotToTop from "../../../Assets/arrowTop.svg";
import SwiperServices from "../../../Components/SwiperServices/SwiperServices";

function Services() {
	const { data } = useContext(LanguageContext);

	return (
		<ServicesContainer id='services'>
			<TitleContainer>
				<TitleStyled>{data.services.title}</TitleStyled>
				<TitleStyled>{data.services.subTitle}</TitleStyled>
			</TitleContainer>
			<CardsContainer />
			<SwiperServices />
			<ButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
				{data.services.button}
			</ButtonStyled>
			<ButtonToTop to={`/#home`} url={arrotToTop}></ButtonToTop>
		</ServicesContainer>
	);
}

export default Services;
