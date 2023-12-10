import styled from "styled-components";

const Logo = styled.img`
  width: 60%;
  height: auto;
  margin-top: calc(20px + 5vw);
  opacity: 0;
  &:hover {
    opacity: 1;
    transform: scale(1.2);
    transition: 0.4s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  }
`;

const Line = styled.div`
  height: 5px;
  border: none;
  border-radius: 50%;
  margin: calc(10px + 5vw) 10% 0;
  background: rgb(160, 6, 201);
  background: -moz-linear-gradient(
    90deg,
    rgba(160, 6, 201, 1) 0%,
    rgba(121, 9, 81, 1) 50%,
    rgba(160, 6, 201, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(160, 6, 201, 1) 0%,
    rgba(121, 9, 81, 1) 50%,
    rgba(160, 6, 201, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(160, 6, 201, 1) 0%,
    rgba(121, 9, 81, 1) 50%,
    rgba(160, 6, 201, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a006c9",endColorstr="#a006c9",GradientType=1);
`;

const Copyrights = styled.p`
  text-align: center;
  margin: 30px;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <>
      <Logo src="/Murasaki.gif" alt="logo"></Logo>
      <Line></Line>
      <Copyrights>&copy; Saeba12</Copyrights>
    </>
  );
};

export default Footer;
