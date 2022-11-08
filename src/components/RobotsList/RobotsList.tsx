import { useAppSelector } from "../../redux/hooks";

import RobotCard from "../RobotCard/RobotCard";
import RobotsListStyled from "./RobotsListStyled";

const RobotsList = (): JSX.Element => {
  const robots = useAppSelector((state) => state.robots.list);

  return (
    <>
      <RobotsListStyled className="robots-list">
        <h2 className="robots-list__title">The ultimate robots collection</h2>
        <ul className="robots-list__list">
          {robots.map((robot, index) => (
            <RobotCard robot={robot} key={index} />
          ))}
        </ul>
      </RobotsListStyled>
    </>
  );
};

export default RobotsList;
