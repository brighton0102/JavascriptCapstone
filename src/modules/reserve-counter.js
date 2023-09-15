export default function reserveCounter(reserveContainer) {
  let count = 0;
  const reserve = reserveContainer.querySelectorAll('span');
  reserve.forEach(() => {
    count += 1;
  });
  return count;
}