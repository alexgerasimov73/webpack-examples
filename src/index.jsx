import React from 'react';
import {render} from 'react-dom';
import * as $ from 'jquery';
import './babel';
import Post from '@models/Post';
import WebpackLogo from './assets/webpack-logo.png'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('New Post', WebpackLogo);

$('pre').addClass('code').html(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack</h1>
    <hr />
    <div className="logo" />
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>Less</h2>
    </div>

    <div className="card">
      <h2>SASS</h2>
    </div>
  </div>
);

render(<App/>, document.getElementById('app'));