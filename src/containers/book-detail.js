import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
	render(){
		if(!this.props.book){
		return <div className="bookdetail">Select a book</div>;
	}

		return(
			<div className="bookdetail">
				<div><h3>📚{this.props.book.title}</h3></div>
				<div>It is {this.props.book.pages} pages</div>
				<div>- {this.props.book.author} 🖊</div>
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