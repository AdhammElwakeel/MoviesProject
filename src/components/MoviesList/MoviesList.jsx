import { useState, useEffect } from 'react';
import './MoviesList.css'
import axios from 'axios';
const MoviesList = () => {
    const [movies , setMovies] = useState([])

    const fetchData = async()=>{
        const res =await axios.get('https://api.themoviedb.org/3/trending/movie/week', { headers: { Authorization: "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzlmMGQyMDk4NzYwNjdhZDNiYTk4YzE1ZTlmNzM4MSIsIm5iZiI6MTcyODk4Nzg0MS44NjY2MTksInN1YiI6IjY3MDdiNWE2MWQ5NmRjNmQ0NzZhMjY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GqI5U_9SDIvXC4G-bo9QBW-KbKcCh-8tSwLlrxpxFLY" } })
        setMovies(res.data.results) 
    }

    useEffect(()=>{
        fetchData();
    },[])

    const [searchValue , setSearchValue] = useState('')

    const searchForMovie = async () => {
        if (!searchValue) return;

        const searchResult = await axios.get(
            'https://api.themoviedb.org/3/search/movie?include_adult=false&query=' + searchValue,
            {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzlmMGQyMDk4NzYwNjdhZDNiYTk4YzE1ZTlmNzM4MSIsIm5iZiI6MTcyODk4Nzg0MS44NjY2MTksInN1YiI6IjY3MDdiNWE2MWQ5NmRjNmQ0NzZhMjY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GqI5U_9SDIvXC4G-bo9QBW-KbKcCh-8tSwLlrxpxFLY"
                }
            }
        );
        setMovies(searchResult.data.results);
    }

    return (  
        <>
            <div className="comingSoon">
                <h2>Trend this week</h2>
                <div className="searchContainer">
                    <input
                        type="text" placeholder='search for a movie, tv show, person...'
                        className='searchInput'
                        onChange={(event) => setSearchValue(event.target.value)}
                    />
                    <button className='searchButton' onClick={searchForMovie}>Search</button>    
                </div>
                <div className="comingSoonCards">
                    {movies.map((movie)=>{
                        return (
                            <div className="posterBody" style={{ backgroundImage: "url(https://image.tmdb.org/t/p/w220_and_h330_face" + movie.poster_path + ")" }}>
                                <div className="posterTitle">
                                    <h5>{movie.title}</h5>
                                    <p>{movie.release_date}</p>
                                    <p className="age">{movie.adult === true ? 'R' : '+16'}</p>
                                    <div className="movieLanguage">{movie.original_language}</div>
                                    <h6> Vote Average :{movie.vote_average}</h6>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
 
export default MoviesList;