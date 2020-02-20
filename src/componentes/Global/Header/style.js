import styled from "styled-components";
import Paisaje from "../../../images/paisaje.jpeg";

export const HeaderContainer = styled.div`
  border-radius: 15px;
  overflow: hidden;
  background-image: url(${Paisaje});
  background-size: cover;
  padding: 62px 73px;
  margin: 19px 0;
  position: relative;
  @media (max-width: 767px) {
    padding: 41px 36px;
  }
  &:before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(34, 102, 247, 0.79) 0%,
      rgba(55, 32, 176, 1) 100%
    );
    opacity: 0.72;
  }
  small {
    opacity: 0.43;
    font-family: Arial;
    font-size: 17px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    position: relative;
    z-index: 2;
  }
  h3 {
    font-size: 74px;
    font-weight: 200;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    position: relative;
    z-index: 2;
    @media (max-width: 767px) {
      font-size: 64px;
    }
  }
  p {
    font-size: 30px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    position: relative;
    z-index: 2;
    margin-bottom: 0;
    @media (max-width: 767px) {
      width: 70%;
      font-size: 18px;
    }
  }
`;
