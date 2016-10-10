import React from 'react';

exports.NewsList = React.createClass({
  componentDidMount: function() {
    this.props.fetchNews("reactjs");
  },
  renderNewsTitle: function(item) {
    return (
      <div key={item.id}>{item.title}</div>
    )
  },
  search: function(e) {
    if (e.which === 13 && e.target.value.trim() !== "") {
      this.props.fetchNews(e.target.value);
      e.target.value = "";
    }
  },
  render: function() {
    return (
      <div>
        <div><input type="text" placeholder="reactjs" onKeyDown={this.search}/></div>
        {(this.props.news.isFetching) ? <div>{"LOADING..."}</div> : this.props.news.news.map(this.renderNewsTitle)}
      </div>
    )
  }
});


