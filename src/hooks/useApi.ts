import { useCallback } from "react";
import { ApiRobot, Robot } from "../data/types";
import {
  addRobotActionCreator,
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../redux/features/robotsSlice/robotsSlice";
import { useAppDispatch } from "../redux/hooks";

const apiUrl = process.env.REACT_APP_API_URL_LOCAL;

const useApi = () => {
  const dispatch = useAppDispatch();

  const loadAllRobots = useCallback(async () => {
    const response = await fetch(`${apiUrl}/robots`);
    const apiResponse: ApiRobot = await response.json();
    dispatch(loadRobotsActionCreator(apiResponse.robots));
  }, [dispatch]);

  const deleteRobot = useCallback(
    async (idRobot: string) => {
      await fetch(`${apiUrl}/${idRobot}?token=benderElQueOfende`, {
        method: "DELETE",
      });

      dispatch(deleteRobotActionCreator(idRobot));
    },
    [dispatch]
  );

  const createRobot = useCallback(
    async (robot: Robot) => {
      const newRobot = await fetch(`${apiUrl}create?token=benderElQueOfende`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(robot),
      });
      const result = await newRobot.json();

      dispatch(addRobotActionCreator(result.newRobot));
    },
    [dispatch]
  );

  return {
    loadAllRobots,
    deleteRobot,
    createRobot,
  };
};

export default useApi;
