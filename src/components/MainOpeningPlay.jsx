import { useSelector } from "react-redux"

export default function MainOpeningPlay(){
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies) return;
    const {title,overview}=movies[0]
    console.log(title,overview);
    
    return(
        <div>
            <div>

            </div>
        </div>
    )
}