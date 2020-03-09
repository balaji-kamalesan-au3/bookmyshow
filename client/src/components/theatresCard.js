import React, { useState, useEffect } from 'react';
import Theatre from './theatre';

const MovieTheatre = () => {

    // const [theatres, setTheatres] = useState([])

   
    // useEffect(() => {
    //     const setfun = async() => setTheatres(currentTheatres);
    //     setfun();
    // },[])


    return(

        <div>

            {/* {theatres.map(theatre => <Theatre theatre = {theatre} />  )} */}
            
            <Theatre />
        </div>

    )
}

export default MovieTheatre