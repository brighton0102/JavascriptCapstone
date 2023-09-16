/**
 * @jest-environment jsdom
 */
import reserveCounter from './reserve-counter.js';

const container1 = document.createElement('div');
const container2 = document.createElement('div');
const container3 = document.createElement('div');
for (let i = 0; i < 5; i += 1) {
  const span = document.createElement('span');
  container1.append(span);
}

for (let i = 0; i < 10; i += 1) {
  const span = document.createElement('span');
  container3.append(span);
}
test('reserve counter', () => {
  expect(reserveCounter(container1)).toBe(5);
  expect(reserveCounter(container2)).toBe(0);
  expect(reserveCounter(container3)).toBe(10);
});