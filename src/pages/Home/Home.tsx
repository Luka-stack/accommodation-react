import { useCallback, useState, useEffect } from "react";

import { Hotel } from "../../types";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import LastHotel from "../../components/Hotels/LastHotel/LastHotel";
import BestHotel from "../../components/Hotels/BestHotel/BestHotel";
import Hotels from "../../components/Hotels/Hotels";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";

const baseHotels: Array<Hotel> = [
  {
    id: 1,
    name: "Honey Moon",
    city: "Athens",
    rating: 9.5,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste blanditiis eos incidunt molestiae? Ex alias similique perferendis nihil incidunt voluptatum ea necessitatibus voluptas, sed voluptate quam vitae. Sequi alias fugit cumque maxime? Quia quasi eveniet dolorum consectetur, laudantium inventore!",
    image: "",
  },
  {
    id: 2,
    name: "Place like home",
    city: "Madrid",
    rating: 9.0,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste blanditiis eos incidunt molestiae? Ex alias similique perferendis nihil incidunt voluptatum ea necessitatibus voluptas, sed voluptate quam vitae. Sequi alias fugit cumque maxime? Quia quasi eveniet dolorum consectetur, laudantium inventore!",
    image: "",
  },
  {
    id: 3,
    name: "Parent's House",
    city: "Osaka",
    rating: 8.5,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste blanditiis eos incidunt molestiae? Ex alias similique perferendis nihil incidunt voluptatum ea necessitatibus voluptas, sed voluptate quam vitae. Sequi alias fugit cumque maxime? Quia quasi eveniet dolorum consectetur, laudantium inventore!",
    image: "",
  },
];

export default function Home() {
  useWebsiteTitle("Home");
  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState<Array<Hotel>>([]);

  const getBestHotel = useCallback(
    (options) => {
      if (hotels.length < options.minHotels) {
        return null;
      } else {
        return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
      }
    },
    [hotels]
  );

  useEffect(() => {
    setTimeout(() => {
      setHotels(baseHotels);
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <LoadingIcon />
  ) : (
    <>
      <LastHotel />
      {hotels.length > 2 && <BestHotel getBestHotel={getBestHotel} />}
      <Hotels hotels={hotels} />
    </>
  );
}
