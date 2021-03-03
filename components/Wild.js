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
  z-index: -1;
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

export default function Wild({ theme }) {
  return (
    <WildContainer aria-hidden="true">
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
