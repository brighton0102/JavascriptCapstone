export function initializeShowMoreButton(showMoreButton, renderMovies, data, currentDisplayCount) {
  showMoreButton.addEventListener('click', async () => {
    currentDisplayCount += 9; // Display 9 more movies
    await renderMovies(currentDisplayCount);

    // Hide the "Show More" button if all movies have been displayed
    if (currentDisplayCount >= data.length) {
      showMoreButton.style.display = 'none';
    }
  });
}
