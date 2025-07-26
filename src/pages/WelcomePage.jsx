import MainOpeningPlay from "../components/MainOpeningPlay";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";

const WelcomePage = () => {
  useGetNowPlayingMovies()
  return (
    <div>
      <h1>Welcome Page section</h1>
      <MainOpeningPlay/>
    </div>
  );
};

export default WelcomePage;
