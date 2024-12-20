// Array to store movie objects
let movies = [];

// Function to render the movie list
function renderMovies() {
    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML = ''; // Clear existing list

    if (movies.length === 0) {
        moviesList.innerHTML = '<p>No movies added yet.</p>';
    } else {
        movies.forEach((movie, index) => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');

            movieItem.innerHTML = `
                <h3>${movie.name}</h3>
                <p><strong>Rating:</strong> ${movie.rating}/10</p>
                <p><strong>Description:</strong> ${movie.description}</p>
            `;
            moviesList.appendChild(movieItem);
        });
    }
}

// Function to handle form submission
document.getElementById('movie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const movieName = document.getElementById('movie-name').value;
    const movieRating = document.getElementById('movie-rating').value;
    const movieDescription = document.getElementById('movie-description').value;

    if (movieName && movieRating && movieDescription) {
        const newMovie = {
            name: movieName,
            rating: movieRating,
            description: movieDescription
        };

        movies.push(newMovie);

        // Clear form fields
        document.getElementById('movie-name').value = '';
        document.getElementById('movie-rating').value = '';
        document.getElementById('movie-description').value = '';

        // Re-render the movie list
        renderMovies();
    }
});

// Initial render when the page loads
renderMovies();
