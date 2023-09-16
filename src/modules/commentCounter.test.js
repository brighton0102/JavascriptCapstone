import { counter } from './commentCounter.js';

describe('counter', () => {
  it('should return 0 if data.error.status is 400', () => {
    const data = { error: { status: 400 }, length: 5 };
    const result = counter(data);
    expect(result).toBe(0);
  });

  it('should return the length of data if data.error.status is not 400', () => {
    const data = { error: { status: 500 }, length: 5 };
    const result = counter(data);
    expect(result).toBe(5);
  });

  it('should return 0 if data is an empty array', () => {
    const data = [];
    const result = counter(data);
    expect(result).toBe(0);
  });

  it('should return 3 if data has a length of 3 and error status is not 400', () => {
    const data = { error: { status: 500 }, length: 3 };
    const result = counter(data);
    expect(result).toBe(3);
  });
});