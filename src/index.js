import './styles/main.css';
import { fetchAndRenderData } from './modules/Api.js';
import reservationCounter from './modules/counterModule.js';

// Call the function to fetch and render data
fetchAndRenderData();

function updateReservationCount() {
  const reserveContainer = document.querySelector('.reservation-container');
  const reservationCountElement = document.querySelector('.reservation-count');

  if (reserveContainer && reservationCountElement) {
    const count = reservationCounter(reserveContainer);
    reservationCountElement.textContent = count;
  } else {
    console.error('Elements not found');
  }
}

window.addEventListener('load', updateReservationCount);
