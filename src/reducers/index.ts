import { combineReducers } from 'redux'
import TodosReducer from '../pages/todos/_reducer'

export default combineReducers<any, any>({
  todos: TodosReducer,
})
