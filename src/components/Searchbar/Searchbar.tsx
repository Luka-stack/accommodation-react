import { useState, useContext, useEffect, useRef } from "react";
import { useHistory } from "react-router";

import ThemeContext from "../../context/themeContext";

export default function Searchbar() {
  const [term, setTerm] = useState("");

  const searchRef = useRef<HTMLInputElement>(null);

  const history = useHistory();

  const theme = useContext(ThemeContext);

  const search = () => {
    history.push(`/search/${term}`);
  };

  useEffect(() => {
    if (searchRef) {
      searchRef.current?.focus();
    }
  }, []);

  return (
    <div className="d-flex">
      <input
        ref={searchRef}
        value={term}
        onKeyDown={(e) => e.key === "Enter" && search()}
        onChange={(e) => setTerm(e.target.value)}
        className="form-control"
        type="text"
        placeholder="Search..."
      />
      <button className={`ml-2 btn btn-${theme.color}`} onClick={search}>
        Search
      </button>
    </div>
  );
}
