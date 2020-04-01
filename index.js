const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// Actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM
  }
}

// Reducers
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 20
// }

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCream: 10
}

// const reducer = (state = initialState, action) => {
//   switch(action.type) {
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1
//     }

//     case BUY_ICECREAM: return {
//       ...state,
//       numOfIceCream: state.numOfIceCream - 1
//     }

//     default: return state
//   }
// }

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }

    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCream: state.numOfIceCream - 1
    }

    default: return state
  }
}

// Combine Reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

// Store
const store = createStore(rootReducer, applyMiddleware(logger));

console.log('initial state', store.getState());

const unsbscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsbscribe();
