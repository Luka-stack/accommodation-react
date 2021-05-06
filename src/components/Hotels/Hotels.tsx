import React from 'react';

import Hotel from "./Hotel/Hotel";
import styles from "./Hotels.module.css";
import { Hotel as HotelType } from "../../types";

interface HotelsProps {
  hotels: Array<HotelType>
}

function Hotels({ hotels }: HotelsProps) {

  const count = hotels.length;

  return (
    <div className={`${styles.hotelsContainer}`}>
      <h2 className={`${styles.title}`}>Offers ({count}):</h2>
      {hotels.map(hotel => <Hotel key={hotel.name} hotel={hotel} /> )}
    </div>
  );
}

const areEqual = (prevProps: HotelsProps, nextProps: HotelsProps) => {
  return prevProps.hotels === nextProps.hotels;
}

export default React.memo(Hotels, areEqual);