export default {
  namespace: 'test1',
  state: {
    loading: true,
  },
  effects: {
    *aaa({ aaa, def }, { call, put }) {
      console.log(aaa);
      def.state.aa = 5;
      // call()
      yield put({ type: 'changeLoginStatussss', aaaa: true, bbbb: 11,})
    },
  },
  reducers: {
    changeLoginStatussss(state, {aaaa,bbbb}){
      return {
        ...state,
        loading: aaaa,
        ccc: bbbb,
      };
    },
  },
};
