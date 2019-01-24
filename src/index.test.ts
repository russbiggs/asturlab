import asturlab  from './index';

test('great arc', () => {
  expect(asturlab([-149.86103653907776, 61.14816946898721])).toBe(-9.081601847248038);
});

test('rhumb line', () => {
  const options = {rhumb: true};
  // Süleymaniye Cami
  const coords = [28.964020, 41.016114];
  expect(asturlab(coords, options)).toBe(154.8237536155027);
});

test('rhumb same lng', () => {
  const options = {rhumb: true};
  expect(asturlab([39.8262, 10.123], options)).toBe(0);
});

test('rhumb same lat', () => {
  const options = {rhumb: true};
  expect(asturlab([-80, 21.4225], options)).toBe(90);
});
