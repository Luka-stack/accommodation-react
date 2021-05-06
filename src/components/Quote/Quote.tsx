import { useEffect, useLayoutEffect, useState } from "react";

const quotes = [
  "Not all those who wander are lost.",
  "The world is a book and those who do not travel read only one page.",
  "The journey of a thousand miles begins with a single step.",
  "Wherever you go becomes a part of you somehow.",
  "A good traveler has no fixed plans and is not intent on arriving.",
];

const styles: any = {
  position: "absolute",
  top: "20px",
  left: 0,
  right: 0,
  textAlign: "center",
  color: "#FFF",
  fontWeight: "bold",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  fontStyle: "italic",
};

export default function Quote() {
  const [quote, setQuote] = useState("Loading");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useLayoutEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [loading]);

  return <p style={styles}>{quote}</p>;
}
