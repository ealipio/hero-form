import * as React from "react";

export interface PostsProps {}

export interface PostsState {}

class Posts extends React.Component<PostsProps, PostsState> {
  render() {
    return <h2>Posts Component</h2>;
  }
}

export default Posts;
