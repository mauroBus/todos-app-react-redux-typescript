declare global {
  type AppActions = {
    todos: {
      addTodo(text: string): any
      clearCompleted(): any
      toggleAll(completed: boolean): any
      deleteTodo(id: number): any
      editTodo(todo: ToDo): any
      filterTodos(filter: VisibilityFilterType): any
      toggleStarred(id: number): any
      toggleTodo(id: number): any
    }
  }

  type ActionProp<
    T extends keyof AppActions,
    S extends keyof AppActions[T]
  > = AppActions[T][S]
}

export {}
