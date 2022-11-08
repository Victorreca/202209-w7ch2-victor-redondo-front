import mockRobotList from "../../../mocks/mockRobotsList";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
  robotsReducer,
  addRobotActionCreator,
} from "./robotsSlice";

describe("Given the function robotsReducer", () => {
  describe("When it receives an empty currentState, a loadRobots action and a list of robots", () => {
    test("Then it should return a new state with the received list of robots", () => {
      const currentRobotsState = {
        list: [],
      };
      const newRobotsList = mockRobotList;
      const loadRobotsAction = loadRobotsActionCreator(newRobotsList);
      const expectedRoborsState = {
        list: newRobotsList,
      };
      const newRobotsState = robotsReducer(
        currentRobotsState,
        loadRobotsAction
      );

      expect(newRobotsState).toEqual(expectedRoborsState);
    });
  });

  describe("When it receives an id '636794e8092d458f4f866fdb'", () => {
    test("Then it should return a new list of robots without the robot with the received id", () => {
      const idToDelete = "636794e8092d458f4f866fdb";
      const currentRobotsState = {
        list: mockRobotList,
      };

      const expectedRobotState = {
        list: mockRobotList.filter((robot) => robot._id !== idToDelete),
      };

      const newRobotsState = robotsReducer(
        currentRobotsState,
        deleteRobotActionCreator(idToDelete)
      );

      expect(newRobotsState).toStrictEqual(expectedRobotState);
    });
  });

  describe("When", () => {
    test("Then", () => {
      const newRobot = {
        stats: {
          speed: 2,
          endurance: 8,
          creationDate: "06/11/2022",
        },
        _id: "6367dfd645959268bc1922f2",
        name: "Flexo",
        image:
          "https://static.wikia.nocookie.net/esfuturama/images/2/27/Futurama-206-flexo.jpg/revision/latest?cb=20090108183743",
        __v: 0,
      };

      const currentRobotsState = {
        list: mockRobotList,
      };

      const expectedRobotState = {
        list: [...currentRobotsState.list.concat(newRobot)],
      };

      const newRobotsState = robotsReducer(
        currentRobotsState,
        addRobotActionCreator(newRobot)
      );

      expect(newRobotsState).toStrictEqual(expectedRobotState);
    });
  });
});
