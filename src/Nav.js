import React from 'react'
import "./Nav.css"
import requests from './requests'
function Nav({setselectedOption}) {
    return (
        <div  className="text-white md:flex md:justify-around    overflow-x-scroll flex Nav"  >
              <div onClick={()=> setselectedOption(requests.fetchTopRated)} className="mx-4 opacity-50 hover:opacity-100 cursor-pointer " >TopRated</div>
              <div onClick={()=> setselectedOption(requests.fetchActionMovies)} className="mx-4 opacity-50 hover:opacity-100 cursor-pointer">Action</div>
              <div onClick={()=> setselectedOption(requests.fetchComedyMovies)} className="mx-4 opacity-50 hover:opacity-100 cursor-pointer">Comedy</div>
              <div onClick={()=> setselectedOption(requests.fetchHorrorMovies)} className="mx-4 opacity-50 hover:opacity-100 cursor-pointer">Horror</div>
              <div onClick={()=> setselectedOption(requests.fetchDocumentaries)} className="mx-4 opacity-50 hover:opacity-100 cursor-pointer">Documentaries</div>
              <div onClick={()=> setselectedOption(requests.fetchTrending)} className="mx-4 opacity-50 hover:opacity-100 cursor-pointer">Trending</div>
              <div onClick={()=> setselectedOption(requests.fetchRomanceMovies)} className="mx-4  opacity-50 hover:opacity-100 cursor-pointer">Romance</div>
              <div onClick={()=> setselectedOption(requests.fetchScifi)} className="mx-4  opacity-50 hover:opacity-100 cursor-pointer">Sci-Fi</div>
              <div onClick={()=> setselectedOption(requests.fetchAnimations)} className="mx-4  opacity-50 hover:opacity-100 cursor-pointer">Animated</div>   
        </div>

    )
}

export default Nav
