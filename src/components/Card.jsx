import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";

const CardContainer = styled.div`
border: 2px solid white;
width: 30vw;
margin: 20px;
border-radius: 15px;
background-color: transparent;
display: grid;
grid-template-rows: auto auto auto 1fr auto auto auto ;
grid-gap:10px;
`;

const Name = styled.h1`
grid-row: 1;
margin-bottom: 0;
`;

const Nickname = styled.h5`
font-style: italic;
font-weight: regular;
grid-row: 2;
`;

const Picture = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
grid-row: 3;
`;


const UnderPicture = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
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
margin-bottom: 5px;
grid-row: 7;
`;

function Card({ name, nickname, picture,category, power, bio, isFavorite }) {
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