const { series } = require('../series');

test('Check if series is a function', () => {
  expect(typeof series).toBe('function');
});

test('Check if no error occurs, all functions executes', () => {
  const myMockFn = jest.fn(next => next());
  series(myMockFn, myMockFn, myMockFn, myMockFn, myMockFn);

  expect(myMockFn.mock.calls.length === 5);
});

test('Check if error occurs, functions until the last one is skipped', () => {
  const myMockFn = jest.fn(next => next());
  const myMockFnErr = jest.fn(next => next('Something is wrong'));
  series(myMockFn, myMockFnErr, myMockFn, myMockFn, myMockFn);

  expect(myMockFn.mock.calls.length === 2);
});
