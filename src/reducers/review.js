import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        img: './img/pic-1.png',
        name: "John deo",
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.'
    },
    {
        img: './img/pic-2.png',
        name: "John deo",
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.'
    },
    {
        img: './img/pic-3.png',
        name: "John deo",
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.'
    },
    {
        img: './img/pic-4.png',
        name: "John deo",
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.'
    },
    {
        img: './img/pic-5.png',
        name: "John deo",
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.'
    },
    {
        img: './img/pic-6.png',
        name: "John deo",
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.'
    },
];

var review = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default review;