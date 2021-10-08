import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);


const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

const mockToggleModal = jest.fn();

describe('Modal component', () => {
    //baseline test
    it('renders', () => {
        render (<Modal />);
    });
    
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Modal />)
        expect(asFragment()).toMatchSnapshot() 
    });
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render (<Modal
        //Arrange: render modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        />);
        //Act: Simulate click event
        fireEvent.click(getByText('Close this image'));
        //Assert: Expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})