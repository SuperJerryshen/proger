import { init } from '@rematch/core';
import counter from './counter';

export default () => {
  return init({
    models: {
      // counter,
      test: {
        state: {
          value: 1,
        },
      },
    },
  });
};
