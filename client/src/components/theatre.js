import React from 'react'

const Theatre = (props) => {
    let currentTheatres = [
        {  
            name : "DNC",
            shows : [ 10, 2, 5, 8],
            availability : [100, 50, 30, 40]
        },
        {  
            name : "DNC",
            shows : [ 10, 2, 5, 8],
            availability : [100, 50, 30, 40]
        }
        
    ]
    return(
        <div className="card" style="width: 18rem;">
        <div className="card-body">
        <h5 className="card-title">{currentTheatres.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Shows : {currentTheatres.shows} </h6>
          <h6 className="card-subtitle mb-2 text-muted">Available Seats : {currentTheatres.availability} </h6>
          <button>Book Now</button>
        </div>
      </div>
        
    )

} 

export default Theatre