import styled from "styled-components";

const RobotCardStyled = styled.li`
  background-color: ${(props) => props.theme.mainLightBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 20px;
  border: 10px solid ${(props) => props.theme.mainBlue};

  .robot-card {
    &__title {
      color: ${(props) => props.theme.mainDarkBlue};
      font-size: 1.5rem;
      padding: 0.5rem 0;
    }

    &__picture {
      border-radius: 5px;
      height: 200px;
      width: 300px;
      object-fit: cover;
      object-position: center;
    }

    &__stats {
      color: ${(props) => props.theme.mainDarkBlue};
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding-bottom: 10px;
    }
  }
`;

export default RobotCardStyled;
