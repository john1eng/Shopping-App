import React from 'react'
import { Products } from '../../data/dummy-data'

const initialState = {
    products: Products,
    yourProducts: [],
    cart: [],
    order: []
}

function shoppingReducer(state = initialState, action) {
    return state;
}

export default shoppingReducer
