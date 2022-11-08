import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.mainDarkBlue};
  border: 0;
  border-radius: 5px;
  font-size: 1.3rem;
  color: ${(props) => props.theme.mainLightBlue};
  padding: 0.5rem 1rem;
`;

export default ButtonStyled;
