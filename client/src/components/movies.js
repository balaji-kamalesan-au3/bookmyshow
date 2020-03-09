import React, { useEffect,useState } from 'react'
import MovieCard from './movieCard';

const Movies = () => {

     const [movies,setMovies] = useState([]);


    useEffect(() => {
        fetch('/movies')
        .then(res => res.json())
        .then((data)=>{
            console.log(data);
            setMovies(data)
        })
        .catch(err => console.log(err))
        
    },[])

    if(movies.length === 0){
        return (
            <div>Loading..</div>
        )
    }
    else
    return(
        <div className="container">
            <div className="row">
            {movies.map(
                (movie) => {
                    return <MovieCard key={movie.id} movie={movie}/>
                }
            )}
            </div>
            
        </div>
    
    )
}

export default Movies