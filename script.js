// Toggle description visibility
document.querySelectorAll('.movie button').forEach(button => {
    button.addEventListener('click', () => {
      const description = button.parentElement.querySelector('.description');
      if (description.style.display === 'none') {
        description.style.display = 'block';
        button.textContent = 'Hide Description';
      } else {
        description.style.display = 'none';
        button.textContent = 'Show Description';
      }
    });
  });
  
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  });
  
  // Search Functionality
  const searchInput = document.getElementById('searchInput');
  const movieCards = document.querySelectorAll('.movie');
  
  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    movieCards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      card.style.display = title.includes(searchText) ? 'block' : 'none';
    });
  });
  
  // Dynamic Content Loading (optional)
  const movieData = [
    { title: 'The Shawshank Redemption', rating: '⭐⭐⭐⭐⭐', description: 'A story of hope and resilience inside a maximum-security prison.' },
    { title: 'Inception', rating: '⭐⭐⭐⭐☆', description: 'A mind-bending thriller that dives into the world of dreams.' },
    { title: 'The Dark Knight', rating: '⭐⭐⭐⭐⭐', description: 'A hero must face his darkest foe in Gotham City.' },
    { title: 'Interstellar', rating: '⭐⭐⭐⭐☆', description: 'A space exploration journey to save humanity.' },
  ];
  
  const movieContainer = document.querySelector('section');
  
  movieData.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie');
    movieCard.innerHTML = `
      <h2>${movie.title}</h2>
      <p>Rating: ${movie.rating}</p>
      <div class="description">${movie.description}</div>
      <button>Show Description</button>
    `;
    movieContainer.appendChild(movieCard);
  });
  