import { Movie } from "@/types";
import StarRating from "../starRating";

export interface Props {
    movie: Movie
}

export default function MovieCard(props: Props) {

    const urlImg = 'https://image.tmdb.org/t/p/original/'

    return (
        <li className='movie-card'>
            <div className="movie-poster">
                <img src={`${urlImg}${props.movie.poster_path}`} alt={props.movie.title} />
            </div>

            <div className="movie-infos">
                <p>
                    {props.movie.title}
                </p>
                
                <StarRating rating={props.movie.vote_avarage} />

                <div className="hidden-content">
                    <p className="description">
                        {props.movie.overview}
                    </p>
                </div>
            </div>

        </li>
    );
}