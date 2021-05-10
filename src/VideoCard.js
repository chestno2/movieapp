
import React from 'react'
import "./video.css"
function VideoCard({movies}) {
    const imgURL = `https://image.tmdb.org/t/p/w500/` 
    return (
        <div className=" ">
           
           
           <div className="mt-4 ml-1 text-gray-200 mx-2  " >
                <img 
                key = {movies.id}
                 className="rounded-lg  w-96 lg:h-full  h-96   "  src={`${imgURL}${movies.poster_path}`}
                alt="img"
                   />
                 
                   <p className="my-3 font-bold text-lg" >{movies.original_title}</p>
                   <p className="truncate mt-2 " >  {movies.overview}</p>
                   <p className="">{movies.release_date}</p>
            </div>
            
        
        </div>
    )
}

export default VideoCard
