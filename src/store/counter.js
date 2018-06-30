const counter = {
  state: {
    count: 0,
  },
  reducers: {
    addCount(state, val) {
      const count = state.count + val;
      return {
        ...state,
        count,
      };
    },
  },
  effects: {
    async asyncAddCount(payload) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      this.addCount(payload);
    },
  },
};

export default counter;
