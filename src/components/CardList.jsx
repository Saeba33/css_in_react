import styled from "styled-components";
import Data from "./Data";
import Card from "./Card";

const CardListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardList = () => {
  return (
    <>
      <CardListContainer>
        {Data.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            nickname={item.nickname}
            picture={item.picture}
            category={item.category}
            power={item.power}
            bio={item.bio}
            isFavorite={item.isFavorite}
          />
        ))}
      </CardListContainer>
    </>
  );
};

export default CardList;
