import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
      	<div className="row">
      		<BookList/>
      		<BookDetail/>
      	</div>
      	<hr/>
      	<div className="row">
      		weather forcast app
      	</div>
      </div>
    );
  }
}