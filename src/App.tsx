import { useReducer, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import ThemeContext from "./context/themeContext";
import AuthContext from "./context/authContext";
import {
  reducer,
  initialState,
  ReducerContext,
} from "./context/reducerContext";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Searchbar from "./components/Searchbar/Searchbar";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import Quote from "./components/Quote/Quote";
import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import Search from "./pages/Search/Search";
import PageNotFound from "./pages/404/404";
import Login from "./pages/Auth/Login/Login";
import ErrorBoundry from "./hoc/ErrorBoundry";

const Profile = lazy(() => import("./pages/Profile/Profile"));

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const header = (
    <Header>
      <Quote />
      <ThemeButton />
      <Searchbar />
    </Header>
  );

  const content = (
    <div>
      <ErrorBoundry>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <AuthenticatedRoute path="/profile" component={Profile} />
          <Route path="/hotels/:id" component={Hotel} />
          <Route path="/search/:term?" component={Search} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
      </ErrorBoundry>
    </div>
  );

  const menu = <Menu />;
  const footer = <Footer />;

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        login: () => dispatch({ type: "login" }),
        logout: () => dispatch({ type: "logout" }),
      }}
    >
      <ThemeContext.Provider
        value={{
          color: state.theme,
          changeTheme: () => dispatch({ type: "change-theme" }),
        }}
      >
        <ReducerContext.Provider
          value={{
            state: state,
            dispatch: dispatch,
          }}
        >
          
            <Layout
              header={header}
              menu={menu}
              content={content}
              footer={footer}
            />

        </ReducerContext.Provider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
