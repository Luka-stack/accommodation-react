import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Hotel } from "../../types";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

export default function HotelPage() {
  const [loading, setLoading] = useState(true);
  const [hotel, setHotel] = useState<Hotel>({
    id: 1,
    name: "Honey Moon",
    city: "Athens",
    rating: 9.5,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste blanditiis eos incidunt molestiae? Ex alias similique perferendis nihil incidunt voluptatum ea necessitatibus voluptas, sed voluptate quam vitae. Sequi alias fugit cumque maxime? Quia quasi eveniet dolorum consectetur, laudantium inventore!",
    image: "",
  });

  const setTitle = useWebsiteTitle();

  const { id } = useParams<{ id: string }>();
  const fetchHotel = (id: string) => { };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTitle(hotel!.name);
    }, 500);
  }, []);

  return loading ? (
    <LoadingIcon />
  ) : (
    <>
      <h1>The best hotel page</h1>
    </>
  );
}
