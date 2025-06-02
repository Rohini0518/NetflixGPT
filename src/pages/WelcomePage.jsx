import { useEffect } from "react";
import { MOVIEAPI_OPTIONS } from "../utils/constants";

const WelcomePage = () => {
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      MOVIEAPI_OPTIONS
    );
    const data = await response.json();
    console.log(data.results);
  };
  useEffect(() => {fetchMovies()}, []);

  return (
    <div>
      <h1>Welcome Page section</h1>
    </div>
  );
};

export default WelcomePage;
