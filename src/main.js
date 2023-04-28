const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',   
    },
    params: {
        api_key: API_KEY,
    }
});

async function getTredingMoviesPreview () {
  const { data } = await api('/trending/movie/day');
  return data; 
};

async function getCategoriesPreview () {
  const { data } = await api('/genre/movie/list')
  return data;
}

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

async function showCategoriesPreview (categories) {
  const categoriesResult = await getCategoriesPreview(categories);
  const categoriesList = categoriesResult.genres;

  categoriesList.forEach((category) => {    
    const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');

    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', `id${category.id}`);
    const categoryTitleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    previewCategoriesContainer.appendChild(categoryContainer);
  });
}

showTrendingMoviesPreview();
showCategoriesPreview();