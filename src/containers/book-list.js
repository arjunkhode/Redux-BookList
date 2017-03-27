import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';

class BookList extends React.Component{
	renderList(){
		return this.props.books.map((book) => {
			return <li key={book.title} className="list-group-item">
			{book.title}
			</li>
		});
	}
	render(){
		return(
			<ul className="list-group col-md-4">
			{this.renderList()}
			</ul>
			);
	}
}

function matchStateToProps(state){
	//Whatever is returned in here will show up as props
	return {
		books: state.books
	};
}

export default connect(matchStateToProps)(BookList);