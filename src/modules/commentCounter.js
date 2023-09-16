export function counter(data) {
  return data?.error?.status !== 400 ? data.length : 0;
}