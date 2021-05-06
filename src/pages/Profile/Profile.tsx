import { Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";

import ProfileDetails from "./ProfileDetails/ProfileDetails";
import MyHotels from "./MyHotels/MyHotels";

export default function Profile() {
  const { path, url } = useRouteMatch();

  return (
    <div className="card">
      <div className="card-header">My Profile</div>
      <div className="card-body">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink exact to={`${url}`} className="nav-link">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`${url}/hotels`} className="nav-link">
              Hotels
            </NavLink>
          </li>
        </ul>
        <div className="pt-4">
          <Switch>
            <Route path={`${path}/hotels`} component={MyHotels} />
            <Route path={`${path}`} component={ProfileDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
