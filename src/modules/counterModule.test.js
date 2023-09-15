// reservationCounter.test.js
import reservationCounter from './counterModule.js';

describe('reservationCounter', () => {
  it('should count the number of spans in the container', () => {
    // Create a mock container with spans for testing
    const container = document.createElement('div');
    container.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;

    // Call the reservationCounter function with the container
    const count = reservationCounter(container);

    // Assert that the count is equal to the number of spans (3 in this case)
    expect(count).toEqual(3);
  });

  it('should handle cases with no spans', () => {
    // Create an empty container for testing
    const container = document.createElement('div');

    // Call the reservationCounter function with the empty container
    const count = reservationCounter(container);

    // Assert that the count is 0 since there are no spans
    expect(count).toEqual(0);
  });

  // Add more test cases for edge cases and variations as needed
});
