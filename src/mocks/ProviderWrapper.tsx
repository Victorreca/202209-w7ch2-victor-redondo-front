import { Provider } from "react-redux";
import { store } from "../redux/store";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const ProvoderWrapper = ({ children }: ProviderWrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProvoderWrapper;
