import { displayReservations } from './displayReservations.js';
// eslint-disable-next-line no-inner-declarations
export async function popupReservation(show) {
  if (show && show.show) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const popup = document.createElement('div');
    popup.className = 'popup';
    const closeButtonContainer = document.createElement('div');
    closeButtonContainer.className = 'close-button-container';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.className = 'close-button';
    closeButton.onclick = () => {
      document.body.removeChild(overlay);
    };
    const content = document.createElement('div');
    const img = document.createElement('img');
    img.src = show.show.image ? show.show.image.medium : 'placeholder.jpg';
    img.alt = show.show.name;

    const h2 = document.createElement('h2');
    h2.textContent = show.show.name;

    const summary = document.createElement('p');
    summary.innerHTML = show.show.summary;

    const reservationForm = document.createElement('form');
    reservationForm.className = 'reservation-form';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';

    const startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.placeholder = 'Start Date';

    const endDateInput = document.createElement('input');
    endDateInput.type = 'date';
    endDateInput.placeholder = 'End Date';

    const reserveButton = document.createElement('button');
    reserveButton.textContent = 'Reserve';
    const reservationsContainer = document.createElement('div');
    reservationsContainer.className = 'reservations-container';

    const totalReservations = document.createElement('p');
    totalReservations.className = 'total-reservations';
    // eslint-disable-next-line no-inner-declarations
    async function fetchTotalReservations(itemId) {
      try {
        const apiKey = 'fDqwhSI3IFsJVLYNBHB6';
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/reservations?item_id=${itemId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch reservations');
        }

        const reservations = await response.json();
        return reservations.length;
      } catch (error) {
        console.error('Error fetching total reservations:', error);
        return 0;
      }
    }
    // eslint-disable-next-line no-inner-declarations
    async function displayTotalReservations(itemId) {
      const total = await fetchTotalReservations(itemId);
      totalReservations.textContent = `Total Reservations: ${total}`;
    }

    reservationForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const reservationData = {
        item_id: show.show.id,
        username: nameInput.value,
        date_start: startDateInput.value,
        date_end: endDateInput.value,
      };

      const apiKey = 'fDqwhSI3IFsJVLYNBHB6';
      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/reservations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });
      /* eslint-disable no-alert */
      if (response.ok) {
        nameInput.value = '';
        startDateInput.value = '';
        endDateInput.value = '';
        displayReservations(show.show.id, reservationsContainer);
        displayTotalReservations(show.show.id);
      } else {
        alert('Reservation failed. Please try again.');
      }
    });
    /* eslint-enable no-alert */
    closeButtonContainer.appendChild(closeButton);
    content.appendChild(closeButtonContainer);
    content.appendChild(img);
    content.appendChild(h2);
    content.appendChild(summary);
    popup.appendChild(content);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    reservationForm.appendChild(nameInput);
    reservationForm.appendChild(startDateInput);
    reservationForm.appendChild(endDateInput);
    reservationForm.appendChild(reserveButton);
    content.appendChild(reservationsContainer);
    content.appendChild(totalReservations);
    content.appendChild(reservationForm);
    popup.style.display = 'flex';
    displayReservations(show.show.id, reservationsContainer);
    displayTotalReservations(show.show.id);
  } else {
    console.error('Invalid show data:', show);
  }
}