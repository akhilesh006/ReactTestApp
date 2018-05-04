import React, {Component} from 'react'
import {addBook} from "../actions";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

class BookList extends Component {

    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <div>
                <input type='text' placeholder='add' name="text" onChange={this.handleInput}/>
                <input type='button' value='Add to the List'
                       onClick={() => this.props.addBooksToStore(this.state.text)}/>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return {
        addBooksToStore(title) {
            dispatch(addBook({
                "title": title,
                "count": 1
            }));
        }
    }
}


BookList.defaultProps = {
    text: '',
    addBooksToStore() {
    }
};

BookList.propTypes = {
    text: PropTypes.string,
    addBooksToStore: PropTypes.func
};

export default connect(null, mapDispatchToProps)(BookList)
