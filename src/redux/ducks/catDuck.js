import {createAction} from "../../helper/utils";

const SET_CAT_CATEGORIES = "catDuck/SET_CAT_CATEGORIES";
const SET_CATS = "catDuck/SET_CATS";
const ADD_CATS = "catDuck/ADD_CATS";
const CLEAR_DATA = "catDuck/CLEAR_DATA";

export const setCatCategories = createAction(SET_CAT_CATEGORIES);
export const setCats = createAction(SET_CATS);
export const addCats = createAction(ADD_CATS);
export const clearData = createAction(CLEAR_DATA);


const initialState = {
    categories: [],
    cats: []
};

export const catDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CAT_CATEGORIES:
            return {...state, categories: payload};
        case SET_CATS:
            return {...state, cats: payload};
        case ADD_CATS:
            return {...state, cats: state.cats.concat(payload)};
        case CLEAR_DATA:
            return {...state, cats: []};
        default:
            return {...state};
    }
};