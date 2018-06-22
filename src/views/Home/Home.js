import React, { Component } from 'react';
import { Link } from '@reach/router';

class Home extends Component {
  render() {
    return (
      <div>
        <h3>主页</h3>
        <div>
          <Link to="/">主页</Link>
        </div>
        <div>
          <Link to="/hello">Hello</Link>
        </div>
      </div>
    );
  }
}

export default Home;
