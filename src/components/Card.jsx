import styled from "styled-components";
import { useState } from "react";

function Card({ perso, nickname, cat, imgPerso, descriptionPerso, puissance, isFavorite }) {
   const [favorite, setFavorite] = useState(isFavorite);
   const handleClickFavorite = () => {
   setFavorite(!favorite);
};

/*const Container = styled.div`
`

const Perso = styled.h3`
`

const Nickname = styled.h5`
`

const cat = styled.p`
`

const ImgPerso = styled.image`
`

const DescriptionPerso = styled.p`
`

const Puissance = styled.h6`
`*/

return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
      
        </div>
        <div className="itemDescription">
         
          <h3>{perso}</h3>
          <h5>{nickname}</h5>
          <p>{cat}</p>
          <img src={imgPerso} alt="image" />
          <p>{descriptionPerso}</p>
          <h6>{puissance}</h6>
        </div>
      </div>
      <div className="rightContainer">
  
         <div
          id="favorite"
          onClick={handleClickFavorite}
          className={favorite ? 'isFavorite' : 'notFavorite'}
        ></div>
      </div>
    </div>
  );
};

export default Card;