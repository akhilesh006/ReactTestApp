import React from 'react'
import {shallow} from 'enzyme'
import BooksList from '../../container/book-list'
describe('BooksContainer', ()=> {
    it('should render correctly',  ()=> {
        expect(shallow(<BooksList/>)).toMatchSnapshot();
    });
});