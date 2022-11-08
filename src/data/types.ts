export interface Robot {
  name: string;
  image: string;
  _id: string;
  stats: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
}

export interface ApiRobot {
  robots: Robot[];
}
