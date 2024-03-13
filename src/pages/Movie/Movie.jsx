import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import MovieDesc from "../../components/MovieDesc/MovieDesc"

const Movie = () => { 
    const { movieID } = useParams();
    return (<>
        <BackButton />
        <MovieDesc id={movieID} />
    </>);
};

export default Movie;