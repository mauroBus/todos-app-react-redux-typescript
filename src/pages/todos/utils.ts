
export const sortTodos = (todos: ToDo[]) => {
  return todos.sort((t1, t2) => {
    if (t1.completed === t2.completed) {
      // Similar items (both completed or both uncompleted) sorted by creation's date.
      return t1.createdAt < t2.createdAt ? -1 : 1
    } else {
      // uncompleted listed first.
      return !t1.completed && t2.completed ? -1 : 1
    }
  })
}

export const getCompletedAmount = (todos: ToDo[]): number =>
  todos.reduce((accum, todo) => (!todo.completed ? accum : accum + 1), 0)

export const getUncompletedAmount = (todos: ToDo[]): number =>
  todos.reduce((accum, todo) => (todo.completed ? accum : accum + 1), 0)

export const toggleAll = (todos: ToDo[], completed: boolean): ToDo[] =>
  todos.map(todo => ({
    ...todo,
    completed,
  }))
