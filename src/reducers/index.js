import { combineReducers } from "redux";
import home from './home';
import product from './product';
import category from './category';
import review from './review';
import blogs from './blogs';
const webReducers = combineReducers({ 
    home: home,
    product:product,
    category: category,
    review: review,
    blogs: blogs,
})

export default webReducers;