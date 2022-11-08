import { rest } from "msw";
import mockRobotsResponse from "./mockRobotsResponse";
import mockRobot from "./mockRobot";

const apiUrl = process.env.REACT_APP_API_URL_LOCAL;
const tokken = process.env.TOKKEN_AUTH;

const handlers = [
  rest.get(`${apiUrl}`, async (request, response, context) => {
    return response(context.status(200), context.json(mockRobotsResponse));
  }),

  rest.delete(`${apiUrl}/${mockRobot._id}`, (request, response, context) => {
    const robotTokken = request.url.searchParams.get("tokken");

    if (robotTokken !== tokken) {
      return response(
        context.status(498),
        context.json({
          message: "Incorrect tokken",
        })
      );
    }

    return response(context.status(200));
  }),
];

export default handlers;
