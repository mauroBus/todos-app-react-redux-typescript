import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from './_constants'

const getVisibilityFilter = (state: StateProp<'todos'>): VisibilityFilterType =>
  state.activeFilter

const getTodos = (state: StateProp<'todos'>): ToDo[] => state.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (activeFilter: VisibilityFilterType, todos: ToDo[]) => {
    switch (activeFilter) {
      case SHOW_ALL:
        return todos
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + activeFilter)
    }
  }
)
