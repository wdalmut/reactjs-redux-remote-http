import { connect } from 'react-redux';
import * as components from './components';
import { fetchPosts } from './actions';

export const NewsList = connect(
  function mapStateToProps(state) {
    return { news: state, isFetching: false };
  },
  function mapDispatchToProps(dispatch) {
    return {
      fetchNews: (chapter) => {
        dispatch({
          type: "READING_POST",
        });

        return fetchPosts(chapter).then(function(res) {
          dispatch({
            type: "POSTS_READY",
            news: res.data.children.map((item) => item.data)
          });
        }).fail(function(err) {
          dispatch({
            type: "POSTS_ERR",
            news: []
          });
        });
      }
    };
  }
)(components.NewsList);
