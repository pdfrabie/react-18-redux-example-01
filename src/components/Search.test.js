import { act, render, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Imput Component', () =>{
    it('renderred input', () => {
        const { getByTestId } = render(<Search />);
        const input = getByTestId('searchBar');
        expect(input).toBeTruthy();
    })

    it('confirmation not renderred', () => {
        const { queryByTestId } = render(<Search />);
        expect(queryByTestId('searchConfirmation')).toBeFalsy();
    })

    it('confirmation renderred on input not being empty', () => {
        const { getByTestId } = render(<Search />);
        const input = getByTestId('searchBar');
        
        act(() => {
            fireEvent.change(input, {target: {value: '101' }})
        })

        const { queryByTestId } = render(<Search />);
        const div = queryByTestId('searchConfirmation');

        expect(div).toBeTruthy();
    })

    it('input string to have the same value as confirmation string', () => {
        const { getByTestId } = render(<Search />);
        const input = getByTestId('searchBar');
        
        const searchString = '101';
        act(() => {
            fireEvent.change(input, {target: {value: searchString }})
        })

        const span = getByTestId('searchString');
        expect(span.innerHTML).toBe(searchString);
    })
});