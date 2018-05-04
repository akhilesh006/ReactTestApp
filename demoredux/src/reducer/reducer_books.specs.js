import BooksReducer from './reducer_books'

describe('BooksReducer', function () {
    it('should return expected result when action type is unknown', function () {
        expect(BooksReducer()).toEqual();//true
        // expect(BooksReducer()).toEqual({a:20});//false
        // expect(BooksReducer({a:20})).toEqual({a:20});//true
    });
    it('should return expected result form FETCH_HISTORY_SUCCESS action type', function () {
        const state = {
            a: 20,
            b: 10
        };

        const action = {
            type: 'FETCH_HISTORY_SUCCESS',
            bookList: ['book1', 'book2', 'book3']
        }

        expect(BooksReducer(state, action)).toEqual({
            a: 20,
            b: 10,
            bookList: action.bookList
        });

    });
});