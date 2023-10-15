import styled from "styled-components";

const Line = styled.div`
height: 7px;
border: none;
border-radius:50%;
margin: 100px 10% 0 10%;
background: rgb(160,6,201);
background: -moz-linear-gradient(90deg, rgba(160,6,201,1) 0%, rgba(121,9,81,1) 50%, rgba(160,6,201,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(160,6,201,1) 0%, rgba(121,9,81,1) 50%, rgba(160,6,201,1) 100%);
background: linear-gradient(90deg, rgba(160,6,201,1) 0%, rgba(121,9,81,1) 50%, rgba(160,6,201,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a006c9",endColorstr="#a006c9",GradientType=1);
`

const Copyrights = styled.p`
text-align: center;
margin: 30px;
`

const Footer = () => {
  return (
    <>
      <Line></Line>
      <Copyrights>Copyrights&copy;Saeba33</Copyrights>
    </>

  );
};

export default Footer;