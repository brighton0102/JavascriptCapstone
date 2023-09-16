import { createLike, getLikeCount } from './likeInteractions.js';
import { popupReservation } from './reservation.js';
import likeImage from '/src/like.png';

let loadedItemCount = 0;
let isLoadingData = false; // Flag to prevent multiple requests
let selectedCountry = 'US'; // Default country (you can change this as needed)

export function fetchAndRenderData() {
  const loadMoreButton = document.querySelector('.load-more-button');
  const movieList = document.querySelector('.movie-list');
  const itemCountElement = document.querySelector('.item-count'); // Get the count element
  itemCountElement.textContent = 'Total Items Loaded: 10';

  const loadItems = () => {
    if (isLoadingData) {
      // If data is already being fetched, prevent multiple requests
      return;
    }
    isLoadingData = true;

    // Clear the existing content in the movieList element
    movieList.innerHTML = '';

    // Fetch data from the TVmaze API based on the selected country
    fetch(`https://api.tvmaze.com/schedule?country=${selectedCountry}&date=2014-12-01&start=${loadedItemCount}`)
      .then((response) => response.json())
      .then(async (data) => {
        isLoadingData = false; // Reset the flag when data is fetched

        // Limit the loop to load only 10 more items
        for (let i = 0; i < 10 && loadedItemCount < data.length; i++) {
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

          buttonsDiv.appendChild(likeButton);
          buttonsDiv.appendChild(likeCounter);
          buttonsDiv.appendChild(commentButton);
          buttonsDiv.appendChild(reservationButton);
          movieDiv.appendChild(img);
          movieDiv.appendChild(h2);
          movieDiv.appendChild(buttonsDiv);
          movieList.appendChild(movieDiv);
          loadedItemCount++;
        }

        itemCountElement.textContent = `Total Items Loaded: ${loadedItemCount}`;
      });
  };

  // Load initial items on page load
  loadItems();

  loadMoreButton.addEventListener('click', loadItems);

  // Add event listeners to change the selected country
  const usButton = document.querySelector('.us-button');
  const canadaButton = document.querySelector('.canada-button');
  const indiaButton = document.querySelector('.india-button');

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

  // Function to reset and load items
  function resetAndLoadItems() {
    loadedItemCount = 0;
    itemCountElement.textContent = 'Total Items Loaded: 0';
    loadItems();
  }
}