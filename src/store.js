/**
 * @flow
 */

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import syncNavigator from './syncNavigator'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware, syncNavigator.middleware))

// if (module.hot) {
//   module.hot.accept('./reducers', () => {
//     store.replaceReducer(require('./reducers').default)
//   })
// }

store.runSaga = sagaMiddleware.run

export default store
