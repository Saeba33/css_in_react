import styled from "styled-components";

const Border = styled.div`
height: 7px;
margin-left: 10%;
margin-right: 10%;
border: none;
border-radius:50%;
background: rgb(160,6,201);
background: -moz-linear-gradient(90deg, rgba(160,6,201,1) 0%, rgba(121,9,81,1) 50%, rgba(160,6,201,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(160,6,201,1) 0%, rgba(121,9,81,1) 50%, rgba(160,6,201,1) 100%);
background: linear-gradient(90deg, rgba(160,6,201,1) 0%, rgba(121,9,81,1) 50%, rgba(160,6,201,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a006c9",endColorstr="#a006c9",GradientType=1);
`

const Copyright = styled.p`
text-align: center;
`

const Footer = () => {
    return (
    <>
      <Border> </Border>
      <Copyright>Copyrights&copy;Saeba33</Copyright>
    </>

    );
};

export default Footer;