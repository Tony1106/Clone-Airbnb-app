import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'


//
// Initial state
//

const initialState = {
  user: {

  },
  itemID: {

  }
}


//
// Reducer
//

const reducer = (state = initialState, action) => {

};

//
// storage
//
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
export {store};
