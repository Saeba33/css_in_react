import Data from "./Data";
import Card from "./Card";

const CardList = () => {
  return (
    <>
      {Data.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          nickname={item.nickname}
          category={item.category}
          picture={item.picture}
          bio={item.bio}
          power={item.power}
          isFavorite={item.isFavorite}
        />
      ))}
    </>
  );
}

export default CardList;