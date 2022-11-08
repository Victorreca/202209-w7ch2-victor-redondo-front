import styled from "styled-components";

const FormStyled = styled.div`
  @media (min-width: 500px) {
    padding: 0 10% 5% 10%;
  }

  button {
    background-color: ${(props) => props.theme.mainDarkBlue};
    border: 0;
    border-radius: 5px;
    font-size: 1.3rem;
    color: ${(props) => props.theme.mainLightBlue};
    padding: 0.75rem 1rem;
    margin-top: 20px;
    margin-bottom: 80px;
  }

  .create-robot {
    &__form {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    &__input {
      margin-bottom: 10px;
      border: 2px solid ${(props) => props.theme.mainBlue};
      border-radius: 5px;
      padding: 0.75rem 1rem;
    }

    &__label {
      font-size: 24px;
      color: ${(props) => props.theme.mainDarkBlue};
      font-weight: 500;
    }
    &__title {
      text-align: center;
      margin-bottom: 40px;
      font-size: 32px;
      color: ${(props) => props.theme.mainDarkBlue};
      border-bottom: 3px solid ${(props) => props.theme.mainDarkBlue};
      margin-top: 50px;
    }
  }
`;

export default FormStyled;
