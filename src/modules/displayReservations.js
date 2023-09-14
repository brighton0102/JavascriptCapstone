import { fetchAllReservations } from './fetchReservations.js';

export async function displayReservations(itemId, container) {
  try {
    const reservations = await fetchAllReservations(itemId);
    container.innerHTML = '';
    reservations.forEach((reservation) => {
      const reservationText = document.createElement('p');
      reservationText.className = 'reservation-text';
      reservationText.textContent = `@${reservation.username} reserved this from ${reservation.date_start} to ${reservation.date_end}`;
      container.appendChild(reservationText);
    });
  } catch (error) {
    console.error('Error displaying reservations:', error);
  }
}
