import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
	render(){
		if(!this.props.book){
		return <div>Select a book</div>;
	}

		return(
			<div>
				<h3>Details for:</h3>
				<div>📚{this.props.book.title}</div>
				<div>It is {this.props.book.pages} pages</div>
			</div>
			);
	}
}

function mapStateToProps(state){
	return{
	book : state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);