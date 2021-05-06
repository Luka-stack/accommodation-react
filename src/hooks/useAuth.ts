import { useContext } from "react";

import AuthContext from "../context/authContext";

export default function useAuth(): [boolean, Function] {
    const authContext = useContext(AuthContext);

    const auth = authContext.isAuthenticated;
    const setAuth = (value: boolean) => {
        if (value) {
            authContext.login();
        } else {
            authContext.logout();
        }
    }

    return [auth, setAuth];
}
