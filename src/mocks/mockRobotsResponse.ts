import { Robot } from "../data/types";

const mockRobotsResponse: Robot[] = [
  {
    stats: {
      speed: 5,
      endurance: 5,
      creationDate: "04/11/2022",
    },
    name: "Terminator",
    image: "https://media.vandalsports.com/i/640x360/5-2021/202151712422_1.jpg",
    _id: "636794e8092d458f4f866fdb",
  },
  {
    stats: {
      speed: 8,
      endurance: 10,
      creationDate: "05/11/2022",
    },
    name: "Bender Rodriguez",
    image:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2019/11/futurama_0.jpg?itok=edS94Qsp",
    _id: "63663c9da225c886cb97bf96",
  },
];

export default mockRobotsResponse;
