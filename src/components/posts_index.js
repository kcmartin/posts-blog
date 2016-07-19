import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  // lifecycle method-only called once
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

// shortcut to avoid mapdispatchtoprops
export default connect (null, { fetchPosts })(PostsIndex);
