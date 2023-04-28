async function getTredingMoviesPreview () {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  );
  return response.json(); 
};

async function showTrendingMoviesPreview (trendingMovies) {
    const moviesResult = await getTredingMoviesPreview(trendingMovies);
    const movies = moviesResult.results;

    movies.forEach((movie) => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
    
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');
    
        const movieIMG = document.createElement('img');
        movieIMG.classList.add('movie-img');
        movieIMG.setAttribute('alt', movie.title);
        movieIMG.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);
    
        movieContainer.appendChild(movieIMG);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
      }); 
};

showTrendingMoviesPreview();