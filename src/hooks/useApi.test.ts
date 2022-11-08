import { renderHook } from "@testing-library/react";
import mockRobot from "../mocks/mockRobot";
import ProviderWrapper from "../mocks/ProviderWrapper";
import { deleteRobotActionCreator } from "../redux/features/robotsSlice/robotsSlice";
import { store } from "../redux/store";
import useApi from "./useApi";

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given a useApi custom hook", () => {
  describe("When its method loadAllRobots is invoked", () => {
    test("Then it should invoke dispatch with loadRobotsActionCreator and a list of 2 robots", async () => {
      const {
        result: {
          current: { loadAllRobots },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });

      await loadAllRobots();

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });

  describe("When its method deleteRobot is invoked", () => {
    test("Then it should remove", async () => {
      const {
        result: {
          current: { deleteRobot },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });

      await deleteRobot(mockRobot._id);

      expect(dispatchSpy).toHaveBeenCalledWith(
        deleteRobotActionCreator(mockRobot._id)
      );
    });
  });
});
