import { Movie } from "@/types";
import StarRating from "../starRating";
import './index.scss';

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
                <p className="movie-title">
                    {props.movie.title}
                </p>

                <StarRating rating={props.movie.vote_average} />

                <div className="hidden-content">
                    {props.movie.overview &&
                        <p className="description">
                            {props.movie.overview.length > 100
                                ? `${props.movie.overview.substring(0, 100)}...`
                                : props.movie.overview
                            }
                        </p>
                    }
                </div>
                <button className="btn-default">Ver mais</button>
            </div>

        </li>
    );
}