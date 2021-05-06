import { Link } from "react-router-dom";

import useStateStorage from "../../../hooks/useStateStorage";

export default function LastHotel() {
  const [hotel, setHotel] = useStateStorage("last-hotel", null);

  if (!hotel) {
    return null;
  }

  return (
    <div className="card bg-light mb-4">
      <div className="card-header">
        Recently you watched <b>{hotel.title}</b> Still interested?
      </div>
      <div className="card-body">
        <div className="d-flex mb-2 justify-content-between">
          <h5 className="card-title mb-1">{hotel.name}</h5>
          <span className="badge badge-light text-size" style={{ fontSize: "1rem"}}>{hotel.city}</span>
        </div>
        <div
          style={{ width: "200px" }}
          className="d-flex justify-content-start"
        >
          <Link to={`/hotels/${hotel.id}`} className="btn btn-sm btn-dark mr-2">
            Yes, show me
          </Link>
          <button className="btn btn-sm btn-dark" onClick={() => setHotel(null)}>
            No, hide
          </button>
        </div>
      </div>
    </div>
  );
}
