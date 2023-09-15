import { createLike, getLikeCount } from './likeInteractions.js';
import likeImage from '../styles/like.png';
import { initializeShowMoreButton } from './showMoreButton.js';
import { popupReservation } from './reservation.js';

export function fetchAndRenderData() {
  document.addEventListener('DOMContentLoaded', async () => {
    const showMoreButton = document.getElementById('showMoreButton');
    const movieList = document.querySelector('.movie-list');
    const currentDisplayCount = 12; // Display 12 on the homepage
    let data = [];

    const fetchData = async () => {
    // Fetch data from the TVmaze API
      const response = await fetch(
        'https://api.tvmaze.com/schedule?country=US&date=2014-12-01',
      );
      data = await response.json();
      return data;
    };

    const renderMovies = async (count) => {
      const moviesToRender = data.slice(0, count);

      moviesToRender.forEach(async (show) => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';

        const img = document.createElement('img');
        img.src = show.show.image ? show.show.image.medium : 'placeholder.jpg';
        img.alt = show.show.name;

        const h2 = document.createElement('h2');
        const maxLength = 30;

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

        const likeButton = document.createElement('img');
        likeButton.className = 'like-button';
        likeButton.src = likeImage;
        likeButton.alt = 'Like';

        const likeCounter = document.createElement('span');
        likeCounter.className = 'like-counter';

        const initialLikeCount = await getLikeCount(show.show.id);
        likeCounter.textContent = `Likes: ${initialLikeCount}`;

        likeButton.addEventListener('click', async () => {
          const created = await createLike(show.show.id);
          if (created) {
            const count = await getLikeCount(show.show.id);
            likeCounter.textContent = `Likes: ${count}`;
          }
          
          reservationButton.addEventListener('click', async () => {
            popupReservation(show);
          });

        });

        buttonsDiv.appendChild(likeButton);
        buttonsDiv.appendChild(likeCounter);
        buttonsDiv.appendChild(commentButton);
        buttonsDiv.appendChild(reservationButton);
        movieDiv.appendChild(img);
        movieDiv.appendChild(h2);
        movieDiv.appendChild(buttonsDiv);
        movieList.appendChild(movieDiv);
      });
    };

    await fetchData().then(async () => {
      await renderMovies(currentDisplayCount);

      // Show the show more button if there is more data
      if (currentDisplayCount < data.length) {
        showMoreButton.style.display = 'block';
      }
    });

    initializeShowMoreButton(showMoreButton, renderMovies, data, currentDisplayCount);
  });
}