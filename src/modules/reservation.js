// Function to fetch all reservations for a specific item from the API
async function fetchAllReservations(itemId) {
    try {
        const apiKey = 'fDqwhSI3IFsJVLYNBHB6';
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/reservations?item_id=${itemId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch reservations');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching reservations:', error);
        return [];
    }
}

// Function to display reservations in the popup
async function displayReservations(itemId, container) {
    try {
        const reservations = await fetchAllReservations(itemId);

        // Clear any existing reservations
        container.innerHTML = '';

        // Loop through reservations and display them
        reservations.forEach((reservation) => {
            // Create a text element to display the reservation
            const reservationText = document.createElement('p');
            reservationText.className = 'reservation-text';
            reservationText.textContent = `@${reservation.username} reserved this from ${reservation.date_start} to ${reservation.date_end}`;

            // Append the reservation text to the container
            container.appendChild(reservationText);
        });
    } catch (error) {
        console.error('Error displaying reservations:', error);
    }
}

// Function to display the reservation popup
export function popupReservation(show) {
    if (show && show.show) {
        // Create the overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        // Create the popup element
        const popup = document.createElement('div');
        popup.className = 'popup';

        // Create a container for the close button
        const closeButtonContainer = document.createElement('div');
        closeButtonContainer.className = 'close-button-container';

        // Create the close button for the popup
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.className = 'close-button';
        closeButton.onclick = () => {
            document.body.removeChild(overlay); // Remove the overlay and popup when the close button is clicked
        };

        // Create the content for the popup
        const content = document.createElement('div');

        // Create an image element for the show's image
        const img = document.createElement('img');
        img.src = show.show.image ? show.show.image.medium : 'placeholder.jpg';
        img.alt = show.show.name;

        // Create an h2 element for the show's name
        const h2 = document.createElement('h2');
        h2.textContent = show.show.name;

        // Create a paragraph element for the show's summary
        const summary = document.createElement('p');
        summary.innerHTML = show.show.summary;

        // Create a reservation form
        const reservationForm = document.createElement('form');
        reservationForm.className = 'reservation-form';

        // Create input fields for name, start date, and end date
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Name';

        const startDateInput = document.createElement('input');
        startDateInput.type = 'date';
        startDateInput.placeholder = 'Start Date';

        const endDateInput = document.createElement('input');
        endDateInput.type = 'date';
        endDateInput.placeholder = 'End Date';

        // Create a "Reserve" button
        const reserveButton = document.createElement('button');
        reserveButton.textContent = 'Reserve';

        // Create a container for displaying reservations
        const reservationsContainer = document.createElement('div');
        reservationsContainer.className = 'reservations-container';

        // Add event listener to the form for submission
        reservationForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent the default form submission behavior

            const reservationData = {
                item_id: show.show.id,
                username: nameInput.value,
                date_start: startDateInput.value,
                date_end: endDateInput.value,
            };

            // Send reservation data to the API using a POST request
            const apiKey = 'fDqwhSI3IFsJVLYNBHB6';
            const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/reservations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });

            if (response.ok) {
                // Reservation was successful
                nameInput.value = '';
                startDateInput.value = '';
                endDateInput.value = '';
                // Optionally, you can close the popup or perform other actions
                // Reload the reservations after a new reservation is added
                displayReservations(show.show.id, reservationsContainer);
            } else {
                // Reservation failed
                alert('Reservation failed. Please try again.');
            }
        });

        // Append the close button to its container
        closeButtonContainer.appendChild(closeButton);

        // Append the image, h2, summary, and close button container to the content
        content.appendChild(closeButtonContainer);
        content.appendChild(img);
        content.appendChild(h2);
        content.appendChild(summary);

        // Append the content to the popup
        popup.appendChild(content);

        // Append the popup to the overlay
        overlay.appendChild(popup);

        // Append the overlay to the body
        document.body.appendChild(overlay);

        // Append input fields and "Reserve" button to the reservation form
        reservationForm.appendChild(nameInput);
        reservationForm.appendChild(startDateInput);
        reservationForm.appendChild(endDateInput);
        reservationForm.appendChild(reserveButton);
        content.appendChild(reservationsContainer);

        // Append the reservation form to the content
        content.appendChild(reservationForm);

        // Append the reservations container to the content
    

        // Show the popup by changing its display property
        popup.style.display = 'flex'; // You can also use "flex" or other display values

        // Display reservations when the popup is opened
        displayReservations(show.show.id, reservationsContainer);
    } else {
        console.error('Invalid show data:', show);
    }
}
