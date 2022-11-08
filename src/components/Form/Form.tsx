import { useState } from "react";
import { Robot } from "../../data/types";
import useApi from "../../hooks/useApi";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const { createRobot } = useApi();

  const inputField = {
    name: "",
    image: "",
    creationDate: "",
    speed: "",
    endurance: "",
  };

  const [input, setInput] = useState(inputField);

  const handleInputObject = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newRobot: Partial<Robot> = {
      name: input.name,
      image: input.image,
      stats: {
        creationDate: input.creationDate,
        speed: Number(input.speed),
        endurance: Number(input.endurance),
      },
    };
    return createRobot(newRobot as Robot);
  };

  return (
    <FormStyled className="create-robot__container">
      <h2 className="create-robot__title">Create a new robot</h2>
      <form className="create-robot__form" onSubmit={handleInputObject}>
        <label htmlFor="name" className="create-robot__label">
          Name
        </label>
        <input
          className="create-robot__input"
          data-testid="name"
          id="name"
          autoComplete="off"
          type="text"
          value={input.name}
          required
          onChange={(event) => setInput({ ...input, name: event.target.value })}
        ></input>
        <label htmlFor="image" className="create-robot__label">
          Image
        </label>
        <input
          className="create-robot__input"
          data-testid="image"
          id="image"
          autoComplete="off"
          type="text"
          value={input.image}
          required
          onChange={(event) =>
            setInput({ ...input, image: event.target.value })
          }
        ></input>
        <label htmlFor="speed" className="create-robot__label">
          Speed
        </label>
        <input
          className="create-robot__input"
          data-testid="speed"
          id="speed"
          autoComplete="off"
          type="text"
          value={input.speed}
          required
          onChange={(event) =>
            setInput({ ...input, speed: event.target.value })
          }
        ></input>
        <label htmlFor="endurance" className="create-robot__label">
          Endurance
        </label>
        <input
          className="create-robot__input"
          data-testid="endurance"
          id="endurance"
          autoComplete="off"
          type="text"
          value={input.endurance}
          required
          onChange={(event) =>
            setInput({ ...input, endurance: event.target.value })
          }
        ></input>
        <label htmlFor="creationDate" className="create-robot__label">
          Creation Date
        </label>
        <input
          className="create-robot__input"
          data-testid="creationDate"
          id="endurance"
          autoComplete="off"
          type="text"
          value={input.creationDate}
          required
          onChange={(event) =>
            setInput({ ...input, creationDate: event.target.value })
          }
        ></input>
        <Button action={() => {}} text="Create" />
      </form>
    </FormStyled>
  );
};

export default Form;
