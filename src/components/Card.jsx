import styled from "styled-components";
import { useState } from "react";

function Card({ perso, nickname, cat, imgPerso, descriptionPerso, puissance, isFavorite }) {
   const [favorite, setFavorite] = useState(isFavorite);
   const handleClickFavorite = () => {
   setFavorite(!favorite);
};


const CardContainer = styled.div`
border: 2px solid white;
margin: 20px;
`

const Character = styled.h1`

`

const Alias = styled.h3`

`

const Category = styled.h3`

`

const Picture = styled.img`
width: 100%;
`

const Bio = styled.p`

`

const Power = styled.h2`

`

const Fav = styled.p`

`


return (
    <>
     <CardContainer>
      <Character>{perso}</Character>
      <Alias>{nickname}</Alias>
      <Category>{cat}</Category>
      <Picture src={imgPerso} alt="photo"></Picture>
      <Bio>{descriptionPerso}</Bio>
      <Power>{puissance}</Power>
     
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

export default Card;