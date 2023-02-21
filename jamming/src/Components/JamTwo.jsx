import styled from "styled-components";
import jam_imageOne from '../assets/girl_jam1.jpeg'
import jam_imageTwo from '../assets/jam_img2.jpeg'

const Container = styled.div`
  width: 100%;
  height: 75vh;
  margin: 20px 0;
  display: grid;
  place-items: center;
`;
const Wrapper = styled.div`
  width: 82%;
  height: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

const BoxContainer = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto auto;
`;
const Boxes = styled.div`
  width: 33vw;
  height:500px;
  border-radius: 20px;
  overflow: hidden;
  background-color: aliceblue;

  img {
    width: 33vw;
    height:500px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const JamTwo = () => {
  return (
    <Container>
      <Wrapper>
        <BoxContainer>
          <Boxes>
            <img src={jam_imageOne} alt="cover" />
          </Boxes>
          <Boxes>
            <img src = {jam_imageTwo} alt="cover" />
          </Boxes>
        </BoxContainer>
      </Wrapper>
    </Container>
  );
};

export default JamTwo;
