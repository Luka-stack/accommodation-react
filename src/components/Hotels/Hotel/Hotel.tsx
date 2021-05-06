import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Hotel.module.css";
import hotelImg from "../../../assets/images/building.jpg";
import { Hotel as HotelType } from "../../../types";
import ThemeContext from "../../../context/themeContext";
import useAuth from "../../../hooks/useAuth";
import useStateStorage from "../../../hooks/useStateStorage";

interface HotelCardProps {
  hotel: HotelType;
}

export default function Hotel({ hotel }: HotelCardProps) {
  const theme = useContext(ThemeContext);
  const [auth] = useAuth();
  const [_, setHotel] = useStateStorage("last-hotel", null);

  const showMore = (event: React.MouseEvent) => {
    // event.preventDefault();
    setHotel(hotel);
  };

  return (
    <div className={`${styles.hotelContainer} card`}>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img
              src={hotelImg}
              alt=""
              className="img-fluid img-thumbnail"
              style={{ height: "200px" }}
            />
          </div>
          <div className="col-8 text-left">
            <div className="row">
              <div className="col">
                <p className={styles.title}>{hotel.name}</p>
                <p className="badge badge-light">{hotel.city}</p>
              </div>
              <div className="col text-right">
                <h5>Rating: {hotel.rating}</h5>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className={styles.description}>{hotel.description}</p>
            {!auth || <p className="mt-4">Availability: 4 rooms</p>}
            <Link
              to={`/hotels/${hotel.id}`}
              className={`btn btn-${theme.color} float-right mt-2 px-5`}
              onClick={showMore}
            >
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// const propTypes = {
//   name: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// }

//Hotel.propTypes = propTypes;
