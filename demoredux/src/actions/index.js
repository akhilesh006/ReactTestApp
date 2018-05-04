import axios from 'axios'

export function bookClicked(title) {
    return {
        type: "BOOK_CLICKED",
        title: title
    };
}

export function clearClicked() {
    return {
        type: "CLEAR_COUNT"
    };
}


export function addBook(title) {
    return {
        type: "ADD_BOOK",
        title
    };
}

export function fetchHistory() {
    // return {
    //     type: "FETCH_HISTORY"
    // };
    return (dispatch) => {
        console.log('fetching history ---start');
        const promiseObj = axios.get('../api/booksList.json');

        promiseObj.then((response) => {
            console.log("Success");
            dispatch({type: 'FETCH_HISTORY_SUCCESS', bookList: response.data})
        });
        promiseObj.catch((error) => {
            console.log("Error" + error);
            dispatch({type: 'ERROR_IN_FETCHING'})
        });
    };
}
