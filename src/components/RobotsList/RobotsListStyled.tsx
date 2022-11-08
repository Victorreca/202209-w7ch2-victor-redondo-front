import styled from "styled-components";

const RobotsListStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  .robots-list__title {
    padding-bottom: 10px;
    color: ${(props) => props.theme.mainDarkBlue};
    font-size: 2rem;
    border-bottom: 3px solid ${(props) => props.theme.mainDarkBlue};
    margin-bottom: 2rem;
  }

  .robots-list__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 55px;
    gap: 2rem;
  }
`;

export default RobotsListStyled;
