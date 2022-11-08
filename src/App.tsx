import { useEffect } from "react";
import AppStyled from "./AppStyled";
import Form from "./components/Form/Form";

import Header from "./components/Header/Header";
import RobotsList from "./components/RobotsList/RobotsList";
import useApi from "./hooks/useApi";
import { useAppDispatch } from "./redux/hooks";

const App = () => {
  const { loadAllRobots } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAllRobots);
  }, [loadAllRobots, dispatch]);

  return (
    <AppStyled>
      <Header />
      <RobotsList />
      <Form />
    </AppStyled>
  );
};

export default App;
