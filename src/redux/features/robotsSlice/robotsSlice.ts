import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robot } from "../../../data/types";

export interface RobotsState {
  list: Robot[];
}

const robotsInitialState: RobotsState = {
  list: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState: robotsInitialState,
  reducers: {
    loadRobots: (
      currentRobotsState,
      action: PayloadAction<Robot[]>
    ): RobotsState => ({
      ...currentRobotsState,
      list: [...action.payload],
    }),

    deleteRobot: (
      currentRobotsState,
      action: PayloadAction<string>
    ): RobotsState => ({
      ...currentRobotsState,
      list: currentRobotsState.list.filter(
        (robot) => robot._id !== action.payload
      ),
    }),

    addRobot: (
      currentRobotsState,
      action: PayloadAction<Robot>
    ): RobotsState => ({
      ...currentRobotsState,
      list: [...currentRobotsState.list, action.payload],
    }),
  },
});

export const robotsReducer = robotsSlice.reducer;

export const {
  loadRobots: loadRobotsActionCreator,
  deleteRobot: deleteRobotActionCreator,
  addRobot: addRobotActionCreator,
} = robotsSlice.actions;
