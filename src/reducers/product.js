import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        img: './img/img1.PNG',
        name: 'Product', 
        price: 500,
        price2: 600,
    },
    {
        img: './img/img2.PNG',
        name: 'Product', 
        price: 500,
        price2: 600,
    },
    {
        img: './img/img3.PNG',
        name: 'Product', 
        price: 500,
        price2: 600,
    },
    {
        img: './img/img4.PNG',
        name: 'Product', 
        price: 500,
        price2: 600,
    },
    {
        img: './img/img5.PNG',
        name: 'Product', 
        price: 500,
        price2: 600,
    },
    {
        img: './img/img6.PNG',
        name: 'Product', 
        price: 500,
        price2: 600,
    },
];

var product = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default product;