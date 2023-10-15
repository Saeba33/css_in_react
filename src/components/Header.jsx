import styled from "styled-components";

const Welcome = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  margin: 50px;
  float: left;
`;

const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  
`;

const Title = styled.h1`
  display: block;
  margin-top: 0;
  font-size: 60px;
`;

const Subtitle = styled.h2`
  display: block;
  margin: 0;
`;

const About = styled.h2`
  text-align: center;
  color: #8d078d;
  font-size: 40px;
`;

const Description = styled.article`
  border: 1px solid white;
  margin: 50px 80px 150px 80px;
  padding: 20px;
  border-radius: 15px;
  line-height: 2;
  text-align: left;
  font-size: 20px;
`;

const Header = () => {
  return (
    <>
      <Welcome>
        <Logo src="./src/assets/Murasaki.gif" alt="logo"></Logo>
        <TitlesContainer>
          <Title>Jujutsu Kaisen</Title>
          <Subtitle>じゅじゅつかいせん</Subtitle>
        </TitlesContainer>
      </Welcome>
      <About>À propos</About>
      <Description>
        Ce projet fan-service référence des cartes de protagonistes issus de l'anime Jujutsu Kaisen.
        <br />Chacune de ces cartes reprend le nom du personnage, son surnom (donné de manière totalement subjective), sa catégorie, sa photo de profil, une briève biographie ainsi que son niveau de puissance (une fois de plus déterminé de manière totalement arbitraire 😉).
        <br />Par ailleurs, vous avez la possibilité d'ajouter vos persos en favori, pour cela cliquez sur le petit cœur de la carte.
      </Description>
    </>
  );
}

export default Header;