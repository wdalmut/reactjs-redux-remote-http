
import $ from 'jquery';

exports.fetchPosts = function(chapter) {
  return $.get("https://www.reddit.com/r/"+chapter+".json");
};
