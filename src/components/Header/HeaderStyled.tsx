import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  height: 150px;
  align-items: center;
  color: ${(props) => props.theme.mainDarkBlue};
  font-size: 2rem;
  font-weight: 800;
`;

export default HeaderStyled;
