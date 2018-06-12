import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		return (
			<div>Book Detail</div>
		)
	}
}

function mapStateToProps(state){
	return {
		book : activeBook
	}
}

export defaults connect(mapStateToProps)(BookDetail)