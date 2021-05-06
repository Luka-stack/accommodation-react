import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Hotel } from "../../../types";

interface BestHotelProps {
  getBestHotel: Function;
}

export default function BestHotel({ getBestHotel }: BestHotelProps) {
  const endTime = moment().add(34, "minutes");
  let interval: any = null;

  const [time, setTime] = useState(moment().to(endTime));

  const hotel: Hotel = getBestHotel({ minHotels: 2 });

  useEffect(() => {
    interval = setInterval(() => {
      setTime(moment().to(endTime));
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="card alert-success text-dark">
      <div className="card-header">Best Offer!</div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{hotel.name}</h5>
          <p>Rating: {hotel.rating}</p>
        </div>
        <p>Offer ends {time}</p>
        <Link to={`/hotels/${hotel.id}`} className="btn btn-sm btn-light">
          More
        </Link>
      </div>
    </div>
  );
}
