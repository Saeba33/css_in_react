import styled from "styled-components";

const Pic = styled.img`
width: 250px;
height: 250px;
border-radius:50%;
margin: 50px;
display: flex;
flex-direction: row;
gap: 2rem
`
const Name = styled.h1`
display: flex;
`
const Description = styled.h2`
display: flex;
`
const About = styled.h2`
text-align: center;
color: #8d078d;
`
const Article = styled.article`
border: 1px solid white;
margin: 50px;
padding: 20px;
border-radius: 15px;
line-height: 2;
`

const Header = () => {
    return (
        <> 
         <Pic src="./src/assets/Murasaki.gif" alt="logo"></Pic>
         <Name>Jujutsu Kaisen</Name>
         <Description>じゅじゅつかいせん</Description>
         <About>À propos</About>
         <Article>Ce projet fan-service référence des cartes de protagonistes issus de l'anime Jujutsu Kaisen. 
          <br/>Chacune de ces cartes reprend le nom du personnage, son surnom (donné de manière totalement subjective), sa catégorie, sa photo de profil, une briève biographie ainsi que son niveau de puissance (une fois de plus déterminé de manière totalement arbitraire 😉).
          <br/>Par ailleurs, vous avez la possibilité d'ajouter vos persos dans en favori, pour cela cliquez sur le petit coeur de la carte.
         </Article>
        </>
    );
};

export default Header;