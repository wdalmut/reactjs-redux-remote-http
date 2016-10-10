
var initialState = {
  news: [],
  isFetching: false
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case 'READING_POST':
      return Object.assign({}, state, {isFetching: true});
    case 'POSTS_READY':
      return Object.assign({}, state, {
        isFetching: false,
        news: action.news
      });
    case 'POSTS_ERR':
      return Object.assign({}, state, {
        isFetching: false,
        news: []
      });
    default:
      return state;
  }
}
