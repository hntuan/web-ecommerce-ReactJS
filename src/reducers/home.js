import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        img: './img/img1.PNG',
    },
    {
        img: './img/img2.PNG',
    },
    {
        img: './img/img3.PNG',
    },
    {
        img: './img/img4.PNG',
    },
    {
        img: './img/img5.PNG',
    },
    {
        img: './img/img6.PNG',
    },
];

var home = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default home;