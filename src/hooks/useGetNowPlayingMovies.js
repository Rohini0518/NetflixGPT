import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { MOVIEAPI_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useGetNowPlayingMovies=()=>{
      const dispatch = useDispatch ();
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      MOVIEAPI_OPTIONS
    );
    const data = await response.json();
    console.log(data.results);
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
}

export default useGetNowPlayingMovies;