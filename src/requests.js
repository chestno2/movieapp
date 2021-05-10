 const  API_KEY = "485a15be2383ebf758672da26bfeda4d"

const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMysteries : `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchScifi:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchAnimations:`/discover/movie?api_key=${API_KEY}&with_genres=16`
}

export default requests