import styled from "styled-components";
import video from '../assets/20728412.mp4'

const Container = styled.div`
  width: 100%;
  height: 75vh;
  margin: 20px 0;
  display: grid;
  place-items: center;
`;
const Wrapper = styled.div`
  width: 78%;
  height: 100%;
  display: flex;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: #000000;

`;
const JamOne = () => {
  return (
    <Container>
      <Wrapper>
      <video src={video} width="800" height="300"  autoplay="true" className='videoJam' />
      </Wrapper>
    </Container>
  );
};

export default JamOne;
