import styled, { keyframes } from 'styled-components';

function randomShadowGenerator(val) {
  const shadowArray = [];
  const random = () => Math.floor(Math.random() * 5000);
  for (let i = 0; i < val; i++) {
    shadowArray.push(`${random() / 2}px ${random()}px white`);
  }
  return shadowArray.join(', ');
}

const frontShadow = randomShadowGenerator(500);
const middleShadow = randomShadowGenerator(700);
const backShadow = randomShadowGenerator(900);

const movingStars = keyframes`
  from {transform: translateY(0);}
  to {transform: translateY(5000px);}
`;

const WildContainer = styled.div`
  z-index: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: transparent;
  overflow: hidden;
`;

const WildStyle = styled.div`
  position: absolute;
  margin-top: 0px;
  left: 0;
  height: 5000px;
  font-size: 24px;
  text-shadow: ${frontShadow};
  animation: ${movingStars} 230s linear infinite;
`;

const WildStyleTwo = styled.div`
  position: absolute;
  margin-top: 0px;
  left: 0;
  height: 5000px;
  font-size: 18px;
  text-shadow: ${middleShadow};
  animation: ${movingStars} 220s linear infinite;
`;

const WildStyleThree = styled.div`
  position: absolute;
  margin-top: 0px;
  left: 0;
  height: 5000px;
  font-size: 12px;
  text-shadow: ${backShadow};
  animation: ${movingStars} 200s linear infinite;
`;

//todo make this function
//* make a fun that generates random text.shadows from 0 - 2000
//* call it with variables to decide how many stars to generate
//* 1 make a random generator
//* 2. use it to generate the shadows
//* maybe put it in an array
//* 3. create a variable to hold the string
//* return the string
//todo generate three text shadow variables and then pass them to the three dots
//* just call the function three times 100 200 700
//* still need to figure out how to set the size

//* generate the animation to move the stars down the screen
//* then call the animations with different speeds
//todo reference this guy https://codepen.io/saransh/details/BKJun

// .check-btn-white-checking:after {
//     content: '.';
//     animation: dots 1s steps(5, end) infinite;
// }

// @keyframes dots {

//   0%, 20% {
//     color: rgba(0,0,0,0);
//     text-shadow:
//       .25em 0 0 rgba(0,0,0,0),
//       .5em 0 0 rgba(0,0,0,0);}
//   40% {
//     color: white;
//     text-shadow:
//       .25em 0 0 rgba(0,0,0,0),
//       .5em 0 0 rgba(0,0,0,0);}
//   60% {
//     text-shadow:
//       .25em 0 0 white,
//       .5em 0 0 rgba(0,0,0,0);}
//   80%, 100% {
//     text-shadow:
//       .25em 0 0 white,
//       .5em 0 0 white;}
// }

export default function Wild({ theme }) {
  return (
    <WildContainer>
      <WildStyle> * </WildStyle>
      <WildStyleTwo> * </WildStyleTwo>
      <WildStyleThree> * </WildStyleThree>
      <div style={{ marginTop: '-5000px' }}>
        <WildStyle> * </WildStyle>
        <WildStyleTwo> * </WildStyleTwo>
        <WildStyleThree> * </WildStyleThree>
      </div>
    </WildContainer>
  );
}
