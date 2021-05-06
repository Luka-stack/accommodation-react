import { Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import { useReduceContext } from "../../context/reducerContext";

// import ReducerContext from "../../context/reducerContext";

export default function AuthenticatedRoute({
  path,
  component,
}: {
  path: string;
  component: React.ComponentType<any>;
}) {
  const context = useReduceContext();

  return context.state.isAuthenticated ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to="/login" />
  );
}
