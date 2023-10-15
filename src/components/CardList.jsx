import styled from "styled-components";
import Data from "./Data";
import Card from "./Card";


const CardList = () => {
  return (
    <>
      {Data.map((item, index) => (
        <Card
          key={index}
          perso={item.perso}
          nickname={item.nickname}
          cat={item.cat}
          imgPerso={item.imgPerso}
          descriptionPerso={item.descriptionPerso}
          puissance={item.puissance}
          isFavorite={item.isFavorite}
        />
      ))}
    </>
  );
};

export default CardList;