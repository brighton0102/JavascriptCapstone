import { createLike, getLikeCount } from './likeInteractions.js';
import { popupReservation } from './reservation.js';
import likeImage from './like.png';
import { popupComment } from './commentInteraction.js';

let loadedItemCount = 0;
let isLoadingData = false;
let selectedCountry = 'US';

export function fetchAndRenderData() {
  const loadMoreButton = document.querySelector('.load-more-button');
  const movieList = document.querySelector('.movie-list');
  const itemCountElement = document.querySelector('.item-count');
  itemCountElement.textContent = 'Total Items Loaded: 10';

  const loadItems = () => {
    if (isLoadingData) {
      return;
    }
    isLoadingData = true;

    movieList.innerHTML = '';

    fetch(`https://api.tvmaze.com/schedule?country=${selectedCountry}&date=2014-12-01&start=${loadedItemCount}`)
      .then((response) => response.json())
      .then(async (data) => {
        isLoadingData = false;

        for (let i = 0; i < 10 && loadedItemCount < data.length; i += 1) {
          const show = data[loadedItemCount];
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
          // eslint-disable-next-line no-await-in-loop
          const initialLikeCount = await getLikeCount(show.show.id);
          likeCounter.textContent = `Likes: ${initialLikeCount}`;

          likeButton.addEventListener('click', async () => {
            const created = await createLike(show.show.id);
            if (created) {
              const count = await getLikeCount(show.show.id);
              likeCounter.textContent = `Likes: ${count}`;
            }
          });
          reservationButton.addEventListener('click', async () => {
            popupReservation(show);
          });
          commentButton.addEventListener('click', async () => {
            popupComment(show);
          });

          buttonsDiv.appendChild(likeButton);
          buttonsDiv.appendChild(likeCounter);
          buttonsDiv.appendChild(commentButton);
          buttonsDiv.appendChild(reservationButton);
          movieDiv.appendChild(img);
          movieDiv.appendChild(h2);
          movieDiv.appendChild(buttonsDiv);
          movieList.appendChild(movieDiv);
          loadedItemCount += 1;
        }

        itemCountElement.textContent = `Total Items Loaded: ${loadedItemCount}`;

        // // Call commentModal after data is loaded and movie elements are created
        // commentModal();
      });
  };
  loadItems();

  loadMoreButton.addEventListener('click', loadItems);

  const usButton = document.querySelector('.us-button');
  const canadaButton = document.querySelector('.canada-button');
  const indiaButton = document.querySelector('.india-button');
  function resetAndLoadItems() {
    loadedItemCount = 0;
    itemCountElement.textContent = 'Total Items Loaded: 0';
    loadItems();
  }
  usButton.addEventListener('click', () => {
    selectedCountry = 'US';
    resetAndLoadItems();
  });

  canadaButton.addEventListener('click', () => {
    selectedCountry = 'ES';
    resetAndLoadItems();
  });

  indiaButton.addEventListener('click', () => {
    selectedCountry = 'GB';
    resetAndLoadItems();
  });
}