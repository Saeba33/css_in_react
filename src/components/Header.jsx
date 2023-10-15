import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  align-items: center;
`;

const Pic = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 50px;
  float: left;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Name = styled.h1`
  display: block;
  margin-top: 0;
  font-size: 40px;
`;

const Description = styled.h2`
  display: block;
  margin: 0;
`;

const About = styled.h2`
  text-align: center;
  color: #8d078d;
`;

const Article = styled.article`
  border: 1px solid white;
  margin: 50px;
  padding: 20px;
  border-radius: 15px;
  line-height: 2;
  text-align: left;
`;

const Header = () => {
  return (
    <>
      <Nav>
        <Pic src="./src/assets/Murasaki.gif" alt="logo"></Pic>
        <TextContainer>
          <Name>Jujutsu Kaisen</Name>
          <Description>じゅじゅつかいせん</Description>
        </TextContainer>
      </Nav>
      <About>À propos</About>
      <Article>
        Ce projet fan-service référence des cartes de protagonistes issus de l'anime Jujutsu Kaisen.
        <br />Chacune de ces cartes reprend le nom du personnage, son surnom (donné de manière totalement subjective), sa catégorie, sa photo de profil, une briève biographie ainsi que son niveau de puissance (une fois de plus déterminé de manière totalement arbitraire 😉).
        <br />Par ailleurs, vous avez la possibilité d'ajouter vos persos en favori, pour cela cliquez sur le petit cœur de la carte.
      </Article>
    </>
  );
};

export default Header;