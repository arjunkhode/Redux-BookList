import React from 'react';
import {render} from 'react-dom';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component{
	renderList(){
		return this.props.books.map((book) => {
			return <li onClick= {() => this.props.selectBook(book)} key={book.title} className="list-group-item">
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

function mapDispatchToProps(dispatch){
	return bindActionCreators({ selectBook:selectBook },dispatch);
}

export default connect(matchStateToProps, mapDispatchToProps)(BookList);