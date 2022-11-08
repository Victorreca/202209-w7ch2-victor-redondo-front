import { Robot } from "../../data/types";
import useApi from "../../hooks/useApi";
import Button from "../Button/Button";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({
  robot: {
    image,
    name,
    _id,
    stats: { creationDate, endurance, speed },
  },
}: RobotCardProps): JSX.Element => {
  const { deleteRobot } = useApi();
  return (
    <RobotCardStyled className="robot-card">
      <article>
        <img className="robot-card__picture" src={image} alt={name} />
        <h3 className="robot-card__title">{name}</h3>
        <ul className="robot-card__stats">
          <li>Speed: {speed}</li>
          <li>Endurance: {endurance}</li>
          <li>Creation date: {creationDate}</li>
        </ul>
        <Button text="DELETE" action={() => deleteRobot(_id)} />
      </article>
    </RobotCardStyled>
  );
};

export default RobotCard;
