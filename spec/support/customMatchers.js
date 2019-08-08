import { EPSILON } from 'app/constants'

expect.extend({
  toApproximatelyEqual(received, expected) {
    const pass = Math.abs(received - expected) < EPSILON;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be approximately equal to ${expected}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be approximately equal to ${expected}`,
        pass: false,
      };
    }
  },
})
