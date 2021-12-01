import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        img: './img/blog-1.jpg',
        name: "Blogs title goes here",
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.'
    },
    {
        img: './img/blog-2.jpg',
        name: "Blogs title goes here",
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.'
    },
    {
        img: './img/blog-3.jpg',
        name: "Blogs title goes here",
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.'
    },
    {
        img: './img/blog-4.jpg',
        name: "Blogs title goes here",
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.'
    },
    {
        img: './img/blog-5.jpg',
        name: "Blogs title goes here",
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.'
    },
    
];

var blogs = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default blogs;