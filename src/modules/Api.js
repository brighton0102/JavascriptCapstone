export function fetchAndRenderData() {
  document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the TVmaze API
    fetch('https://api.tvmaze.com/schedule?country=US&date=2014-12-01')
      .then((response) => response.json())
      .then((data) => {
        const movieList = document.querySelector('.movie-list');

        data.forEach((show) => {
          const movieDiv = document.createElement('div');
          movieDiv.className = 'movie';

          const img = document.createElement('img');
          img.src = show.show.image ? show.show.image.medium : 'placeholder.jpg';
          img.alt = show.show.name;

          const h2 = document.createElement('h2');
          const maxLength = 30; // Set a maximum length for the movie name (adjust as needed)

          if (show.show.name.length > maxLength) {
            h2.textContent = `${show.show.name.substring(0, maxLength)}...`;
          } else {
            h2.textContent = show.show.name;
          }

          const buttonsDiv = document.createElement('div');
          buttonsDiv.className = 'buttons';

          const reservationButton = document.createElement('button');
          reservationButton.className = 'reservation-button';
          reservationButton.textContent = 'Reservation';

          const commentButton = document.createElement('button');
          commentButton.className = 'comment-button';
          commentButton.textContent = 'Comment';
          
          buttonsDiv.appendChild(commentButton);
          buttonsDiv.appendChild(reservationButton);
          movieDiv.appendChild(img);
          movieDiv.appendChild(h2);
          movieDiv.appendChild(buttonsDiv);
          movieList.appendChild(movieDiv);
        });
      });
  });
}
