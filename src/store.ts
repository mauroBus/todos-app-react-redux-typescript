import { createStore, bindActionCreators, Store } from 'redux'
import rootReducer from './reducers'
import * as todosActions from './pages/todos/_actions'

const bindActions = (store: Store<any, any>) => ({
  todos: bindActionCreators(todosActions, store.dispatch),
})

export default function create() {
  const store = createStore<AppState, any, any, any>(rootReducer)

  const actions = bindActions(store)
  return { actions, store }
}
