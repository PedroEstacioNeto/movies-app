'use client'
import { useEffect, useState } from 'react';
import './index.scss'
import axios from 'axios';
import MovieCard from '../movieCard';
import { Movie } from '@/types';


export default function MovieList() {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies();
    });

    const getMovies = () => {
        axios({
            method:'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '2f65c9dcefbd1362d5b634ed2239408f',
                language: 'pt-BR'
            }
        }).then(response => {
            //console.log(response)
            setMovies(response.data.results)
            
        })
    }
    
    return(
        <ul className="movie-list">
            {movies.map((movie) => 
                <MovieCard key={movie.id} movie={movie} />
            )}
            
        </ul>
    );
}