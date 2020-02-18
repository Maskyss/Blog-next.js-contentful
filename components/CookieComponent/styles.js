import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 33;

  height: 7rem;
  padding: 0 3rem;
  background: #0e0e0e;

  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 530px) {
    height: 9rem;
    padding: 0 1rem;
  }
`;
const Paragraph = styled.div`
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 171.7%;

  color: #ffffff;
  padding-right: 1rem;
  white-space: pre-line;

  @media (max-width: 530px) {
    font-size: 1.2rem;
    padding-right: 0.5rem;
  }
`;
const Button = styled.div`
  width: 17rem;
  height: 5.5rem;

  background: #1b85e6;
  color: #ffffff;

  font-weight: 600;
  font-size: 1.4rem;
  line-height: 171.7%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.5s;

  :hover {
    background: #115fa6;
  }
  @media (max-width: 530px) {
    font-size: 1.4rem;
  }
`;
export { Container, Paragraph, Button };
