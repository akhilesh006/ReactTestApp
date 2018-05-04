import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bookClicked, clearClicked, fetchHistory} from '../actions'
import PropTypes from 'prop-types';

class BookList extends Component {


    componentDidMount() {
        this.props.fetchHistoryFromStore();
    }

    renderList() {
        return this.props.books.map((book, i) =>
            <li className="borderlist" key={i} onClick={() => this.props.myBookClicked(book.title)}>
                {book.title},{book.count}
            </li>
        );
    }

    render() {
        return (
            <div>
                <ul className="borderlistUl">
                    {this.renderList()}
                </ul>
                <input type='button' onClick={this.props.clearButtonClicked} value='Clear'/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.bookList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHistoryFromStore() {
            dispatch(fetchHistory());
        },
        myBookClicked(title) {
            dispatch(bookClicked(title));
        },
        clearButtonClicked() {
            dispatch(clearClicked());
        }
    }
}

BookList.defaultProps = {
    books: [],
    myBookClicked() {
    },
    clearButtonClicked() {
    }
};

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    myBookClicked: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList)