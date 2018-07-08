import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}


// This function is the glow between react and redux (connection between)
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    };
}

// connect takes the function and the component and producers a container.
export default connect(mapStateToProps)(BookList);