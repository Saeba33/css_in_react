import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";

function Card({ name, nickname, category, picture, bio, power, isFavorite }) {
   const [favorite, setFavorite] = useState(isFavorite);
   const handleClickFavorite = () => {
   setFavorite(!favorite);
};


const CardContainer = styled.div`
border: 2px solid white;
width: 30vw;
margin: 20px;
border-radius: 15px;
`;

const Name = styled.h1``;

const Nickname = styled.h4``;

const Category = styled.h4`
text-align: left;
padding-left: 80px;
`;

const Picture = styled.img`
width: 100%;
`;

const Bio = styled.p`
text-align: left;
padding: 0px 20px;
`;

const Power = styled.h2`

`;

const Fav = styled.p`

`;


return (
    <>
     <CardContainer>
      <Name>{name}</Name>
      <Nickname>" {nickname} "</Nickname>
      <Picture src={picture} alt="photo"></Picture>
      <Category>{category}</Category>
      <Bio>{bio}</Bio>
      <Power>{power}</Power>
     
      <Fav
      id="favorite"
      onClick={handleClickFavorite}
      className={favorite ? 'isFavorite' : 'notFavorite'}
      >
      </Fav>
     </CardContainer>
    </>
  );
}

Card.propTypes = {
    name: PropTypes.string,
    nickname: PropTypes.string,
    category: PropTypes.string,
    picture: PropTypes.string,
    bio: PropTypes.string,
    power: PropTypes.number,
    isFavorite: PropTypes.bool,
  };

export default Card;