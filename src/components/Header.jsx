/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { useState } from "react";

const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

const Title = styled.h1`
  font-size: calc(0.5em + 5vw);
`;

const Subtitle = styled.h2`
  font-size: calc(0.5em + 1.5vw);
  color: #8d078d;
  transition: 0.4s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  &:hover {
    transform: scale(1.2);
  }
`;

const Description1 = styled.article`
  margin: 5vh;
  border-radius: 0px;
  line-height: 1.5;
  text-align: left;
  font-size: calc(0.5em + 1vw);
`;

const More = styled.button`
  background-color: transparent;
  color: white;
  font-size: calc(1rem + 0.5vw);
  border: 0;
  cursor: pointer;
  position: relative;
  padding: 20px 50px;
  margin-top: 1vh;
  margin-bottom: 1vh;
  &::after,
  &::before {
    border: 3px solid white;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: all 0.25s;
  }
  &:hover::after {
    transform: translate(-5px, -5px);
  }
  &:hover::before {
    transform: translate(5px, 5px);
  }
`;

const Description2 = styled.article`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding-top: 1vh;
  padding-bottom: 1vh;
  margin-top: 1vh;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: ${(props) => (props.visible ? "auto" : "0")};
`;

const Header = () => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <>
      <TitlesContainer>
        <Title>Jujutsu Kaisen</Title>
        <Subtitle>じゅじゅつかいせん</Subtitle>
      </TitlesContainer>
      <Description1>
        Ce projet fan-service référence des cartes de protagonistes issus de
        l'animé Jujutsu Kaisen.
        <br />
        Chacune d'entre elles reprend le nom du personnage, son surnom, une
        photo de profil, sa catégorie, une briève biographie ainsi que son
        niveau de puissance (déterminé de manière totalement arbitraire).
        <br />
        Par ailleurs, vous avez la possibilité d'ajouter vos persos en favori en
        cliquant sur le coeur présent dans la carte.
        <br />
        Si vous souhaitez en découvrir davantage sur l'animé, cliquez sur le
        bouton ci-dessous.
        <br />
        <More onClick={() => setSeeMore(!seeMore)}>
          {seeMore ? "En voir moins" : "En savoir plus..."}
        </More>
        <Description2 visible={seeMore}>
          L'intrigue de Jujutsu Kaisen se déroule dans un monde où l'énergie
          occulte existe, elle se matérialise par des démons appelés Fléaux,
          créés à partir des émotions négatives des Humains. Ceux-ci sont
          invisibles aux yeux des humains sauf pour une poignée de personnes.
          Ces personnes capables d'interagir avec les Fléaux, de maitriser leurs
          émotions et donc leur énergie occulte s'appellent des Exorcistes. Le
          métier d'exorciste consiste à éliminer les Fléaux et ainsi protéger le
          humains non-exorciste de ces derniers car l'on peut vaincre les fléaux
          qu'en utilisant de l'énergie occulte (le feu par le feu). Mais cela
          n'est pas sans risques, car les fléaux peuvent êtres d'une grande
          puissance.
          <br />
          <br />
          Yūji Itadori, un lycéen lambda doté d'une force surhumaine et membre
          du club de spiritisme, trouve un jour dans l'abri météo de son lycée
          une relique (objet imprégné d'énergie occulte) de rang S (plus haut
          rang de puissance des fléaux) protégée par un sceau. Sasaki et Iguchi,
          ses amis du club, restent le soir au lycée pour inspecter la relique
          tandis que Yūji est à l'hôpital où son grand-père vient tout juste de
          décéder. La relique qu'ils ont trouvée est un des 20 doigts de Ryōmen
          Sukuna, le plus puissant des fléaux. Ainsi, en libérant le doigt du
          sceau, Sasaki et Iguchi se font attaquer par de nombreux fléaux. Yūji,
          apprenant l'existence de ces derniers, retourne le plus vite possible
          au lycée en compagnie d'un exorciste pour sauver ses amis des griffes
          des fléaux. Lors d'un affrontement contre l'un d'eux, il décide
          d'ingurgiter la relique pour devenir plus puissant et ainsi sauver ses
          amis.
          <br />
          <br />
          En avalant cette relique, Ryōmen Sukuna prend possession du corps de
          Yūji, mais cela n'est que de courte durée car ce dernier arrive
          étonnamment à reprendre le contrôle sur Sukuna. Les exorcistes
          décident dans un premier temps de condamner à mort Yūji, afin
          d'éloigner la menace qu'est Sukuna, mais grâce à l'intervention du
          plus puissant des exorcistes, Satoru Gojo, ils décident finalement
          d'utiliser Yūji comme réceptacle de Sukuna et de le tuer le jour où il
          aura avalé tous ses doigts. En effet, cela est la seule façon
          d'éliminer Sukuna une bonne fois pour toutes.
          <br />
          <br />
          De là, démarre une aventure qui mènera Yūji à devenir un puissant
          exorciste pour sauver les innocents d'une mort indigne et à éliminer
          les fléaux de ce monde pour préserver l'humanité.
        </Description2>
      </Description1>
    </>
  );
};

export default Header;
