import axios from './axios'
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'

function Result({selectedOption}) {
    // console.log(requests.fetchTopRated);
    
    const [Movie, setMovie] = useState([])
        useEffect(() => {
         async function fetchData()
           {
               const request = await axios.get(selectedOption);
              console.log(request.data.results);
                 setMovie(request.data.results)
               return request
           }
           fetchData();
        }, [selectedOption])
    return (
        <div  className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-10 ">
            
           {Movie.map(movies=>(
                 <VideoCard movies = {movies} />
           ))}
          
    


        
           {/* grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 mt-4  */}

        </div>
    )
}

export default Result
