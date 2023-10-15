import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";

const CardContainer = styled.div`
border: 2px solid white;
width: 320px;
margin: 20px;
border-radius: 15px;
background-color: transparent;
display: grid;
grid-template-rows: auto auto auto 1fr auto auto auto ;
opacity: 0.6;

&:hover {
    background-color: #656674;
    opacity: 1;
    transform: scale(1.05);
}
`;

const Name = styled.h1`
padding: 10px;
grid-row: 1;
`;

const Nickname = styled.h4`
font-style: italic;
padding-bottom: 20px;
grid-row: 2;
`;

const Picture = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
padding-bottom: 20px;
grid-row: 3;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
`;

const UnderPicture = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 20px;
`;

const Category = styled.h4`
text-align: left;
padding-left: 20px;
`;

const Power = styled.h4`
text-align: left;
padding-right: 20px;
`;

const Bio = styled.p`
display: flex;
text-align: left;
padding: 0px 20px;
`;

const Fav = styled.button`
background-color: transparent;
margin-bottom: 10px;
margin-left: 20px;
`;

function Card({ name, nickname, picture, category, power, bio, isFavorite }) {
    const [favorite, setFavorite] = useState(isFavorite);
    const handleClickFavorite = () => {
    setFavorite(!favorite);
 };
 

return (
    <CardContainer>
      <Name>{name}</Name>
      <Nickname>" {nickname} "</Nickname>
      <Picture src={picture} alt="photo"></Picture>
      <Content>
      <UnderPicture>
      <Category>{category}</Category>
      <Power>{power}</Power>
      </UnderPicture>
      <Bio>{bio}</Bio>
      </Content>
      <Fav
      id="favorite"
      onClick={handleClickFavorite}
      className={favorite ? 'isFavorite' : 'notFavorite'}
      >
      </Fav>
    </CardContainer>
  );
}

Card.propTypes = {
    name: PropTypes.string,
    nickname: PropTypes.string,
    picture: PropTypes.string,
    category: PropTypes.string,
    power: PropTypes.string,
    bio: PropTypes.string,
    isFavorite: PropTypes.bool,
  };

export default Card;