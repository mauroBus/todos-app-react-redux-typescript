import { ToDoActionType } from './_actions'
import { SHOW_ALL } from './_constants'
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  FILTER_TODOS,
  TOGGLE_STARRED_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED,
} from './_actionTypes'
import { sortTodos, toggleAll } from './utils'
import { TODOS } from './todos.example'

export type State = {
  activeFilter: VisibilityFilterType
  todos: ToDo[]
}

const initialState: State = {
  activeFilter: SHOW_ALL as VisibilityFilterType,
  todos: TODOS,
}

export default (state: State = initialState, action: ToDoActionType) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        ...action.todo,
        id: Math.random() * 16,
      }
      return {
        ...state,
        todos: sortTodos([...state.todos, newTodo]),
      }
    }

    case EDIT_TODO: {
      const editedTodo = action.todo
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === editedTodo.id ? editedTodo : todo
        ),
      }
    }

    case DELETE_TODO: {
      const todos = state.todos.filter(todo => todo.id !== action.id)
      return {
        ...state,
        todos,
      }
    }

    case TOGGLE_TODO: {
      const todos = state.todos.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )

      return {
        ...state,
        todos: sortTodos(todos),
      }
    }

    case TOGGLE_STARRED_TODO: {
      const todos = state.todos.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              starred: !todo.starred,
            }
          : todo
      )

      return {
        ...state,
        todos,
      }
    }

    case FILTER_TODOS:
      return {
        ...state,
        activeFilter: action.filter,
      }

    case TOGGLE_ALL:
      return {
        ...state,
        todos: toggleAll(state.todos, action.completed),
      }

    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      }

    default:
      return state
  }
}
