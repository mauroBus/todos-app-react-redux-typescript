import * as types from './_actionTypes'

export type ToDoActionType =
  | AddTodoActionType
  | EditTodoActionType
  | DeleteTodoActionType
  | FilterTodosActionType
  | ToggleStarredActionType
  | ToggleTodoActionType
  | ToggleAllActionType
  | ClearCompletedActionType

export type AddTodoActionType = {
  type: typeof types.ADD_TODO
  todo: UnsavedToDo
}
export type EditTodoActionType = {
  type: typeof types.EDIT_TODO
  todo: ToDo
}
export type ToggleTodoActionType = {
  type: typeof types.TOGGLE_TODO
  id: number
}
export type DeleteTodoActionType = {
  type: typeof types.DELETE_TODO
  id: number
}
export type ToggleStarredActionType = {
  type: typeof types.TOGGLE_STARRED_TODO
  id: number
}
export type FilterTodosActionType = {
  type: typeof types.FILTER_TODOS
  filter: VisibilityFilterType
}
export type ToggleAllActionType = {
  type: typeof types.TOGGLE_ALL
  completed: boolean
}
export type ClearCompletedActionType = {
  type: typeof types.CLEAR_COMPLETED
}

export const addTodo = (text: string): AddTodoActionType => ({
  type: types.ADD_TODO,
  todo: {
    text,
    completed: false,
    starred: false,
    createdAt: new Date(),
  },
})

export const editTodo = (todo: ToDo): EditTodoActionType => ({
  type: types.EDIT_TODO,
  todo,
})

export const toggleTodo = (id: number): ToggleTodoActionType => ({
  type: types.TOGGLE_TODO,
  id,
})

export const deleteTodo = (id: number): DeleteTodoActionType => ({
  type: types.DELETE_TODO,
  id,
})

export const toggleStarred = (id: number): ToggleStarredActionType => ({
  type: types.TOGGLE_STARRED_TODO,
  id,
})

export const filterTodos = (
  filter: VisibilityFilterType
): FilterTodosActionType => ({
  type: types.FILTER_TODOS,
  filter,
})

export const toggleAll = (completed: boolean): ToggleAllActionType => ({
  type: types.TOGGLE_ALL,
  completed,
})

export const clearCompleted = (): ClearCompletedActionType => ({
  type: types.CLEAR_COMPLETED,
})
