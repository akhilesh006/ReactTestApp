/*let initial = {
    bookList: [
        {title: "Javascript", count: 1},
        {title: "Coder", count: 1},
        {title: "Jobs", count: 1},
        {title: "Noorah", count: 1},
    ]
};*/
export default function BookReducer(state = {}/*= initial*/, action) {
    switch (action.type) {
        case "FETCH_HISTORY":
            // return Object.assign({}, state, {bookList: []});
            return state;
        case "FETCH_HISTORY_SUCCESS":
            return {
                ...state,
                bookList: action.bookList
            };
        case "ERROR_IN_FETCHING":
            return state;
        case "BOOK_CLICKED":
            console.log('book clicked');
            const index = state.bookList.findIndex(book => book.title === action.title);
            if (index > -1) {
                const bookList = [...state.bookList];
                bookList[index].count += 1;
                return {...state, bookList: bookList};
            }
        case "CLEAR_COUNT":
            const bookList = [...state.bookList];
            bookList.map(myBook => myBook.count = 1);
            return {...state, bookList: bookList};
        case "ADD_BOOK":
            const bookList1 = [...state.bookList, action.title]
            console.log('=====???', bookList1)
            return {...state, bookList: bookList1};
        default:
            return state;
    }
}