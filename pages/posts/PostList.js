import React from 'react';

class PostList extends React.Component {
  static propTypes = {};

  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }

  state = {};

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default PostList;