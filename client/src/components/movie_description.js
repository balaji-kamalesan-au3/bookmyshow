import React from 'react';
import Header from './header/header';
import Movies from './movies';

class MovieDescription extends React.Component{

    render(){
        return(

            <div>
                <Header />
                <Movies />
            </div>
           
        )
    }

}

export default MovieDescription
