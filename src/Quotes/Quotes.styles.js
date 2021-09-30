import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100vw;
  // background Image props
  background-image: url(${(props) => props.image});
  min-height: 100vh;
  background-size: cover;

  @media (max-width: 962px) {
    // backgorund for mobile
    background-image: url(${(props) => props.mobile});
  }

  @media (max-width: 768px) {
    // backgorund for mobile
    background-image: url(${(props) => props.mobile});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`

export const Quote = styled.div`
  position: relative;
  font-size: 3rem;
  max-width: 652px;
  padding: 1rem;
  padding-left: 150px;

  @media (max-width: 962px) {
    max-width: 562px;
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.9rem;
    max-width: 300px;
  }
`
export const Author = styled.div`
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`
export const Button = styled.button`
  background-color: #0c623a;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-family: 'Teko', 'sans-serif';
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  right: 30px;

  @media (max-width: 1026px) {
    //mobile
    left: 0;
    bottom: 0;
    width: 100%;
    right: 0;
  }
`

export const Spinner = styled.div`
  border: 5px solid grey;
  border-top: 5px solid #0c623a;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 0;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
