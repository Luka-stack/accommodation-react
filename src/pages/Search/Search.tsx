import { useParams } from "react-router";

export default function Search() {
  const { term } = useParams<{ term: string }>();

  const searchHandler = (term: string) => {};

  return (
    <div>
      <h2>Search Results</h2>
    </div>
  );
}
