import React from 'react'
import { connect } from 'react-redux'
import { AddTodo } from './add-todo'
import { TodoList } from './todo-list'
import { Footer } from './footer'
import {
  addTodo,
  clearCompleted,
  deleteTodo,
  editTodo,
  filterTodos,
  toggleAll,
  toggleStarred,
  toggleTodo,
} from './_actions'
import { getVisibleTodos } from './selectors'

const mapStateToProps = (state: AppState) => ({
  activeFilter: state.todos.activeFilter,
  todos: state.todos.todos,
  visibleTodos: getVisibleTodos(state.todos),
})

const mapDispatchToProps = {
  addTodo,
  clearCompleted,
  deleteTodo,
  editTodo,
  filterTodos,
  toggleAll,
  toggleStarred,
  toggleTodo,
}

type Props = {
  todos: ToDo[]
  visibleTodos: ToDo[]
  activeFilter: VisibilityFilterType
  addTodo: ActionProp<'todos', 'addTodo'>
  clearCompleted: ActionProp<'todos', 'clearCompleted'>
  toggleAll: ActionProp<'todos', 'toggleAll'>
  deleteTodo: ActionProp<'todos', 'deleteTodo'>
  editTodo: ActionProp<'todos', 'editTodo'>
  filterTodos: ActionProp<'todos', 'filterTodos'>
  toggleStarred: ActionProp<'todos', 'toggleStarred'>
  toggleTodo: ActionProp<'todos', 'toggleTodo'>
}

const Todos = ({
  activeFilter,
  addTodo,
  clearCompleted,
  toggleAll,
  deleteTodo,
  editTodo,
  filterTodos,
  todos,
  toggleStarred,
  toggleTodo,
  visibleTodos,
}: Props) => {
  return (
    <section>
      <AddTodo onAdd={addTodo} />
      <TodoList
        activeFilter={activeFilter}
        filterTodos={filterTodos}
        onDelete={deleteTodo}
        onEdit={editTodo}
        onStarred={toggleStarred}
        onToggle={toggleTodo}
        todos={visibleTodos}
      />
      <Footer
        activeFilter={activeFilter}
        clearCompleted={clearCompleted}
        toggleAll={toggleAll}
        filterTodos={filterTodos}
        todos={todos}
      />
    </section>
  )
}

export const TodosPage = connect(mapStateToProps, mapDispatchToProps)(Todos)
